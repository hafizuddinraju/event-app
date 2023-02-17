import { FaInternetExplorer } from "react-icons/fa";
import { MdOfflinePin } from "react-icons/md";
import { HiOutlineStatusOffline } from "react-icons/hi";

const About = () => {
    return (
        <div className="hero my-24">
        <div className="hero-content flex-col lg:flex-row">
          <div className="relative w-1/2">
            <img src='https://i.ibb.co/bmWH6z1/marc-babin-a-QWm-CH-b3-MU-unsplash.jpg' alt="" className="w-3/4  rounded-t-full shadow-2xl" />
            <img
              src='https://i.ibb.co/WFXsLxT/teemu-paananen-bzdhc5b3-Bxs-unsplash.jpg'
              alt=""
              className="absolute w-2/3 mt-20 right-5 top-1/2 border-8 duration-500 hover:scale-105 rounded-lg shadow-2xl"
            />
           </div>
          <div className="w-1/2 mb-16 text-start">
            <p className="text-[13px] md:text-[20px] lg:text-3xl font-bold text-sky-600">About Us</p>
            <h1 className="text-3xl lg:text-5xl font-bold my-5">
            Our Event management 
            </h1>
            <p className="py-6">
              There are many variations of passages of Lorem Ipsum available, but
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.{" "}
            </p>
            <hr className="w-full border-sky-600 border-2"/>
            <br/>
            <div className="grid lg:grid-cols-2 sm:grid-cols-1">
              <div className="flex justify-center items-center">
                <HiOutlineStatusOffline className="text-sky-500" size={50}/>
                  <div className="block ml-3">
                  <h3 className="text-xl md:text-2xl lg:text-2xl flex font-bold">Offline Booking</h3>
                  <p className="text-lg flex">With our very popular event management</p>
                  </div>
              </div>
              <div className="flex justify-center items-center">
                <FaInternetExplorer className="text-sky-500" size={50}/>
                  <div className="block ml-3">
                  <h2 className="text-xl md:text-2xl lg:text-2xl font-bold">online Booking</h2>
                  <p className="text-lg flex">Our service is very unique and trustful</p>
                  </div>
              </div>
            </div>
        {/* <div className='my-8'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <div>
                            <img src='https://i.ibb.co/PC3jpr1/marten-bjork-r-H8-O0-FHFpfw-unsplash.jpg' alt="" className="w-[400px] h-[190px] rounded-lg shadow-2xl" />
                        </div>
                        <div className='flex gap-2'>
                            <div>
                                <img src="https://i.ibb.co/Y7tSXx1/campaign-creators-g-Msn-Xq-ILjp4-unsplash.jpg" alt="" className='w-[196px] mt-2 rounded-lg shadow-2xl' />
                            </div>
                            <div>
                                <img src="https://i.ibb.co/9Tb5GrN/hannah-busing-Zyx1b-K9mqm-A-unsplash.jpg" alt="" className='w-[196px]  mt-2 rounded-lg shadow-2xl' />
                            </div>
                        </div>
                    </div>
                    <div className='ml-6'>
                        <h1 className="text-5xl font-bold">About US</h1>
                        <div className=" w-80 text-justify">
                            <p className="py-6 ">Event Mart is an event organizing service.
                                Event App provide various types of services with minimal cost.
                                Such as Marriage event organizing, Birthday party organizing, Sports event organizing, Engagement Party organizing, Wedding theme organizing and many more.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
          </div> */}
          <hr className="mt-10 border-sky-600 border-2"/>
          <div className="mt-10 ">
                <p className="font-semibold justify-center items-center flex mb-2"><MdOfflinePin size={25} className="text-sky-600 mr-2"/> We are some technologies used.there are Next Js, React-Router dom, socket Io,Node js,Mongoose</p>
                <p className="font-semibold justify-center items-center flex"><MdOfflinePin size={25} className="text-sky-600 mr-2"/>We are some technologies used.there are Next Js, React-Router dom, socket Io,Node js,Mongoose</p>
          </div><br/>
          <button className="btn border-none my-3 text-white hover:bg-sky-500 bg-blue-600">Get More Info</button>
        </div>
      </div>
      </div>
    );
};

export default About;

