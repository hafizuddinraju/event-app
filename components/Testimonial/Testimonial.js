import React from 'react';
import { useQuery } from '@tanstack/react-query';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination , Autoplay, Navigation} from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Spinner from '../Spinner/Spinner';
import { getReviews } from '../../lib/helperReviews';
import { FaStar, FaUser } from 'react-icons/fa';

const Testimonial = () => {

    const { data: allReviews = [], error, isError, refetch, isLoading } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
          const res = await getReviews();
          return res;
        }
      })
    //   console.log(allReviews)
    
    
    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <section className='py-28 '>
               <div className='mx-5'>

               <div className='my-10'>
                    <h2 className=" text-4xl md:text-4xl font-bold text-center">
                    Testimonials
                    </h2>
                    <p className='text-center mt-4 '>HAPPY CLIENTS ABOUT US</p>
                </div>
                <Swiper
                    modules={[Pagination ,Navigation, Autoplay]}
                    breakpoints={{
                        360:{
                            slidesPerView:1,
                            spaceBetween:30
                        },
                        768:{
                            slidesPerView:2,
                            spaceBetween:30
                        },
                        991:{
                            slidesPerView:3,
                            spaceBetween:30
                        },
                    }}
                    autoplay={{
                        delay:1500
                    }}
                    navigation
                    loop={true}
                    pagination={{
                    clickable: true,
                    }}
                    className="mySwiper max-w-screen-xl  mx-auto "
                >

                {
                    allReviews.map((rvw) => <SwiperSlide key={rvw._id} className='bg-white rounded-lg  text-black p-10 w-96'>
                        <div>
                            <div className='font-bold text-lg mb-3 flex text-cyan-900'>
                                <div>
                                    Rating: <span className='mx-3'>
                                        {rvw.rating}</span>
                                </div>
                                <div>
                                    <FaStar className='text-orange-700 mt-1'></FaStar>
                                </div>
                            </div>
                            <p className='mt-10 mb-5 text-md h-48 text-justify'>{rvw.reviewDesc.slice(0, 250) + "..."}</p>
                            <div className='flex justify-end gap-5 h-14'>
                                <img className='w-20 rounded-full ' src={rvw?.user_img || <FaUser></FaUser>} alt="" />
                                <div className='ml-2'>
                                    <h3 className='text-xl font-medium'>
                                        {rvw.user_name}
                                    </h3>
                                    <p className='text-xs text-slate-500'>
                                        {rvw.date}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
       
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonial;