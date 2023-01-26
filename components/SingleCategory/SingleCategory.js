import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { MdOutlineReport, MdVerified } from "react-icons/md";
import { useRouter } from 'next/router';
import { createRef, useEffect, useState } from 'react';
import Spinner from '../../components/Spinner/Spinner';

import { useContext } from 'react';
import { getSingleCategory } from '../../lib/helperCategory'
import Pdf from "react-to-pdf";
import Modal from '../../components/Modal/Modal';
import { AuthContext } from '../../context/AuthProvider';




const ref = createRef();
const SingleCategory = () => {

  const { user } = useContext(AuthContext)
  const router = useRouter()
  const [modal, setModal] = useState({});
  const [categoryData, setCategoryData] = useState({})
  const id = router.query.categoryId;

  useEffect(() => {

    getSingleCategory(id).then(res => {
      console.log(res);
      setCategoryData(res)

    })
      .catch(error => {
        console.log(error)
      })


  }, [router.query.categoryId])


  if (!categoryData) {
    return <Spinner></Spinner>

  }

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  '>
        <div ref={ref}>
          <div className="p-5 mx-auto sm:p-10 md:p-16 mt-20 text-gray-100">
            <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
              <PhotoProvider>
                <PhotoView src={categoryData?.img}>
                  <img
                    src={categoryData?.img}
                    alt=""
                    className="w-full rounded-md h-60 sm:h-96 bg-gray-500"
                  />
                </PhotoView>
              </PhotoProvider>
              <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-900">
                <div className="space-y-2">
                  <div
                    rel="noopener noreferrer"
                    className=" text-center text-2xl font-semibold sm:text-3xl"
                  >
                    {categoryData?.cate_name}
                  </div>

                  <div className="flex justify-between items-center">
                    <div
                      rel="noopener noreferrer"
                      className="text-xs text-gray-400  font-semibold hover:underline"
                    >
                      {/* Rooms: {room} */}
                    </div>
                    <div
                      rel="noopener noreferrer"
                      className="text-xs text-gray-400 hover:underline"
                    >
                      {/* Bathroom: {bathroom} */}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div
                      rel="noopener noreferrer"
                      className="text-xl  text-green-500 hover:underline"
                    >
                      {/* Price: {price} */}
                    </div>
                    <Pdf targetRef={ref} filename="Event_info.pdf" x={.5} y={.5} scale={0.8}>
                      {({ toPdf }) =>
                        <button onClick={toPdf} className='btn btn-sm md:py-0 my-3 text-black font-semibold bg-sky-400 hover:bg-sky-700'>Download PDF</button>}

                    </Pdf>
                  </div>
                </div>
                <div className="text-gray-100 text-justify">{categoryData?.description}</div>
                <div className="flex justify-between items-center">
                  <div
                    rel="noopener noreferrer"
                    className="text-xs  text-gray-400 font-semibold hover:underline"
                  >
                    {/* phone: {phone} */}
                  </div>
                  <MdOutlineReport
                    // onClick={() => handleReportSubmit(rm?.data)}
                    title="report product"
                    className="text-2xl text-red-600"
                  ></MdOutlineReport>

                </div>
                <div className="text-center">
                  {categoryData?.quantity === 0 ? (
                    <label className="inline-flex disabled:opacity-75 items-center justify-center w-1/2 h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-600 hover:bg-gray-700 focus:shadow-outline focus:outline-none">
                      Stock out
                    </label>
                  ) : (
                    <label
                      htmlFor={
                        user ? "booking-modal" : ''
                      }
                      className="inline-flex items-center justify-center w-1/2 h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-sky-500 hover:bg-sky-600 focus:shadow-outline focus:outline-none"
                      onClick={() => setModal(categoryData)}
                    >
                      Book Now
                    </label>
                  )}
                </div>
              </div>
            </div>
            {modal && (
              <Modal
                modal={modal}
                setModal={setModal}

              ></Modal>
            )}
          </div>
        </div>
        <div>
          <div className="my-4 mx-auto mt-24 md:mt-36 lg:mt-36">
            <div>
              <img className="mx-auto w-96 rounded-xl" src="https://i.ibb.co/yk0vDG1/Screenshot-2023-01-23-183803.png" alt="" />
            </div>
            <div className="my-4 text-center">
              <p className="font-bold text-lg">Open hour</p>
              <p className="text-sm">Monday - Friday</p>
              <p className="text-sm">8.00am - 5.00pm</p>
              <p className="text-sm">Weekend closed</p>
            </div>
            <div className='text-center'>
              <p className="font-bold text-lg"> Phone&Email</p>
              <p className="text-sm">Phone: +084385922</p>
              <p className="text-sm">Email: event@bd.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};



export default SingleCategory;