import React from 'react';
import { FaHandshake, FaLocationArrow } from 'react-icons/fa';
import { MdOutlineEmail, MdOutlineEventAvailable } from 'react-icons/md';

const HowToReachUs = () => {
    return (
        <div className='my-20'>
            <div className='flex flex-wrap justify-around'>
                <div className='h-56 w-56 p-5 bg-sky-50 border rounded-lg cursor-pointer'>
                    <div className='flex justify-center align-middle'>
                        <FaLocationArrow className='h-10 w-10 text-sky-400 hover:text-pink-400'></FaLocationArrow>
                    </div>
                    <div className='text-center my-4'>
                        <p className='text-lg font-semibold'>Postal Address</p>
                    </div>
                    <div className='text-center'>
                        <p className='text-sm font-semibold'>EventMart Agency</p>
                        <p className='text-sm font-semibold'>Kazi Nazrul Islam Avenue</p>
                        <p className='text-sm font-semibold'>N.L.I. Tower, 54</p>
                    </div>
                </div>
                <div className='h-56 w-56 p-5 bg-sky-50 border rounded-lg cursor-pointer'>
                    <div className='flex justify-center align-middle'>
                        <MdOutlineEmail className='h-10 w-10 text-sky-400 hover:text-pink-400'></MdOutlineEmail>
                    </div>
                    <div className='text-center my-4'>
                        <p className='text-lg font-semibold'>Phone & Email</p>
                    </div>
                    <div className='text-center'>
                        <p className='text-sm font-semibold'>Phone: +8801777799893</p>
                        <p className='text-sm font-semibold'>Fax: 1-34-54-333</p>
                        <p className='text-sm font-semibold'>Email: event.mart@gmail.com</p>
                    </div>
                </div>
                <div className='h-56 w-56 p-5 bg-sky-50 border rounded-lg cursor-pointer'>
                    <div className='flex justify-center align-middle'>
                        <MdOutlineEventAvailable className='h-10 w-10 text-sky-400 hover:text-pink-400'></MdOutlineEventAvailable>
                    </div>
                    <div className='text-center my-4'>
                        <p className='text-lg font-semibold'>Open hours</p>
                    </div>
                    <div className='text-center'>
                        <p className='text-sm font-semibold'>Monday to Friday</p>
                        <p className='text-sm font-semibold'>8.00 am to 5.00 pm</p>
                        <p className='text-sm font-semibold'>Weekend closed</p>
                    </div>
                </div>
                <div className='h-56 w-56 p-5 bg-sky-50 border rounded-lg cursor-pointer'>
                    <div className='flex justify-center align-middle'>
                        <FaHandshake className='h-10 w-10 text-sky-400 hover:text-pink-400'></FaHandshake>
                    </div>
                    <div className='text-center my-4'>
                        <p className='text-lg font-semibold'>Sessions</p>
                    </div>
                    <div className='text-center'>
                        <p className='text-sm font-semibold'>Morning, 8.00am - 12.00pm</p>
                        <p className='text-sm font-semibold'>Afternoon, 1.00pm - 5.00pm</p>
                        <p className='text-sm font-semibold'>Full day, 8.00am - 5.00pm</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowToReachUs;