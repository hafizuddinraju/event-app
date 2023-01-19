import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import React from 'react';
import CategoryCard from './CategoryCard';
import { getCategory } from '../../lib/helperCategory';


const Category = () => {

    const { data: allCategories = [], refetch, isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await getCategory();
            return res;
        }
    })

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div className='m-10'>
            <div className='text-center my-20'>
                <h3 className='font-bold text-3xl'>Events for You</h3>
            </div>
            <div className='flex flex-wrap justify-around my-10'>
                {
                    allCategories?.slice(0, 3).map(event => <CategoryCard
                        key={event.id}
                        events={event}
                    ></CategoryCard>)
                }
            </div>
            <div className='flex justify-center mb-20 tooltip' data-tip='Tap to explore more events'>
                <Link href='/' className='btn text-xl normal-case bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer border border-blue-500'>See more...</Link>
            </div>
        </div>
    );
};

export default Category;