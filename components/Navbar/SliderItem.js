import React from 'react';
import {  Link as ScrollLink } from 'react-scroll'
import styles from '../../styles/Slideritem.module.css'
const SliderItem = ({data}) => {
    const {image, prev, next,id} = data
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className={styles.carousel_img}>

         <img src={image} className="w-full  rounded-none"  alt=''/>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 md:left-24 top-1/4">
                  <h1 className=' text-2xl md:text-5xl font-bold text-white'>
                  Competently disseminate  <br />
                  dynamic communities   <br />
                  whereas economically sound data.
                  </h1>
              </div>
              <div className="absolute flex my-6 md:my-0 justify-end transform -translate-y-1/2 w-4/5 md:w-2/5 left-5 md:left-24 top-1/2">
                  <p className='text-sm md:text-xl text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
              </div>
              <div className="absolute flex my-7 md:my-0 flex-col md:flex-row justify-start transform -translate-y-1/2 w-2/5 left-5 md:left-24 top-3/4">
                <ScrollLink to='services' spy={true} smooth={true} offset={50}>

                  <button className="md:btn rounded-lg  btn-sm btn-primary md:bg-sky-500 md:hover:bg-sky-600 mr-0 md:mr-5">Get Started</button>
                </ScrollLink>
               
              </div>
  <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
    <a href={`#slide${prev}`} className="btn btn-circle hover:bg-sky-600 hover:border-none">❮</a> 
    <a href={`#slide${next}`} className="btn ml-2  hover:bg-sky-600 hover:border-none btn-circle">❯</a>
  </div>
</div> 
    );
};

export default SliderItem;