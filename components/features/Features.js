import React from 'react';
import { BsHouse } from 'react-icons/bs';
import { FaHandsHelping, FaHeart } from 'react-icons/fa';
import { MdOutlineConnectWithoutContact } from 'react-icons/md';
import styles from './Features.module.css'

const Features = () => {
    return (
        <div className='my-20'>
            <div className='text-center'>
                <p className='text-3xl font-bold'>
                    <span className='text-sky-500'>Hello! </span>
                    Your Event Management Agency is here.
                </p>
            </div>
            <div className='text-center text-lg mx-10 sm:mx-20 md:mx-48 my-5'>
                <p>The goal of our event management agency is to ensure that the event runs smoothly and is a success for all involved. We work closely with clients to understand their needs and goals, and then use our expertise to plan and execute an event that meets those needs and exceeds expectations.</p>
            </div>
            <div className='flex flex-wrap justify-around mt-10'>
                <div className='h-44 w-44 p-5 hover:border hover:border-sky-300'>
                    <div className='flex justify-center align-middle mb-5'>
                        <BsHouse className='h-10 w-10 text-sky-400 hover:text-pink-400'></BsHouse>
                    </div>
                    <div className='text-center'>
                        <p className='text-lg font-semibold'>Find out Your desired venue</p>
                    </div>
                </div>
                <div className='h-44 w-44 p-5 hover:border hover:border-sky-300'>
                    <div className='flex justify-center align-middle'>
                        <MdOutlineConnectWithoutContact className='h-10 w-10 text-sky-400 hover:text-pink-400 mb-5'></MdOutlineConnectWithoutContact>
                    </div>
                    <div className='text-center'>
                        <p className='text-lg font-semibold'>Connect your vendor</p>
                    </div>
                </div>
                <div className='h-44 w-44 p-5 hover:border hover:border-sky-300'>
                    <div className='flex justify-center align-middle'>
                        <FaHandsHelping className='h-10 w-10 text-sky-400 hover:text-pink-400 mb-5'></FaHandsHelping>
                    </div>
                    <div className='text-center'>
                        <p className='text-lg font-semibold'>Let us organize your event</p>
                    </div>
                </div>
                <div className='h-44 w-44 p-3 hover:border hover:border-sky-300'>
                    <div className='flex justify-center align-middle'>
                        <FaHeart className='h-10 w-10 text-sky-400 hover:text-pink-400 mb-5'></FaHeart>
                    </div>
                    <div className='text-center'>
                        <p className='text-lg font-semibold'>enjoy your precious moment</p>
                    </div>
                </div>
            </div>
            <div className='hidden sm:flex sm:flex-wrap justify-around sm:mx-20 md:mx-24 lg:mx-36'>
                <div className={styles.horizontal_line}>
                    <p className='py-1'>1</p>
                </div>
                <div class="flex-grow my-auto bg-gray-200 h-0.5"></div>
                <div className={styles.horizontal_line}>
                    <p className='py-1'>2</p>
                </div>
                <div class="flex-grow my-auto bg-gray-200 h-0.5"></div>
                <div className={styles.horizontal_line}>
                    <p className='py-1'>3</p>
                </div>
                <div class="flex-grow my-auto bg-gray-200 h-0.5"></div>
                <div className={styles.horizontal_line}>
                    <p className='py-1'>4</p>
                </div>
            </div>
        </div>
    );
};

export default Features;