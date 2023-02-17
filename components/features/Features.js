import React from 'react';
import { BsHouse } from 'react-icons/bs';
import { FaHandsHelping, FaHeart } from 'react-icons/fa';
import { MdOutlineConnectWithoutContact } from 'react-icons/md';
import styles from '../../styles/Features.module.css'

const Features = () => {
    return (
      <section className='bg-[#fbf9f9] py-10 md:py-20'>
          <div className=' max-w-screen-xl mx-auto '>
            <div className='text-center mb-5'>
                <p className='text-lg sm:text-4xl lg:text-5xl font-bold'>
                    <span className='text-sky-500 '>Hello! </span>
                    Your Event Management <br /> Agency is here.
                </p>
            </div>
            <div className='hidden sm:block text-center text-lg mx-10 sm:mx-20 md:mx-48 my-5'>
                <p>The goal of our event management agency is to ensure that the event runs smoothly and is a success for all involved. We work closely with clients to understand their needs and goals, and then use our expertise to plan and execute an event that meets those needs and exceeds expectations.</p>
            </div>
            <div className='flex flex-wrap justify-around mt-10'>
                <div className={`h-44 ${styles.feature_card_css} shadow-sky-200 w-44 p-5 mb-3 hover:border hover:border-sky-300 shadow-md sm:shadow-none`}>
                    <div className='flex justify-center align-middle mb-5'>
                        <BsHouse className={`h-10 w-10 ${styles.icon} text-sky-400 `}></BsHouse>
                    </div>
                    <div className='text-center'>
                        <p className='text-lg font-semibold'>Find out Your desired venue</p>
                    </div>
                </div>
                <div className={`h-44 ${styles.feature_card_css} shadow-sky-200 w-44 p-5 mb-3 hover:border hover:border-sky-300 shadow-md sm:shadow-none`}>
                    <div className='flex justify-center align-middle'>
                        <MdOutlineConnectWithoutContact className={`h-10 w-10 ${styles.icon} text-sky-400 mb-5 `}></MdOutlineConnectWithoutContact>
                    </div>
                    <div className='text-center'>
                        <p className='text-lg font-semibold'>Connect your vendor</p>
                    </div>
                </div>
                <div className={`h-44 ${styles.feature_card_css} shadow-sky-200 w-44 p-5 mb-3 hover:border hover:border-sky-300 shadow-md sm:shadow-none`}>
                    <div className='flex justify-center align-middle'>
                        <FaHandsHelping className={`h-10 w-10 ${styles.icon} text-sky-400 mb-5 `}></FaHandsHelping>
                    </div>
                    <div className='text-center'>
                        <p className='text-lg font-semibold'>Let us organize your event</p>
                    </div>
                </div>
                <div className={`h-44 ${styles.feature_card_css} shadow-sky-200 w-44 p-5 mb-3 hover:border hover:border-sky-300 shadow-md sm:shadow-none`}>
                    <div className='flex justify-center align-middle'>
                        <FaHeart className={`h-10 w-10 ${styles.icon} text-sky-400 mb-5 `}></FaHeart>
                    </div>
                    <div className='text-center'>
                        <p className='text-lg font-semibold'>enjoy your precious moment</p>
                    </div>
                </div>
            </div>
            <div className='hidden -mt-5 sm:flex sm:flex-wrap justify-around sm:mx-20 md:mx-24 lg:mx-36'>
                <div className={styles.horizontal_line}>
                    <p className='py-1 '>1</p>
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
      </section>
    );
};

export default Features;