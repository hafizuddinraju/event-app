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
        <div className='max-w-[1400px] mx-auto'>
            <div className='text-center my-20'>
                <h3 className='font-bold text-3xl'>Events for You</h3>
            </div>
            <div className='grid grid-cols-1 gap-8 w-full md:grid-cols-2 lg:grid-cols-4 place-items-center justify-center '>
                {
                   allCategories.length > 0  && allCategories?.slice(0, 4).map(event => <CategoryCard
                    key={event._id}

                    events={event}
                    ></CategoryCard> )
                }
            </div>
            <div className='flex justify-center mb-20 mt-10' >
                <Link data-tip='Tap to explore more events' href='/categories' className='btn tooltip text-xl normal-case bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer border border-blue-500'>See more</Link>
            </div>
        </div>
    );
};

export default Category;