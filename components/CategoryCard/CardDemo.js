import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

import styles from '../../styles/CategoryCard.module.css';
const CardDemo = ({ sub }) => {
    console.log(sub);
    const { name, image_url, description, _id } = sub

    const [hover, setHover] = useState(false);
    return (
        <div>
            <div className={`${styles.relative} mx-auto`}>
                <img className={styles.easing_imgg} src={image_url} alt="event" />
                <div className='hover:bg-pink-100 transition-all duration-1000'>
                    <div className="px-6 py-4">
                        <div className={styles.easing_title}>{name}</div>
                        <div className=' text-justify '>
                            <p className={`${styles.easing_description} transition-all duration-1000 `}>
                                {description.slice(0, 120)}
                            </p>
                        </div>
                    </div>
                    <div className="px-6 py-4">
                        <Link href={`/singleevent/${_id}`}>
                            <button className={`${styles.easing_btn} transition-all duration-1000`}
                                onMouseEnter={() => setHover(true)}
                                onMouseLeave={() => setHover(false)}>
                                Go <span className='inline-block align-middle'><FaArrowRight></FaArrowRight></span>
                                {hover && <div className="absolute bottom-0 right-0 transition duration-1000 bg-white text-black p-2 rounded-md">Tap to see the details.</div>}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDemo;