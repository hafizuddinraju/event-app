import Head from "next/head";
import { useState } from "react";
import { FaEnvelope, FaEye } from "react-icons/fa";

const Login = () => {
    const [pShow, setPShow] = useState(false)
    //show password 
    const togglePassVisibility = () => {
        setPShow(!pShow)
    }

    return (
        <div className="mt-32 bg-base-200">
            <Head>Login</Head>
            <div className="container mx-auto">
                <p className="text-center ">login</p>
                <div className="flex items-center gap-4">
                    <div className="w-6/12">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil officia officiis obcaecati non cum, voluptatem nesciunt voluptas nulla explicabo temporibus suscipit aliquam perspiciatis delectus labore tempore consequatur, tenetur natus alias accusantium iste ipsa! Architecto nulla ipsam provident impedit distinctio eos!</p>
                    </div>
                    <div className="w-6/12 p-6 bg-red-200">
                        <form className="flex flex-col justify-center space-y-3 w-2/3 mx-auto">
                            <div className="input-group justify-center">
                                <input type="text" placeholder="Email" className="input focus:outline-none w-full" />
                                <span className="bg-base-100"><FaEnvelope className="text-base-200 cursor-pointer hover:text-cyan-300" /></span>
                            </div>
                            <div className="input-group justify-center  focus:border focus:border-cyan-300">
                                <input type={pShow ? 'text' : 'password'} placeholder="Password" className="input focus:outline-none w-full" />
                                <span className="bg-base-100"><FaEye onClick={togglePassVisibility} className="text-base-200 cursor-pointer hover:text-cyan-300" /></span>
                            </div>
                            <button type="submit" className="btn btn-success">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;