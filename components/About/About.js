import React from 'react';

const About = () => {
    return (
        <div className='mt-28'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <div>
                            <img src='https://i.ibb.co/PC3jpr1/marten-bjork-r-H8-O0-FHFpfw-unsplash.jpg' alt="" className="w-[386px] h-[190px] rounded-lg shadow-2xl" />
                        </div>
                        <div className='flex gap-2'>
                            <div>
                                <img src="https://i.ibb.co/Y7tSXx1/campaign-creators-g-Msn-Xq-ILjp4-unsplash.jpg" alt="" className='w-[190px] mt-2 rounded-lg shadow-2xl' />
                            </div>
                            <div>
                                <img src="https://i.ibb.co/9Tb5GrN/hannah-busing-Zyx1b-K9mqm-A-unsplash.jpg" alt="" className='w-[190px]  mt-2 rounded-lg shadow-2xl' />
                            </div>
                        </div>
                    </div>
                    <div className='ml-6'>
                        <h1 className="text-5xl font-bold">About US</h1>
                        <div className=" w-80 text-justify">
                            <p className="py-6 ">Event App is an event organizing service.
                                Event App provide various types of services with minimal cost.
                                Such as Marriage event organizing, Birthday party organizing, Sports event organizing, Engagement Party organizing, Wedding theme organizing and many more.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;