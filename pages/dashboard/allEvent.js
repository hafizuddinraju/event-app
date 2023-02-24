import React, { createRef } from 'react';
import Pdf from "react-to-pdf";
import LayoutDashboard from '../../layout/LayoutDashboard';
import { IoSettingsSharp } from 'react-icons/io5';
import { AiFillDelete } from 'react-icons/ai';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../components/Spinner/Spinner';
import { getSubCategory, updateSubAvailability } from '../../lib/helperSubCategory';
import { useState } from 'react';
import ConfirmationModal from '../../components/ConfirmationModal/ConfirmationModal';
import AcceptEventConfirmationModal from '../../components/AcceptEventConfirmationModal/AcceptEventConfirmationModal';
import { toast } from 'react-toastify';

const allEvent = () => {
    const [modalData, setModalData] = useState(null);
    const ref = createRef();
    const {
        data: allEvent = [],
        refetch,
        isLoading,
      } = useQuery({
        queryKey: ["allEvent"],
        queryFn: async () => {
          const res = await getSubCategory();
          return res;
        },
      });
      const deleteEventData = (id)=>{
        deleteUser(id).then(res =>{
            toast.success('User Delete Successful', {autoClose:500})
            refetch();
        })
        .catch(error =>{
            toast.error(error, {autoClose:1000})
        })

      }

      const UpdateToEvent = async(event)=>{
        
        const formData = {
            availability: '1'}
       const res = await updateSubAvailability(event?._id,formData)
       if(res){
        refetch();
            toast.success('Update Event', {autoClose:500})
       }
        

      }

      if(isLoading){
        return <Spinner></Spinner>
      }
    return (
        <LayoutDashboard>
            <title>All Event</title>
            <div className='flex justify-between items-center'>
            <h2 className=' text-[#102048] text-3xl font-bold py-2 px-3 '>All Event</h2>
            <div className='flex items-center gap-6'>
            <Pdf
                      targetRef={ref}
                      filename="user_info.pdf"
                      x={0.5}
                      y={0.5}
                      scale={0.78}
                    >
                      {({ toPdf }) => (
                       
                        <p onClick={toPdf} className='bg-[#1E2772] text-white py-2 cursor-pointer px-3 rounded-lg shadow-md'>Download Report</p>
                      )}
                    </Pdf>
                
                <IoSettingsSharp className='text-2xl text-[#1E2772]'></IoSettingsSharp>
            </div>
        </div>
    
            <div className="report-container">
            

            <div className="report-body">
            <div className="report-topic-heading">   
<div ref={ref} className="relative overflow-x-auto p-6 shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="p-4">
                    <div className="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" className="px-6 py-3">
                    Event Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Code
                </th>
                <th scope="col" className="px-6 py-3">
                    Active
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
            <hr />
        </thead>
        
        <tbody>
            {
                allEvent?.map(event =>{
                    return(
                        <tr key={event._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="w-4 p-4">
                            <div className="flex items-center">
                                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                            </div>
                        </td>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {event?.name}
                        </th>
                        <td className="px-6 py-4">
                            {event?.code}
                        </td>
                        <td  className="px-6 py-4">
                            
                            {
                                event?.availability == 'paid' ?
                                <label onClick={()=>UpdateToEvent(event)}htmlFor="accept-event-confirmation-modal">
                                <div className='custom-css-title bg-gray-500 cursor-pointer  text-white w-1/2 text-center rounded-lg'>Stock Out</div>
                                </label>
                                :
                                <div className='bg-sky-500 disabled  text-white w-1/2 text-center rounded-lg'>In Stock</div>

                            }
                          
                        
                        </td>
                      
                        <td className="px-6 py-4 custom-css-delete-event">
                        <label onClick={()=>setModalData(event)} htmlFor="confirmation-modal" className=""><AiFillDelete className="text-3xl text-center cursor-pointer text-[#a41010]"></AiFillDelete></label>
                        </td>
                    </tr>

                    )
                })
            }
           
            
           {/* {
           modalData ?
             <ConfirmationModal
             data={modalData}
             setData={setModalData}
             handler={deleteEventData}
             message={"Are You Sure wanna Delete this User"}
             ></ConfirmationModal> : ""
           } */}
            {/* {
                modalData ? <AcceptEventConfirmationModal
                data={modalData}
                setData={setModalData}
                handler={UpdateToEvent}
                message={"Are You Sure wanna Admin this User"}
                ></AcceptEventConfirmationModal> : ""
            } */}
            
            
            
        </tbody>
    </table>
    
</div>
</div>

            </div>
          </div>
        </LayoutDashboard>
    );
};

export default allEvent;