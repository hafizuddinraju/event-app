import React from 'react';
import { useState } from 'react';

import Link from "next/link";
import { FaArrowRight } from 'react-icons/fa';

import styles from '../../styles/CategoryCard.module.css';

const CategoryCards = ({events}) => {
    const {img,code, cate_name, description} = events;
    
    const [hover, setHover] = useState(false);
    return (
          <div className="rounded-xl h-72 transition duration-1000 shadow-sky-500 hover:scale-105 shadow-lg">
            <div className="p-5 py-5 flex flex-col">
              <div className='rounded-xl overflow-hidden'>
              <img src={img} alt='' className=''/>
              </div>
            </div>
            <div className='py-5'>
            <h6 className="mb-2 ml-5 font-semibold leading-5">{cate_name}</h6>
            <div className=' text-justify '>
                            {/* <p className={`${styles.easing_description} transition-all ml-5 duration-1000 `}>
                            {description?.length ? (
                      <small className='transition duration-1000'>
                        {" "}
                        {description.slice(0, 50) + "..."}{" "}
                        <button
                         
                          className="text-sky-700 text-semibold"
                        //   href={`/categories/${_id}`}
                        >
                         <Link href={`/subcategory/${code}`}>read more</Link>
                        </button>
                      </small>
                    ) : <>{description} <button className='text-red-500 underline font-bold'>show less</button></>}
                            </p> */}
                        </div>
            </div>
            <div className="px-6 py-4">
                        <Link href={`/subcategory/${code}`}>
                        <button className={`${styles.easing_btn} -mt-7 transition-all duration-1000`}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}>
                        Go <span className='inline-block align-middle'><FaArrowRight></FaArrowRight></span>
                        {hover && <div className="absolute bottom-0 right-0 transition duration-1000 bg-white text-black p-2 rounded-md">Tap to see the details.</div>}
                        </button>
                        </Link>
                    </div>

            </div>
    );
};

export default CategoryCards;