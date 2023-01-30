import { useQuery } from "@tanstack/react-query";
import Spinner from '../../components/Spinner/Spinner'
import CardDemo from "../../components/CategoryCard/CardDemo";
import CategoriesLayout from "../../layout/CategoriesLayout";
import { getSubCategory } from "../../lib/helperSubCategory";
import { useState } from "react";

const AllCategoriesComponent = () => {
    const { data: subCate = [], error, isError, refetch, isLoading } = useQuery({
        queryKey: ['subCategory'],
        queryFn: async () => {
            const res = await getSubCategory();
            return res;
        }
    })
    const [gridView , setGridView] = useState(false);
    if (isLoading) return <Spinner></Spinner>
    return (
        <CategoriesLayout>
          <div>
          <button className={`hidden  z-50 fixed top-[110px] text-xl font-bold mb-10 md:flex md:justify-end border-2 border-indigo-500 px-2 py-2 rounded-md ${gridView ? "bg-blue-500 text-white" : null}`} onClick={()=>setGridView(!gridView)}>{gridView ? "Grid View" :"List View"}</button>
          <div className="bg-[#F0F9FF]">
                <h3 className="py-8 text-center text-5xl font-semibold">Events by Categories</h3>
                <div className={`md:mt-20 ${gridView ? "space-y-10" :"grid grid-cols-1 md:grid-cols-2"}`}>
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