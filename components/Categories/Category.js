import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import CategoryCard from './CategoryCard';
import { getCategory } from '../../lib/helperCategory';
import Spinner from '../../components/Spinner/Spinner';

import { GiVineFlower } from "react-icons/gi";
import CategoryCards from './CategoryCards';


const Category = () => {

    const { data: allCategories = [], error, isError, refetch, isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await getCategory();
            return res;
        }
    })
    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
           <div className='grid grid-rows-1 sm:grid-rows-1'>
             <h2 className='text-center text-5xl font-semibold '>Our <span className='text-sky-600'>all events</span></h2>
        <div className='max-w-[1400px] flex my-10  mx-auto'>
            <div className='text-center mr-12 my-20'>
            <div className='justify-center items-center mt-20 text-center'>
                <GiVineFlower className='ml-72 mb-5 text-sky-500' size={80}/>

         <section className='bg-[#f1f1f1] py-28'>
              <div className='max-w-screen-xl mx-auto parent-category-container'>
             <h2 className='text-center text-5xl mb-20 font-bold uppercase'>Events <span className='text-sky-600 '>for you</span></h2>
        <div className=' flex gap-5'>
            <div className='  '>
            <div className=' mt-20 text-center'>
                <GiVineFlower className='mx-auto mb-5 text-sky-500' size={80}/>

                <div>
                <h1 className='text-5xl transition duration-1000 font-semibold my-4 font-serif text-left text-gray-800'>includes Various Event Categories</h1>
                <p className='text-justify pr-10 transition duration-1000 text-lg'>There are many blogs that cover all categories of events. Some popular ones include Eventbrite Blog, Event Manager Blog, and Cvent Blog. These blogs cover a wide range of events, from corporate events and conferences to music festivals and sporting events. </p>
                <div className='flex justify-start lg:w-64 mt-10' >
                <Link data-tip='Tap to explore more events' href='/categories' className='btn w-full tooltip text-xl normal-case bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer border border-blue-500'>See more</Link>
                </div>
            </div>
            </div>
            </div>
            <div className='grid  gap-10 row-gap-5  lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
                {
                    allCategories.length > 0 && allCategories?.slice(0, 4).map(event => <CategoryCards
                        key={event._id}
                        events={event}
                    ></CategoryCards>)
                }
            </div>
            
        </div>
           </div>
         </section>
    );
};

export default Category;