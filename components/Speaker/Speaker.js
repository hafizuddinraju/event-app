import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa';

const Speaker = () => {
    const speakerInfo = [
        {
            image: 'https://i.ibb.co/GMShtdY/download.jpg',
            name: "Md Ansarul Islam",
            designation : "CEO Founder",
            institution: "Junior Programming hero"
        },
        {
            image: 'https://i.ibb.co/N7Ptmd8/images.jpg',
            name: "Md Manna Ahmed",
            designation : "CEO Founder",
            institution: "Junior Programming hero"
        },
        {
            image: 'https://i.ibb.co/C2c3dYs/download.jpg',
            name: "Md Jaman Khan",
            designation : "CEO Founder",
            institution: "Junior Programming hero"
        },
    ]
    return (
        <section className='py-28 bg-[#f1f1f1]'>
            <div className='max-w-screen-xl mx-auto '>
            <h1 className='text-2xl lg:text-5xl mb-12 md:text-4xl font-bold uppercase text-center '><span className='text-blue-500'>Our</span> Honorable Speaker</h1>
            {/* speaker container */}
            <div className='grid justify-center grid-cols-1 mx-5 md:grid-cols-2 lg:grid-cols-3 gap-5'> 
            {
               speakerInfo.length > 0 && speakerInfo?.map((value , idx)=><SpeakerCard key={idx} data={value}></SpeakerCard>) 
            }
           
            </div>
            </div>
        </section>
    );
};

export default Speaker;

function SpeakerCard ({data}){
    const {name , image , designation , institution} = data ;
    return (
       <>
         {/* card */}
         <div className='relative z-20  bg-sky-50 speaker-parent border-2 rounded-md shadow-md '>
            <div className='speaker-hover-icon flex flex-col justify-evenly items-center'>
               <FaFacebook className='cursor-pointer text-white' size={30} />
               <FaTwitter className='cursor-pointer text-white' size={30} />
               <FaLinkedin  className='cursor-pointer text-white' size={30}></FaLinkedin>
               <FaInstagram  className='cursor-pointer text-red-600' size={30}> </FaInstagram>
               <FaTwitch  className='cursor-pointer text-white' size={30}></FaTwitch>
               <FaYoutube  className='cursor-pointer text-red-600' size={30}></FaYoutube>
            </div>
            <div className='second-speaker-child flex justify-center items-center overflow-hidden text-2xl text-white'>
                
            </div>
        <figure>
        <img className='w-full  rounded-t-md h-64 object-fill' src={image} alt="image" />
        </figure>
        <div className='text-info  pt-2 pb-5 px-3'>
            <h2 className="text-2xl text-black font-bold">{name}</h2>
            <p ><strong>{designation}</strong></p>
            <p className='font-semibold'>{institution}</p>
        </div>
    </div>
       </>
    )
}