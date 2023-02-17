import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import Spinner from "../../components/Spinner/Spinner";
import LayoutDashboard from "../../layout/LayoutDashboard";
import { getAllPayments, updatePaymentRoadMap } from "../../lib/paymentIssueHelper";

const paymentEvent = () => {

    const {
        data: allPayment = [],
        refetch,
        isLoading,
      } = useQuery({
        queryKey: ["allPayment"],
        queryFn: async () => {
          const res = await getAllPayments();
          return res;
        },
      });

      

      const handleUpdate = async(p)=>{
        const update = p.eventUpdate + 10;
        const formData = {
            eventUpdate: update
        }
         const res = await updatePaymentRoadMap(p?._id, formData)
         if(res){
             refetch()
             console.log(res)
         }

      }
      if(isLoading){
        return <Spinner></Spinner>
      }

    

  return (
    <LayoutDashboard>
      <h1 className="text-2xl font-bold text-sky-500 text-center">
        All Payment Event Data
      </h1>
      <div className="grid grid-cols-1 mt-4 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
        {
            allPayment?.map(p =>{
                return(
                    <div key={p._id} className="max-w-xs text-center rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
          <div className="radial-progress  text-sky-500" style={{ "--value": `${p?.eventUpdate}`, "--size": "12rem", "--thickness": "2rem" }}>{p?.eventUpdate}</div>
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-base font-semibold tracking-wide">
                Email: {p?.userEmail}
              </h2>
              <p className="text-gray-300 font-semibold">
                EventId: {p?.eventId}
              </p>
              <p className="dark:text-gray-800 font-semibold">
                Price: {p?.price}
              </p>
            </div>
            <div
              onClick={()=>handleUpdate(p)}
              className="flex items-center cursor-pointer justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-sky-400 text-gray-100"
            >
              Update
            </div>
          </div>
        </div>

                )
            })
        }
        
       
      </div>
    </LayoutDashboard>
  );
};

export default paymentEvent;
