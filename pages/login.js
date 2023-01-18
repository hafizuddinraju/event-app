import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { FaEnvelope, FaEye } from "react-icons/fa";

const Login = () => {
    const [pShow, setPShow] = useState(false)
    //show password 
    const togglePassVisibility = () => {
        setPShow(!pShow)
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
                        <form className="flex flex-col justify-center space-y-3 w-2/3 mx-auto bg-base-100 shadow-lg p-6 ">
                            <h4 className="text-center text-3xl uppercase py-4">login</h4>
                            <div className="relative">
                                <input type="text" placeholder="Email" className="input focus:outline-none w-full input-bordered focus:border focus:border-cyan-300" />
                                <span className="bg-base-100"><FaEnvelope size={20} className="text-gray-400 cursor-pointer hover:text-[#0EA5E9] absolute right-4 top-1/2 -translate-y-2/4 " /></span>
                            </div>
                            <div className="justify-center relative">
                                <input type={pShow ? 'text' : 'password'} placeholder="Password" className="input input-bordered focus:outline-none w-full focus:border focus:border-cyan-300" />
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