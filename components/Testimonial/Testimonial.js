import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
const Testimonial = () => {
  
    return (
        <section className='my-20 py-20 bg-[#f1f1f1] '>
                <div className='my-10'>
                    <h2 className="text-5xl font-mono font-bold text-center">
                    Testimonials
                    </h2>
                    <p className='text-center mt-4 font-mono'>HAPPY CLIENTS ABOUT US</p>
                </div>
                <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
            delay:2500,
            disableOnInteraction:false
        }}
        onAutoplay={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper max-w-screen-xl  mx-auto "
      >
        <SwiperSlide className='bg-white rounded-lg  text-black p-10 w-96'>
            <p className='text-center mb-5 font-mono text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, adipisci?</p>
            <div className='flex items-center gap-5 justify-center'>
                <img className='w-20 rounded-full ' src="https://i.ibb.co/xfwGj7h/Martin-Masse150x150png.png" alt="" />
                <h3 className='font-mono text-xl'>Md Ansarul</h3>
            </div>
        </SwiperSlide>
        <SwiperSlide className='bg-white rounded-lg  text-black p-10 w-96'>
            <p className='text-center mb-5 font-mono text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, adipisci?</p>
            <div className='flex items-center gap-5 justify-center'>
                <img className='w-20 rounded-full ' src="https://i.ibb.co/xfwGj7h/Martin-Masse150x150png.png" alt="" />
                <h3 className='font-mono text-xl'>Md Ansarul</h3>
            </div>
        </SwiperSlide>
        <SwiperSlide className='bg-white rounded-lg  text-black p-10 w-96'>
            <p className='text-center mb-5 font-mono text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, adipisci?</p>
            <div className='flex items-center gap-5 justify-center'>
                <img className='w-20 rounded-full ' src="https://i.ibb.co/xfwGj7h/Martin-Masse150x150png.png" alt="" />
                <h3 className='font-mono text-xl'>Md Ansarul</h3>
            </div>
        </SwiperSlide>
        <SwiperSlide className='bg-white rounded-lg  text-black p-10 w-96'>
            <p className='text-center mb-5 font-mono text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, adipisci?</p>
            <div className='flex items-center gap-5 justify-center'>
                <img className='w-20 rounded-full ' src="https://i.ibb.co/xfwGj7h/Martin-Masse150x150png.png" alt="" />
                <h3 className='font-mono text-xl'>Md Ansarul</h3>
            </div>
        </SwiperSlide>
       
        
        
        
      </Swiper>
        </section>
    );
};

export default Testimonial;