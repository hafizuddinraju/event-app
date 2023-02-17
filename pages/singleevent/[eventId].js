import { useRouter } from "next/router";
import { createRef, useContext, useEffect, useState } from "react";
import { MdCleaningServices, MdOutlineReport } from "react-icons/md";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { FacebookIcon, FacebookShareButton, LinkedinShareButton, TwitterShareButton, LinkedinIcon, TwitterIcon } from "react-share";
import Pdf from "react-to-pdf";
import Modal from "../../components/Modal/Modal";
import Spinner from "../../components/Spinner/Spinner";
import { AuthContext } from "../../context/AuthProvider";
import ProtectRoute from "../../layout/ProtectRoute";
import { getEvent } from "../../lib/helperSubCategory";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import { getSingleEventReview } from "../../lib/helperReviews";
import SingleEventReviews from "../../components/Reviews/Reviews";


const ref = createRef();
const SingleCategory = () => {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  console.log(router.asPath)
  const [modal, setModal] = useState({});
  const [eventData, setEventData] = useState({});
  const [reviews, setReviews] = useState([]);
  const id = router.query.eventId;
  const shareUrl = `https://event-app-pi.vercel.app/singleevent/${id}`
  // console.log("url",shareUrl)
  useEffect(() => {
    getEvent(id)
      .then((res) => {
        console.log(res);
        setEventData(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [router.query.eventId]);

  useEffect(() => {
    if (id) {
      getSingleEventReview(id)
        .then((res) => {
          console.log(res);
          setReviews(res);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [router.query.eventId]);
  // console.log(reviews);

  if (!eventData) {
    return <Spinner></Spinner>;
  }


  // declaring function for showing map 
  const MapWithNoSSR = dynamic(() => import("../../components/Map/Map"), {
    ssr: false,
  });


  return (
    <ProtectRoute>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 mx-10 md:mx-20 ">
        <div ref={ref} className="col-span-2">
          <div className="p-5 mx-auto sm:p-10 md:p-16 mt-20 text-gray-100">
            <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
              <PhotoProvider>
                <PhotoView src={eventData?.image_url}>
                  <img
                    src={eventData?.image_url}
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
                    {eventData?.name}
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
                      Price: {eventData?.price}
                    </div>
                    <Pdf
                      targetRef={ref}
                      filename="Event_info.pdf"
                      x={0.5}
                      y={0.5}
                      scale={0.8}
                    >
                      {({ toPdf }) => (
                        <button
                          onClick={toPdf}
                          className="btn btn-sm md:py-0 my-3 text-black font-semibold bg-sky-400 hover:bg-sky-700"
                        >
                          Download PDF
                        </button>
                      )}
                    </Pdf>
                  </div>
                </div>
                <div className="text-gray-100 text-justify">
                  {eventData?.description}
                </div>
                <div className="flex justify-between items-center">
                  <div
                    rel="noopener noreferrer"
                    className="text-xs  text-gray-400 font-semibold hover:underline"
                  >
                    <FacebookShareButton url={shareUrl}>

                      <FacebookIcon size={28} round={true} />
                    </FacebookShareButton>
                    <LinkedinShareButton className="ml-1" url={shareUrl}>
                      <LinkedinIcon size={28} round={true}></LinkedinIcon>
                    </LinkedinShareButton>
                    <TwitterShareButton className="ml-1" url={shareUrl}>
                      <TwitterIcon size={28} round={true}></TwitterIcon>
                    </TwitterShareButton>
                    {/* phone: {phone} */}
                  </div>
                  <MdOutlineReport
                    // onClick={() => handleReportSubmit(rm?.data)}
                    title="report product"
                    className="text-2xl text-red-600"
                  ></MdOutlineReport>
                </div>
                <div className="text-center">
                  {eventData?.availability === "paid" ? (
                    <label className="inline-flex disabled:opacity-75 items-center justify-center w-1/2 h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-600 hover:bg-gray-700 focus:shadow-outline focus:outline-none">
                      Stock out
                    </label>
                  ) : (
                    <label
                      htmlFor={user ? "booking-modal" : ""}
                      className="inline-flex items-center justify-center w-1/2 h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-sky-500 hover:bg-sky-600 focus:shadow-outline focus:outline-none"
                      onClick={() => setModal(eventData)}
                    >
                      Book Now
                    </label>
                  )}
                </div>
              </div>
            </div>
            {modal && <Modal modal={modal} setModal={setModal}></Modal>}
          </div>
        </div>
        <div className="my-4 mt-10 md:mt-10 lg:mt-36 mx-auto lg:mx-auto">

          <MapWithNoSSR></MapWithNoSSR>

          <div className="">
            <div className="my-4 justify-center md:justify-center lg:justify-start">
              <p className="font-bold text-lg">Open hour</p>
              <p className="text-sm">Monday - Friday</p>
              <p className="text-sm">8.00am - 5.00pm</p>
              <p className="text-sm">Weekend closed</p>
            </div>
            <div className="my-4 justify-center md:justify-center lg:justify-start">
              <p className="font-bold text-lg"> Phone&Email</p>
              <p className="text-sm">Phone: +084385922</p>
              <p className="text-sm">Email: event@bd.com</p>
            </div>

          </div>

        </div>
      </div>
      <div>
        <div className="text-center">
          <p className="text-2xl md:text-4xl font-extrabold text-cyan-900">User Reviews</p>
        </div>
        <SingleEventReviews reviews={reviews}></SingleEventReviews>
      </div>
    </ProtectRoute>
  );
};

export default SingleCategory;
