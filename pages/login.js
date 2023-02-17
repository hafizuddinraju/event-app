import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaEye } from "react-icons/fa";
import { FcGoogle } from 'react-icons/fc';
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthProvider";
import { updateUser } from "../lib/helperUser";

const Login = () => {
    const [pShow, setPShow] = useState(false)
    const { register, handleSubmit } = useForm()

    const { signIn, googleLogin } = useContext(AuthContext)
    const router = useRouter()

    //show password 
    const togglePassVisibility = () => {
        setPShow(!pShow)
    }
    // control login form
    const handleLoginForm = data => {
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                router.push('/')
            })
            .catch(err => {
                toast.error(err.message, { autoClose: 1000 })
            })
    }

    const googleLoginUser = () => {
        googleLogin()
            .then(result => {

                saveUser(result.user.displayName, result.user.email)
                router.push("/")

            })
            .catch(error => {
                toast.success(error, { autoClose: 500 })
            })
    }

    const saveUser = (name, email) => {
        const info = { name, email, role: 'User' };
        console.log(info)
        updateUser(email, info)
            .then(res => {
                // console.log(res);
            })
            .catch(error => {
                console.log(error)
            })

    }
    return (
        <div className="mt-24">
            <Head>Login</Head>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
                    <div className="">
                        <img src="https://i.ibb.co/9Wty6PY/Mobile-login-bro-1.png" alt="" />
                    </div>
                    <div className="">
                        <form onSubmit={handleSubmit(handleLoginForm)} className="flex flex-col justify-center space-y-3 lg:w-2/3 mx-auto shadow-lg p-6 ">
                            <h4 className="text-center text-3xl uppercase py-4 font-semibold">login</h4>
                            <div className="relative">
                                <input {...register('email', { required: 'email required' })} type="text" placeholder="Email" className="input focus:outline-none w-full input-bordered focus:border focus:border-cyan-300" />
                                <span className="bg-base-100"><FaEnvelope size={20} className="text-gray-400 cursor-pointer hover:text-[#0EA5E9] absolute right-4 top-1/2 -translate-y-2/4 " /></span>
                            </div>
                            <div className="justify-center relative">
                                <input {...register('password', { required: 'required' })} type={pShow ? 'text' : 'password'} placeholder="Password" className="input input-bordered focus:outline-none w-full focus:border focus:border-cyan-300" />
                                <span className="bg-base-100"><FaEye size={20} onClick={togglePassVisibility} className="text-gray-400 cursor-pointer hover:text-[#0EA5E9] absolute right-4 top-1/2 -translate-y-2/4" /></span>
                            </div>
                            <button type="submit" className="btn bg-[#0EA5E9] border-none hover:bg-[#0EA5E9]">Login</button>
                            <button onClick={googleLoginUser} type="submit" className="btn  border text-gray-800 bg-gray-50 border-sky-500 hover:bg-white">Sign In with <FcGoogle className="ml-4 text-2xl"></FcGoogle></button>
                            <div>
                                <p className="text-sm capitalize text-center">new to eventMart? <Link href='/signup' className="text-[#0EA5E9]">sign up</Link> </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;