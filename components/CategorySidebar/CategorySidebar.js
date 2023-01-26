import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { getCategory } from '../../lib/helperCategory';
import Spinner from '../Spinner/Spinner';
const CategorySidebar = () => {
    const { data: allCategories = [], error, isError, refetch, isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await getCategory();
            return res;
        }
    })
    if (isLoading) return <Spinner></Spinner>
    return (
        <ul className="menu p-4 w-72 bg-[#F0F9FF] font-semibold uppercase space-y-2">
            {
                allCategories.map(cat => <li key={cat._id}>
                    <Link href={`/subcategory/${cat.code}`}
                        className='hover:bg-[#0EA5E9] hover:text-white duration-500 ease-in'> {cat.cate_name} </Link>
                </li>)
            }
        </ul>
    );
};

export default CategorySidebar;