import styles from '../../styles/CategoryCard.module.css';

const CategoryCard = ({events}) => {
    const { img, title, description } = events;

    return (
        <div>
            <div className={styles.relative}>
                <img className={styles.easing_imgg} src={img} alt="event"/>
                <div className='hover:bg-pink-100'>
                    <div className="px-6 py-4">
                        <div className={styles.easing_title}>{title}</div>
                        <p className={styles.easing_description}>
                        {description}
                        </p>
                    </div>
                    <div className="px-6 py-4">
                        <button className={styles.easing_btn}>
                        Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;