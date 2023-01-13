import { useState } from 'react';
import styles from '../../styles/CategoryCard.module.css';

const CategoryCard = ({events}) => {
    const { img, title, description } = events;
    const [hover, setHover] = useState(false);

    return (
        <div>
            <div className={styles.relative}>
                <img className={styles.easing_imgg} src={img} alt="event"/>
                <div className='hover:bg-pink-100'>
                    <div className="px-6 py-4">
                        <div className={styles.easing_title}>{title}</div>
                        <div className=' text-justify '>
                            <p className={styles.easing_description}>
                            {description}
                            </p>
                        </div>
                    </div>
                    <div className="px-6 py-4">
                        <button className={styles.easing_btn}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}>
                        Go
                        {hover && <div className="absolute bottom-0 right-0 bg-white text-black p-2 rounded-md">Tap to see the details.</div>}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;