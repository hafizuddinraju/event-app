import { useState } from 'react';
import Link from "next/link";
import { FaArrowRight } from 'react-icons/fa';
import styles from '../../styles/CategoryCard.module.css';

const CategoryCard = ({events}) => {
    const [readMore, setReadMore] = useState(200);


    const { _id, img, cate_name, description } = events;
    const [hover, setHover] = useState(false);

    const handleReadMore = () =>{
        setReadMore(description.length);
    }

    return (
        <div>
            <div className={styles.relative}>
                <img className={styles.easing_imgg} src={img} alt="event"/>
                <div className='hover:bg-pink-100'>
                    <div className="px-6 py-4">
                        <div className={styles.easing_title}>{cate_name}</div>
                        <div className=' text-justify '>
                            <p className={styles.easing_description}>
                            {description?.length > readMore ? (
                      <small>
                        {" "}
                        {description.slice(0, readMore) + "..."}{" "}
                        <button
                          onClick={handleReadMore}
                          className="text-sky-700"
                        //   href={`/categories/${_id}`}
                        >
                          Read More
                        </button>
                      </small>
                    ) : (
                    description
                    )}
                            </p>
                        </div>
                    </div>
                    <div className="px-6 py-4">
                        <button className={styles.easing_btn}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}>
                        Go <span className='inline-block align-middle'><FaArrowRight></FaArrowRight></span>
                        {hover && <div className="absolute bottom-0 right-0 bg-white text-black p-2 rounded-md">Tap to see the details.</div>}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;