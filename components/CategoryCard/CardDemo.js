import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import styles from '../../styles/CategoryCard.module.css';

const CardDemo = ({ sub, gridView }) => {
    // console.log(sub);
    const { name, image_url, description, _id } = sub

    const [hover, setHover] = useState(false);
    return (
        <div>
            <div className={`${gridView ? "md:flex w-3/4 border-2 duration-300 border-indigo-300 hover:border-indigo-400 rounded-xl ml-16 hover:ml-14" : "border-2 duration-300 border-indigo-300 rounded-xl hover:border-indigo-400"} mt-5 hover:mt-0 mx-auto`}>
            <img className={gridView ? "rounded-xl w-full md:h-[270px] lg:h-[245px] md:w-1/2 lg:w-2/4" : styles.easing_imgg} src={image_url} alt="event" />
            <div className='bg-white hover:bg-pink-100 transition-all duration-1000 rounded-xl'>
                <div className="px-6 py-4">
                <div className={`h-12 ${styles.easing_title}`}>{name}</div>
                <div className='text-justify'>
                    <p className={`${styles.easing_description} transition-all duration-1000 h-20`}>
                    {description.slice(0, 130) + "..."}
                    </p>
                </div>
                </div>
                <div className="px-6 py-4 flex justify-end">
                    <Link href={`/singleevent/${_id}`}>
                        <button data-tip="Tap to see details" className={`${styles.easing_btn} transition-all duration-1000 tooltip`}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}>
                        Go <span className='inline-block align-middle'><FaArrowRight /></span>
                        </button>
                    </Link>
                    </div>
            </div>
            </div> 
        </div>
    );
};

export default CardDemo;