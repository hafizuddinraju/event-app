import { useRouter } from 'next/router';
import React from 'react';
import {  Link as ScrollLink } from 'react-scroll'
import styles from '../../styles/Slideritem.module.css'

const SliderItem = ({data}) => {
  const router = useRouter();
  const handlePushCategory = () =>{
    router.push('/categories')
  }
    const {image, prev, next,id} = data
    return (
        <div id={`slide${id}`} className="carousel-item relative h-[100vh] w-full">
        <div className={styles.carousel_img}>

         <img src={image} className="w-full h-full rounded-none"  alt=''/>
        </div>
        <div className='absolute w-9/12 top-[50%] transform -translate-y-1/2 -translate-x-1/2 left-[50%] md:left-[50%]   text-white'>
              <div className='lg:w-9/12 w-full'>
              <h1 className='leading-8 text-base md:text-3xl lg:text-6xl font-bold text-white capitalize'>
                  <span>Competently disseminate</span>
                  <span className='text-sky-500 mx-3'>Dynamic communities.</span>
                 <span> whereas economically sounds data.</span>
                  </h1>
                  <p className='text-sm my-5 md:text-base lg:text-xl text-white '>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div >
                <ScrollLink to='services' spy={true} smooth={true} offset={50}>

<button onClick={handlePushCategory} className={`md:btn rounded-lg lg:w-1/3 text-2xl  btn-sm btn-primary bg-sky-500 hover:bg-sky-600 md:bg-sky-500 md:hover:bg-sky-600 mr-0 md:mr-5`}>Get Started</button>
</ScrollLink>
                </div>
              </div>
        </div>
       
  <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
    <a href={`#slide${prev}`} className="btn btn-circle hover:bg-sky-600 hover:border-none">❮</a> 
    <a href={`#slide${next}`} className="btn ml-2  hover:bg-sky-600 hover:border-none btn-circle">❯</a>
  </div>
</div> 
    );
};

export default SliderItem;