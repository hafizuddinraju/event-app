import React, { useContext, useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { IoSettingsSharp } from "react-icons/io5";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthProvider";
import LayoutDashboard from "../../layout/LayoutDashboard";
import { deleteBooking, getSingleBooking } from "../../lib/helperBooking";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/router";
loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const myOrders = () => {
  const { user } = useContext(AuthContext);
  const [orderData, setOderData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getSingleBooking(user?.email)
      .then((res) => {
        console.log(res);
        setOderData(res);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user?.email, loading]);

  const handleDelete = async (id) => {
    console.log(id);
    const res = await deleteBooking(id);
    if (res) {
      setLoading(!loading);
      toast.success("Delete Successful", { autoClose: 500 });
    }
  };

    const router= useRouter()
  //   const {success, canceled} = router.query;
  // useEffect(() => {
  //   // Check to see if this is a redirect back from Checkout
  //   // const query = new URLSearchParams(window.location.search);

  //   if(success !== undefined || canceled !== undefined) {
  //   if (success) {
  //     console.log('Order placed! You will receive an email confirmation.');
  //   }

  //   if (canceled) {
  //     console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
  //   }
  // }
  // }, [success, canceled]);

  // const redirectToCheckout = async () => {
  //   const {
  //     data: { id },
  //   } = await axios.post("/api/checkout_sessions", {
  //     items: Object.entries(events).map(([_, { id,quantity }]) => ({
  //       price:id,
  //       quantity
  //     })),
  //   });
  //   const stripe = await getStripe();
  //   await stripe.redirectToCheckout({ sessionId: id });
  // };

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
                      Action
                    </th>
                  </tr>
                  <hr />
                </thead>

                <tbody>
                  {orderData?.map((book) => {
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
                          <button
                            className="btn btn-sm bg-[#1E2772] hover:bg-sky-500 border-none"
                            type="submit"
                            role="link"
                          >
                            payment
                          </button>
                        </td>

                        <td className="px-6 py-4">
                          <AiFillDelete
                            onClick={() => handleDelete(book._id)}
                            className="text-3xl text-center text-[#ea0606]"
                          ></AiFillDelete>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </LayoutDashboard>
  );
};

export default myOrders;
