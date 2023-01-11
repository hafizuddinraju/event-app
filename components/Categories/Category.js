import React from 'react';
import CategoryCard from './CategoryCard';


const Category = () => {

  const data = [
                    {
                    "id": 1,
                    "img": "https://i.ibb.co/T82Xw25/wedding-theme.jpg",
                    "title": "Wedding Theme",
                    "description": "This is a description for event 1"
                    },
                    {
                    "id": 2,
                    "img": "https://i.ibb.co/qNsYRg6/birthday-plan.jpg",
                    "title": "Birthday Plans",
                    "description": "This is a description for event 2"
                    },
                    {
                    "id": 3,
                    "img": "https://i.ibb.co/RPv1p8m/valentine-s-theme.jpg",
                    "title": "Valentine's Theme",
                    "description": "This is a description for event 3"
                    }
                ]

    return (
        <div className='m-10'>
            <div className='text-center my-20'>
                <h3 className='font-bold text-3xl'>Events for You</h3>
            </div>
            <div className='flex flex-wrap justify-around my-10'>
                {
                    data.map(event => <CategoryCard
                    key={event.id}
                    events={event}
                    ></CategoryCard> )
                }
            </div>
        </div>
    );
};

export default Category;