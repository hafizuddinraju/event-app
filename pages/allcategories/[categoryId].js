import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { MdOutlineReport, MdVerified } from "react-icons/md";
import { useRouter } from 'next/router';
import { createRef, useCallback, useEffect, useState } from 'react';
import Spinner from '../../components/Spinner/Spinner';
import { getSingleCategory } from '../../lib/helperCategory';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import Pdf from "react-to-pdf";

const ref = createRef();
const categoryId = () => {
  const {user} = useContext(AuthContext)
    const router = useRouter()
    const data = router.asPath.slice(15,200)
    if(!data){
      return <Spinner></Spinner>
    }
    console.log(data)
    const [modal, setModal] = useState({});
    const [categoryData, setCategoryData] = useState({})
    useEffect(()=>{
      getSingleCategory(data).then(res => setCategoryData(res))
  
    },[data])
    const {cate_name,img,description, price,quantity} = categoryData
    console.log(categoryData);
    
    return (
        <div ref={ref}>
        <div className="p-5 mx-auto sm:p-10 md:p-16 mt-20 text-gray-100">
          <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
            <PhotoProvider>
              <PhotoView src={img}>
                <img
                  src={img}
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
                  {cate_name}
                </div>
                
                {/* <div className="flex justify-between items-center">
                  <div
                    rel="noopener noreferrer"
                    className="text-xs text-gray-400  font-semibold hover:underline"
                  >
                    Rooms: {room}
                  </div>
                  <div
                    rel="noopener noreferrer"
                    className="text-xs text-gray-400 hover:underline"
                  >
                    Bathroom: {bathroom}
                  </div>
                </div> */}
  
                <div className="flex justify-between items-center">
                  <div
                    rel="noopener noreferrer"
                    className="text-xl  text-green-500 hover:underline"
                  >
                    Price: {price}
                  </div>
                  <Pdf targetRef={ref} filename="Event_info.pdf" x={.5} y={.5} scale={0.8}>
                        {({ toPdf })=>
                        <button onClick={toPdf} className='btn btn-sm md:py-0 my-3 text-black font-semibold bg-sky-400 hover:bg-sky-700'>Download PDF</button>}

                        </Pdf>
                </div>
              </div>
              <div className="text-gray-100 text-justify">{description}</div>
              {/* <div className="flex justify-between items-center">
                <div
                  rel="noopener noreferrer"
                  className="text-xs  text-gray-400 font-semibold hover:underline"
                >
                  phone: {phone}
                </div>
                <MdOutlineReport
                  onClick={() => handleReportSubmit(rm?.data)}
                  title="report product"
                  className="text-2xl text-red-600"
                ></MdOutlineReport>
                
              </div> */}
              <div className="text-center">
                {quantity === 0 ? (
                  <label className="inline-flex disabled:opacity-75 items-center justify-center w-1/2 h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-600 hover:bg-gray-700 focus:shadow-outline focus:outline-none">
                    Stock out
                  </label>
                ) : (
                  <label
                    htmlFor={
                      user? "booking-modal" : ''
                    }
                    className="inline-flex items-center justify-center w-1/2 h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-sky-500 hover:bg-sky-600 focus:shadow-outline focus:outline-none"
                    // onClick={() => setModal(roomData)}
                  >
                    Book Now
                  </label>
                )}
              </div>
            </div>
          </div>
          {/* {modal && (
            <Modal
              modal={modal}
              setModal={setModal}
              
            ></Modal>
          )} */}
        </div>
      </div>
    );
};

export default categoryId;