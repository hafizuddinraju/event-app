import React from 'react';
import { FaHandshake, FaLocationArrow } from 'react-icons/fa';
import { MdOutlineEmail, MdOutlineEventAvailable } from 'react-icons/md';

const ReachUs = () => {
    return (
        <div className='py-28  max-w-screen-xl mx-auto'>
            <div className='flex flex-wrap justify-around'>
                <div className='h-56 w-56 p-5 bg-white border rounded-lg cursor-pointer mb-3'>
                    <div className='flex justify-center align-middle'>
                        <FaLocationArrow className='h-10 w-10 text-sky-300 hover:text-pink-300'></FaLocationArrow>
                    </div>
                    <div className='text-center my-4'>
                        <p className='text-lg font-semibold'>Postal Address</p>
                    </div>
                    <div className='text-center'>
                        <p className='text-sm font-semibold text-gray-600'>EventMart Agency</p>
                        <p className='text-sm font-semibold text-gray-600'>Kazi Nazrul Islam Avenue</p>
                        <p className='text-sm font-semibold text-gray-600'>N.L.I. Tower, 54</p>
                    </div>
                </div>
                <div className='h-56 w-56 p-5 bg-sky-50 border rounded-lg cursor-pointer mb-3'>
                    <div className='flex justify-center align-middle'>
                        <MdOutlineEmail className='h-10 w-10 text-sky-300 hover:text-pink-300'></MdOutlineEmail>
                    </div>
                    <div className='text-center my-4'>
                        <p className='text-lg font-semibold'>Phone & Email</p>
                    </div>
                    <div className='text-center'>
                        <p className='text-sm font-semibold text-gray-600'>Phone: +8801777799893</p>
                        <p className='text-sm font-semibold text-gray-600'>Fax: 1-34-54-333</p>
                        <p className='text-sm font-semibold text-gray-600'>Email: event.mart@gmail.com</p>
                    </div>
                </div>
                <div className='h-56 w-56 p-5 bg-white border rounded-lg cursor-pointer mb-3'>
                    <div className='flex justify-center align-middle'>
                        <MdOutlineEventAvailable className='h-10 w-10 text-sky-300 hover:text-pink-300'></MdOutlineEventAvailable>
                    </div>
                    <div className='text-center my-4'>
                        <p className='text-lg font-semibold'>Open hours</p>
                    </div>
                    <div className='text-center'>
                        <p className='text-sm font-semibold text-gray-600'>Monday to Friday</p>
                        <p className='text-sm font-semibold text-gray-600'>8.00 am to 5.00 pm</p>
                        <p className='text-sm font-semibold text-gray-600'>Weekend closed</p>
                    </div>
                </div>
                <div className='h-56 w-56 p-5 bg-sky-50 border rounded-lg cursor-pointer mb-3'>
                    <div className='flex justify-center align-middle'>
                        <FaHandshake className='h-10 w-10 text-sky-300 hover:text-pink-300'></FaHandshake>
                    </div>
                    <div className='text-center my-4'>
                        <p className='text-lg font-semibold'>Sessions</p>
                    </div>
                    <div className='text-center'>
                        <p className='text-sm font-semibold text-gray-600'>Morning, 8.00am - 12.00pm</p>
                        <p className='text-sm font-semibold text-gray-600'>Afternoon, 1.00pm - 5.00pm</p>
                        <p className='text-sm font-semibold text-gray-600'>Full day, 8.00am - 5.00pm</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReachUs;