import React, { useContext, useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { toast } from 'react-toastify';
import AcceptEventConfirmationModal from '../../components/AcceptEventConfirmationModal/AcceptEventConfirmationModal';
import ConfirmationModal from '../../components/ConfirmationModal/ConfirmationModal';
import Spinner from '../../components/Spinner/Spinner';
import LayoutDashboard from '../../layout/LayoutDashboard';
import {  getCustomEvent, updateCustomEventData } from '../../lib/customEventAddHalper';


const adminRequestEvents = () => {
  
    const [data , setData] = useState([]);
    const [refresh , setRefresh] = useState(false);
    // modal state
    const [modalData , setModalData] = useState(null);
    useEffect(()=>{
        getCustomEvent()
        .then(res =>setData(res.filter(book=> book.status !== "rejected")))
    },[refresh]) ;
    // setData(res.filter(book => book.status === "rejected"))
    // handle delete user requested data
    const handleRejectEvent = async(id) =>{
      const adminData = {
        status : "rejected"
      }
      const res = await updateCustomEventData(id, adminData);
      if(res){
        toast.success("User Requested event Reject Successfully",{autoClose:1000});
        setRefresh(!refresh);
      }
    }
    // user requested event accepted function
    const handleAcceptEvent = async (id) =>{
      const adminData = {
        status : "accepted"
      };
      const res = await updateCustomEventData(id , adminData) ;
      if(res){
        toast.success("User Requested event Accepted Successfully",{autoClose:1000});
        setRefresh(!refresh);
      }
    }

    if(!data)return <Spinner></Spinner>

    return (
        <LayoutDashboard>
           <div className="report-container">
        <div className="report-body">
          <div className="report-topic-heading">
            <div className="relative overflow-x-auto p-6 shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-all-search"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="checkbox-all-search"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3">
                     Event Name
                    </th>
                 
                    <th scope="col" className="px-6 py-3">
                      Phone
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Event Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Guest
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Location
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                  <hr />
                </thead>

                <tbody>
                  {data?.map((book) => {
                    return (
                      <tr
                        key={book._id}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <td className="w-4 p-4">
                          <div className="flex items-center">
                            <input
                              id="checkbox-table-search-1"
                              type="checkbox"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              htmlFor="checkbox-table-search-1"
                              className="sr-only"
                            >
                              checkbox
                            </label>
                          </div>
                        </td>
                      
                        <td className="px-6 py-4">{book?.eventName}</td>
                       
                        <td className="px-6 py-4">{book?.phone}</td>
                        <td className="px-6 py-4">{book?.eventDate}</td>
                        <td className="px-6 py-4">{book?.guest}</td>
                        <td className="px-6 py-4">{book?.eventLocation}</td>
                        <td className="px-6 py-4">{book?.status == "0" ? <button onClick={()=>setModalData(book)} >
                        <label  className='hover-effect-custom-css px-3 py-2 bg-indigo-700 rounded-xl text-white cursor-pointer' htmlFor="accept-event-confirmation-modal" >Pending</label>
                          </button> : <button className='px-3 py-2 bg-green-700 rounded-xl text-white disabled' disabled ={book?.status == "accepted"} >Accepted</button>}</td>
                        <td className="px-6 py-4">
                     
                        <button onClick={()=>setModalData(book)}>   <label  disabled={book?.status !== "0"}  htmlFor="confirmation-modal" className='btn btn-warning px-3 py-2'>Reject</label></button>
                        </td>
                      
                      </tr>
                    );
                  })}
                </tbody>
              </table>
             {modalData ? <ConfirmationModal message={"Why You Reject this event , Send to user message"} data={modalData} handler={handleRejectEvent} setData={setModalData}></ConfirmationModal> :""}
                  
                  {/* accept confirmation modal */}
                  {
                    modalData ?
                    <AcceptEventConfirmationModal
                    message={"Are You Sure To Accept this event Request"} data={modalData} handler={handleAcceptEvent} setData={setModalData}
                    ></AcceptEventConfirmationModal> : ""
                  }
            </div>
          </div>
        </div>
      </div>
        </LayoutDashboard>
    );
};

export default adminRequestEvents;