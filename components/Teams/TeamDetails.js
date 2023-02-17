import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FcManager } from "react-icons/fc";
import { MdDescription, MdFacebook } from "react-icons/md";

const TeamDetails = ({member}) => {
    const {name,title,desc,img} = member;
    const [readMore, setReadMore] = useState(100);

    const handleReadMore = () =>{
      setReadMore(1000);
  }
  
  const handleShowLess = () =>{
      setReadMore(100)
  }
    return (
      <div className="card border hover:shadow-xl hover:-translate-y-1 rounded-lg mt-5  bg-base-100">
      <figure><img src={img} className='w-full h-96 duration-500 rounded-xl hover:scale-105' alt="Movie"/></figure>
      <div className="card-body">
         <p className='font-semibold text-2xl'>{title}</p>
         <div className='flex'>
          <FcManager size={35} className="justify-center"/>
          <div className='mt-2'>
              <p className='font-semibold'>{name}</p>
          </div>
        </div>
        <p className={' transition-all duration-1000 text-justify '}>
                            {desc?.length > readMore ? (
                      <small className='transition text-[16px] duration-1000'>
                        {" "}
                        {desc.slice(0, 100) + "..."}{" "}
                        <button
                          onClick={handleReadMore}
                          className="text-sky-700 "
                        >
                          read more
                        </button>
                      </small>
                    ) : <>{desc} <button className='text-red-500 underline font-bold' onClick={handleShowLess}>show less</button></>}
                            </p>
        <div>
       
        <div className='flex gap-4 my-2 justify-center'>
        <Link href=''><MdFacebook size={30} className='text-sky-500'/></Link>
        <Link href=''><BsLinkedin size={25} className='text-sky-500'/></Link>
        <Link href=''><BsGithub size={25} className='text-sky-500'/></Link>
        </div>
        </div>
      </div>
    </div>
    );
};

export default TeamDetails;