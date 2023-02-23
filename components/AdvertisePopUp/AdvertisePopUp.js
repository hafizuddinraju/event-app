import React, { useEffect, useRef, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
const AdvertisePopUp = () => {
    const {openModal , setOpenModal} = useContext(AuthContext)
    // timing state
    const [days , setDays] = useState()
    const [hours , setHours] = useState();
    const [minutes , setMinutes] = useState();
    const [seconds , setSeconds] = useState()
   
    
    let interval = useRef();
    const startTimer = () =>{
        const countdownDate = new Date('Apr 28 , 2023').getTime();
        interval = setInterval(()=>{
            const now = new Date().getTime();
            const distance =  countdownDate - now ;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 *60 * 24) / (1000 * 60 * 60 )));
            const minutes = Math.floor((distance % (1000 * 60 * 60 ))/ (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60 )) / 1000 );
            if(distance < 0){
                clearInterval(interval.current);
            }
            else{
                setDays(days)
                setHours(hours)
                setMinutes(minutes)
                setSeconds(seconds)
            }
        },1000);
    };

    useEffect(()=>{
        startTimer();
        return ()=>{
            clearInterval(interval.current)
        }
    });
    useEffect(()=>{
        window.addEventListener('load', function(){
           setTimeout(
            function open (event){
              setOpenModal(true)
            },1000
           )
        })
    },[]);
  
    const handleMovePopUp = () =>{
        setOpenModal(!openModal)
    }
    const bg = {
        background :"url('https://i.ibb.co/VgbKJ87/84132-cherry-blossom.gif')",
        backgroundPosition:'right',
        // backgroundRepeat:'no-repeat',
        // backgroundSize:'cover',
        
    }
 
    return (
      <>
         
     
       {
        openModal ?  <div className='h-[100vh] flex justify-center items-center w-full '>
            <div style={bg} className='relative w-full shadow-blue-500 hover:bg-orange-800 border-red-700 shadow-2xl rounded-xl h-[80vh] md:h-[60vh] pb-10 md:w-9/12 mx-2'>
                <div className='w-full h-full -z-10  absolute opacity-75 bg-sky-300'></div>
            <div className='text-right z-[999]'>
            <button  onClick={handleMovePopUp}  title="close" className='text-6xl z-[999] hover:text-red-700 w-8 h-8 text-black rounded-full mr-5 '>
                    &times;
                </button>
            </div>
            <div className=''>
                <p className=" z-50 text-4xl text-center font-bold mb-10">Take This Opportunity</p>
                
            </div>
                <div className='border-gray-500 z-[999]  bg-blue-200 py-3 px-5 rounded-xl border-4 mx-auto grid justify-center  grid-cols-7 w-full  md:w-7/12 '>
                <div >
                    <p className='text-4xl md:text-6xl font-bold'>{days}</p>
                    <p className='text-2xl font-bold'><small>Days</small></p>
                </div>
                    <span className=' text-3xl md:text-5xl'>:</span>
                <div >
                    <p className='text-4xl md:text-6xl font-bold'>{hours}</p>
                    <p className='text-2xl font-bold'><small>Hours</small></p>
                </div>
                    <span className='text-5xl'>:</span>
                <div >
                    <p className='text-4xl md:text-6xl font-bold'>{minutes}</p>
                    <p className='text-2xl font-bold'><small>Minutes</small></p>
                </div>
                    <span className='text-5xl'>:</span>
                <div >
                    <p className='text-4xl md:text-6xl font-bold'>{seconds}</p>
                    <p className='text-2xl font-bold'><small>Second</small></p>
                </div>
                  
               
                </div>
                <h3 className='rotate-12 mt-5 text-center text-4xl font-bold'><span className='text-red-500'>50%</span> <span className='text-blue-600'>Discount</span></h3>
            </div>
        
    </div> 
       : <></>
       }
     
      </>
   
    );
};

export default AdvertisePopUp;