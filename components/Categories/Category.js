import Link from 'next/link';
import React from 'react';
import CategoryCard from './CategoryCard';


const Category = () => {

  const data = [
                    {
                    "id": 1,
                    "img": "https://i.ibb.co/T82Xw25/wedding-theme.jpg",
                    "title": "Wedding Theme",
                    "description": "Our marriage event management team allows users to plan and organize various aspects of a wedding, such as guest lists, budget tracking, and event scheduling."
                    },
                    {
                    "id": 2,
                    "img": "https://i.ibb.co/qNsYRg6/birthday-plan.jpg",
                    "title": "Birthday Plans",
                    "description": "Our birthday event management Process is an user-friendly and easy-to-use  that allows you to plan and organize all aspects of your birthday event."
                    },
                    {
                    "id": 3,
                    "img": "https://i.ibb.co/RH2KZjp/Sports-event-2.jpg",
                    "title": "Sports",
                    "description": "Welcome to our Sports Event Management website! Our team is dedicated to providing a seamless and efficient experience for managing your sports events."
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
            <div className='flex justify-center mb-20 tooltip' data-tip='Tap to explore more events'>
                <Link href='/' className='btn text-xl normal-case bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer border border-blue-500'>See more...</Link>
            </div>
        </div>
    );
};

export default Category;