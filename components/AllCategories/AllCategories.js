import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../../lib/helperCategory";
import CategoryCard from "../Categories/CategoryCard";

export const AllCategories = () =>{
    const {data: allCategories = [],error, isError, refetch, isLoading} = useQuery({
        queryKey: ['categories'],
        queryFn: async () =>{
            const res = await getCategory();
            return res;
        }
    })
    // console.log(allCategories)
    if(isLoading) return <div>loading...</div>
    return (
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                allCategories?.map(event=><CategoryCard
                    key={event._id}
                    events={event}
                ></CategoryCard>)
            }
        </div>
    )
}