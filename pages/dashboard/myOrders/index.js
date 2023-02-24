import React, { useContext, useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { IoSettingsSharp } from "react-icons/io5";
import { toast } from "react-toastify";
import { AuthContext } from "../../../context/AuthProvider";
import LayoutDashboard from "../../../layout/LayoutDashboard";
import { deleteBooking, getSingleBooking } from "../../../lib/helperBooking";
import {useRouter } from 'next/router'
import ReviewModal from "../../../components/ReviewModal/ReviewModal";
import Spinner from "../../../components/Spinner/Spinner";
import Link from "next/link";
import ConfirmationModal from "../../../components/ConfirmationModal/ConfirmationModal";

const myOrders = () => {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  const [orderData, setOderData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [modalData , setModalData] = useState(null);
  
  useEffect(() => {
    getSingleBooking(user?.email)
      .then((res) => {
        console.log(res);
        setOderData(res);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [user?.email,loading])

   const handleReview = (productId) => {
    setSelectedProductId(productId);
    setModalData(true);
  };

  const handleDelete = async (id) => {
    console.log(id);
    const res = await deleteBooking(id);
    if (res) {
      setLoading(!loading);
      toast.success("Delete Successful", { autoClose: 500 });
    }
  };

  console.log(orderData);
  if(loading)return <Spinner></Spinner>

// this is myorders dashboard layout
  return (
    <LayoutDashboard>
      <div className="flex justify-between items-center">
        <h2 className=" text-[#102048] text-3xl font-bold py-2 px-3 ">
          MyOrders
        </h2>
        <div className="flex items-center gap-6">
          <p className="bg-[#1E2772] text-white py-2 px-3 rounded-lg shadow-md">
            Download Report
          </p>
          <IoSettingsSharp className="text-2xl text-[#1E2772]"></IoSettingsSharp>
        </div>
      </div>

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
                      Photo
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Phone
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Payment
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Review
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                  <hr />
                </thead>

                <tbody>
                  {orderData?.map((book) => {
                    const isPaid = book?.availability === "paid";
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
                        <td className="px-7 py-2 flex flex-row items-center">
                          <img
                            src={book?.picture || "#"}
                            alt=""
                            className="h-8 w-8 rounded-full object-cover"
                          />
                        </td>
                        <td className="px-6 py-4">{book?.email}</td>
                        <td className="px-6 py-4">{book?.phone}</td>
                        <td className="px-6 py-4">{book?.price}</td>
                        <td className="px-6 py-4">
                      {
                        book?.availability !== "paid" && <Link href={`/dashboard/payment/${book?._id}`} >
     
                         <button className="btn btn-sm bg-[#1E2772] hover:bg-sky-500 border-none" >
                           payment
                         </button>
                     </Link> 
                      }
                   
                    {/* show this button when payment successful */}
                       {
                        book?.availability === "paid" && <button className="btn btn-sm bg-[#063df0e8] hover:bg-sky-500 border-none" >
                        Paid
                      </button>
                       }
      </td>

                        <td>
                          <label 
                          htmlFor={user ? "review-modal" : router.push("/login")} 
                          className="btn btn-sm bg-[#1E2772] hover:bg-sky-500 border-none normal-case"
                          onClick={() => isPaid && handleReview(book.product_id)}
                          >
                            {isPaid ? "Add Review" : "Unavailable"}
                          </label>
                        </td>
                        <td className="px-6 py-4">
                        <label onClick={()=>setModalData(book)} htmlFor="confirmation-modal">
                          <AiFillDelete  className="text-3xl text-center text-[#ea0606] cursor-pointer"></AiFillDelete>
                          </label>
                        </td>
              
                      </tr>
                    );
                  })}
                  {modalData && (
                  <ReviewModal 
                    productId={selectedProductId}>
                  </ReviewModal>) }
                </tbody>
              </table>
            {  <ConfirmationModal
              message={"Are You Sure to Cancel the Booking"}
              handler={handleDelete}
              data={modalData}
              setData={setModalData}
              ></ConfirmationModal>}
            </div>
          </div>
        </div>
      </div>
    </LayoutDashboard>
  );
};

export default myOrders;
