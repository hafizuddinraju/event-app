import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye'
import { FcGoogle } from 'react-icons/fc';
import Icon from 'react-icons-kit';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { addUser } from '../lib/helperUser';

const Signup = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState("")
    const { createUser, googleLogin, updateUser, logOut } = useContext(AuthContext)
    const [signUpError, setSignUpError] = useState('');
    const [createUserEmail, setCreateUserEmail] = useState('')
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);

    const router = useRouter()


    const handleToggle = () => {
        if (type === 'password') {
            setIcon(eye);
            setType('text');
        }
        else {
            setIcon(eyeOff);
            setType('password');
        }
    }

    const handleSignUp = data => {
        console.log(data);
        setSignUpError('');
        createUser(data.email, data.password)
            .then(result => {
                const userInfo = { displayName: data?.name }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email);
                        toast.success('successfully done', { autoClose: 500 })
                        logOut();
                        router.push('/login')
                    })
                    .catch(error => console.error(error))
            })
            .catch(error => setSignUpError(error))
    }

    const googleLoginUser = () => {
        googleLogin()
            .then(result => {
                router.push("/")

            })
            .catch(error => {
                toast.success(error, { autoClose: 500 })
            })
    }

    const saveUser = (name, email) => {
        const userData = { name, email, role: 'User' }
        addUser(userData)
            .then(res => {
                // console.log(res);
            })
            .catch(error => {
                console.log(error)
            })
    }
    // hero min-h-screen 
    // hero-content flex-col lg:flex-row
    // hero-content mt-24 flex h-screen justify-center flex-col md:flex-row lg:flex-row items-center gap-4
    return (
        <div className='hero mt-24'>
            <div className='hero-content flex-col lg:flex-row '>
                <div>
                    <img className='h-[450px]' src="https://i.ibb.co/XxqDcj2/Mobile-login-pana.png" alt="" />
                </div>
                <div>
                    <div className='flex justify-center items-center rounded-lg '>
                        <div className='w-96 p-7 my-5 shadow-2xl'>
                            <h1 className='text-2xl text-center font-bold'>Sign Up</h1>
                            <form onSubmit={handleSubmit(handleSignUp)}>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label"> <span className="label-text">Name</span></label>
                                    <input {...register("name", {
                                        required: 'Name is required',
                                    })} className="input input-bordered w-full max-w-xs" type="text" />
                                    {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label"> <span className="label-text">Email</span></label>
                                    <input {...register("email", {
                                        required: 'Email is required'
                                    })} className="input input-bordered w-full max-w-xs" type="email" />
                                    {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label"> <span className="label-text">Password</span></label>
                                    <div className='position: relative'>
                                        <input {...register("password", {
                                            required: 'Password is required',
                                            minLength: { value: 6, message: 'Password must be 6 character long' },
                                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase special character and number' }
                                        })} className="input input-bordered w-full max-w-xs" type={type} />
                                        <span className='position: absolute right-3 top-2' onClick={handleToggle}><Icon icon={icon} size={25} /></span>
                                        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                                    </div>
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label"> <span className="label-text">Confirm Password</span></label>
                                    <input {...register("confirmPassword", {
                                        required: 'Password is required',
                                        minLength: { value: 6, message: 'Password must be 6 character long' },
                                        pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase special character and number' }
                                    })} className="input input-bordered w-full max-w-xs" type="password" />
                                    {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                                </div>
                                <input className='btn btn-info w-full mt-6 text-white' value="Sign Up" type="submit" />
                                {signUpError && <p className='text-red-600'> {signUpError}</p>}
                                {/* <button onClick={googleLoginUser} type="submit" className="btn w-full mt-2 border text-gray-800 bg-gray-50 border-sky-500 hover:bg-white">Sign In with <FcGoogle className="ml-4 text-2xl"></FcGoogle></button> */}
                            </form>
                            <div>
                                <p className="text-sm pt-4 capitalize text-center">Already have an account? <Link href='/login' className="text-[#0EA5E9] ">Login</Link> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup