import { useQuery } from "@tanstack/react-query";
import Spinner from '../../components/Spinner/Spinner'
import CardDemo from "../../components/CategoryCard/CardDemo";
import CategoriesLayout from "../../layout/CategoriesLayout";
import { getSubCategory } from "../../lib/helperSubCategory";
import { useState } from "react";
import { FiGrid, FiList } from "react-icons/fi";

const AllCategoriesComponent = () => {
    const { data: subCate = [], error, isError, refetch, isLoading } = useQuery({
        queryKey: ['subCategory'],
        queryFn: async () => {
            const res = await getSubCategory();
            return res;
        }
    })
    const [gridView, setGridView] = useState(false);
    if (isLoading) return <Spinner></Spinner>
    return (
        <CategoriesLayout>
            <div>
                <button className={`hidden z-50 fixed right-20 top-[110px] text-xl font-bold mb-10 lg:block  px-2 py-2 rounded-md ${gridView ? "bg-blue-500 text-white" : "border border-blue-500"}`} onClick={() => setGridView(!gridView)}>{gridView ? <FiGrid size={24} /> : <FiList size={24} />}</button>
                <div className="">
                    <h3 className="py-8 text-center text-xl md:text-3xl lg:text-5xl font-semibold">Events by Categories</h3>
                    <div className={`md:mt-20 ${gridView ? "space-y-10" : "grid grid-cols-1 md:grid-cols-2 gap-4 w-4/5 mx-auto"}`}>
                        {
                            subCate?.map(sub => <CardDemo gridView={gridView} key={sub._id} sub={sub}></CardDemo>)
                        }
                    </div>
                </div>
            </div>
        </CategoriesLayout>
    );
};

export default AllCategoriesComponent;