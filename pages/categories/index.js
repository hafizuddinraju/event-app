import { useQuery } from "@tanstack/react-query";
import Spinner from '../../components/Spinner/Spinner'
import CardDemo from "../../components/CategoryCard/CardDemo";
import CategoriesLayout from "../../layout/CategoriesLayout";
import { getSubCategory } from "../../lib/helperSubCategory";

const AllCategoriesComponent = () => {
    const { data: subCate = [], error, isError, refetch, isLoading } = useQuery({
        queryKey: ['subCategory'],
        queryFn: async () => {
            const res = await getSubCategory();
            return res;
        }
    })
    if (isLoading) return <Spinner></Spinner>
    return (
        <CategoriesLayout>
            <div className="bg-[#F0F9FF]">
                <h3 className="py-8 text-center text-5xl font-semibold">Events by Categories</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 ">
                    {
                        subCate?.map(sub => <CardDemo key={sub._id} sub={sub}></CardDemo>)
                    }
                </div>
            </div>
        </CategoriesLayout>
    );
};

export default AllCategoriesComponent;