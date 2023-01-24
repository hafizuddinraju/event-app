import React from 'react';
import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const HappyClients = () => {
    const [counterOn , setCounterOn] = useState(false)
    return (
       
          <ScrollTrigger onEnter={()=>setCounterOn(true)} 
          onExit={()=>setCounterOn(false)}
          >
         <div className="flex text-white relative justify-around items-center bg-[url('https://i.ibb.co/9WNmSLG/beautiful-pink-decorated-wedding-serving-with-centerpiece-lightening-candles-8353-10052.webp')]  py-24 md:py-32" style={{
            backgroundRepeat:'no-repeat', backgroundSize:'cover', 
         }}
         >
            <div className='w-full absolute top-0 left-0 opacity-50 bg-gray-700 h-full '></div>
         <div className='flex z-10  flex-col items-center'>
            {counterOn && <CountUp className='text-5xl md:text-6xl font-bold' start={0} end={17} duration={2} delay={0}/>}
            <p className='text-xl md:text-2xl'>Projects</p>
         
         </div>
         <div className='flex z-10 flex-col items-center'>
            {counterOn && <CountUp className='text-5xl md:text-6xl font-bold' start={0} end={97} duration={2} delay={0}/>}
            <p className='text-xl md:text-2xl'>Clients</p>
         
         </div>
         <div className='flex z-10 flex-col items-center'>
            {counterOn && <CountUp className='text-5xl md:text-6xl font-bold' start={0} end={40} duration={2} delay={0}/>}
            <p className='text-xl md:text-2xl'>Members</p>
         
         </div>
         <div className='flex z-10 flex-col items-center'>
            {counterOn && <CountUp className='text-5xl md:text-6xl font-bold' start={0} end={10} duration={2} delay={0}/>}
            <p className='text-xl md:text-2xl'>Awards</p>
         
         </div>
         </div>
          </ScrollTrigger>
            
      
    );
};

export default HappyClients;