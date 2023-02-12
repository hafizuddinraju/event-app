import React from 'react';
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
import Link from 'next/link';
const Testimonial = () => {
    const SwipperItem = [
      
           <>
           <p className='text-center mb-5 text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, adipisci?</p>
           <div className='flex items-center gap-5 justify-center'>
               <img className='w-20 rounded-full ' src="https://i.ibb.co/xfwGj7h/Martin-Masse150x150png.png" alt="" />
               <h3 className=' text-xl'>Md Ansarul</h3>
           </div>
           </>,
           <>
           <p className='text-center mb-5 text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, adipisci?</p>
           <div className='flex items-center gap-5 justify-center'>
               <img className='w-20 rounded-full ' src="https://i.ibb.co/xfwGj7h/Martin-Masse150x150png.png" alt="" />
               <h3 className=' text-xl'>Md Ansarul</h3>
           </div>
           </>,
           <>
           <p className='text-center mb-5 text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, adipisci?</p>
           <div className='flex items-center gap-5 justify-center'>
               <img className='w-20 rounded-full ' src="https://i.ibb.co/xfwGj7h/Martin-Masse150x150png.png" alt="" />
               <h3 className=' text-xl'>Md Ansarul</h3>
           </div>
           </>,
           <>
           <p className='text-center mb-5 text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, adipisci?</p>
           <div className='flex items-center gap-5 justify-center'>
               <img className='w-20 rounded-full ' src="https://i.ibb.co/xfwGj7h/Martin-Masse150x150png.png" alt="" />
               <h3 className=' text-xl'>Md Ansarul</h3>
           </div>
           </>

     
    ]


    return (
        <section className='my-20  py-20 bg-[#f1f1f1] '>
                <div className='mx-5'>
                <div className='my-10'>
                        <h2 className=" text-4xl md:text-5xl  font-bold text-center">
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
                    
                        {SwipperItem.map((item,idx)=><SwiperSlide key={idx} className='bg-white rounded-lg  text-black p-10 w-96'>
                            {item} 
                        </SwiperSlide>)}
                    
                    </Swiper>
                </div>
                <div className='flex justify-center mb-20 mt-10' >
                    <Link data-tip='click to see all reviews' href='/reviews' className='btn tooltip text-xl normal-case bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer border border-blue-500'>All Reviews</Link>
                </div>
        </section>
    );
};

export default Testimonial;