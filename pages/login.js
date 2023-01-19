import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaEye } from "react-icons/fa";
import { AuthContext } from "../context/AuthProvider";

const Login = () => {
    const [pShow, setPShow] = useState(false)
    const { register, handleSubmit } = useForm()
    const { signIn } = useContext(AuthContext)
    const router = useRouter()

    //show password 
    const togglePassVisibility = () => {
        setPShow(!pShow)
    }
    // control login form
    const handleLoginForm = data => {
        signIn(data.email, data.password)
            .then(result => {
                router.push('/')
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div className="mt-32">
            <Head>Login</Head>
            <div className="container mx-auto">
                <div className="flex items-center gap-4">
                    <div className="w-6/12">
                        <img src="https://i.ibb.co/9Wty6PY/Mobile-login-bro-1.png" alt="" />
                    </div>
                    <div className="w-6/12 ">
                        <form onSubmit={handleSubmit(handleLoginForm)} className="flex flex-col justify-center space-y-3 w-2/3 mx-auto bg-base-100 shadow-lg p-6 ">
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