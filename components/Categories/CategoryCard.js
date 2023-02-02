import { useState } from 'react';
import Link from "next/link";
import { FaArrowRight } from 'react-icons/fa';
import styles from '../../styles/CategoryCard.module.css';

const CategoryCard = ({events}) => {
    // const [readMore, setReadMore] = useState(200);


    const { _id, code, img, cate_name, description } = events;
    const [hover, setHover] = useState(false);

    // const handleReadMore = () =>{
    //     setReadMore(1000);
    // }

    // const handleShowLess = () =>{
    //     setReadMore(200)
    // }
    return (
        <div>
            <div className={`${styles.relative_main_category}`}>
                <img className={styles.easing_imgg} src={img} alt="event"/>
                <div className='hover:bg-pink-100 transition-all duration-1000'>
                    <div className="px-6 py-4">
                        <div className={styles.easing_title}>{cate_name}</div>
                        <div className=' text-justify '>
                            <p className={`${styles.easing_description} transition-all duration-1000 `}>
                            {description?.length ? (
                      <small className='transition duration-1000'>
                        {" "}
                        {description.slice(0, 100) + "..."}{" "}
                        <button
                         
                          className="text-sky-700"
                        //   href={`/categories/${_id}`}
                        >
                         <Link href={`/subcategory/${code}`}>read more</Link>
                        </button>
                      </small>
                    ) : <>{description} <button className='text-red-500 underline font-bold'>show less</button></>}
                            </p>
                        </div>
                    </div>
                    <div className="px-6 py-4">
                        <Link href={`/subcategory/${code}`}>
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

export default CategoryCard;