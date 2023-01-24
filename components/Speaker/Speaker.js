import React from 'react';

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
        <section className='py-10'>
            <div className='max-w-screen-xl mx-auto '>
            <h1 className='text-4xl md:text-5xl text-center my-10'><span className='text-blue-500'>Our</span> Honorable Speaker</h1>
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
         <div className='border-2  rounded-md shadow-md  hover:top-2'>
        <figure>
        <img className='w-full h-64 object-fill' src={image} alt="image" />
        </figure>
        <div className='text-info pt-2 pb-5 px-3'>
            <h2 className="text-2xl text-black font-bold">{name}</h2>
            <p ><strong>{designation}</strong></p>
            <p className='font-semibold'>{institution}</p>
        </div>
    </div>
       </>
    )
}