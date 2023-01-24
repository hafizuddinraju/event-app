import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import CategoryCard from './CategoryCard';
import { getCategory } from '../../lib/helperCategory';
import Spinner from '../../components/Spinner/Spinner';


const Category = () => {
   
    const {data: allCategories = [],error, isError, refetch, isLoading} = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await getCategory();
            return res;
        }
    })
    if(isLoading){
        return <Spinner></Spinner>
    }

    return (
        <div className='m-10'>
            <div className='text-center my-20'>
                <h3 className='font-bold text-3xl'>Events for You</h3>
            </div>
            <div className='flex flex-wrap justify-around my-10'>
                {
                   allCategories.length > 0  && allCategories?.slice(0, 3).map(event => <CategoryCard
                    key={event._id}

                    events={event}
                    ></CategoryCard> )
                }
            </div>
            <div className='flex justify-center mb-20 ' >
                <Link data-tip='Tap to explore more events' href='/categories' className='btn tooltip text-xl normal-case bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer border border-blue-500'>See more</Link>
            </div>
        </div>
    );
};

export default Category;