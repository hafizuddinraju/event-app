import React from 'react';

const GallerySection = () => {
    const Data= [
        {
            id: 1,
            title:"this is sport event management service",
            desc:"it s event management service.that is responsible for managing events on our service",
            cover:"https://i.ibb.co/56q7NHC/aditya-chinchure-Zh-QCZjr9f-Ho-unsplash.jpg",
        },
        {
            id: 2,
            title:"this is sport event management service",
            desc:"it s event management service.that is responsible for managing events on our service",
            cover:"https://i.ibb.co/sPsDG1h/al-elmes-ULHx-Wq8reao-unsplash.jpg",
        },
        {
            id: 3,
            title:"this is sport event management service",
            desc:"it s event management service.that is responsible for managing events on our service",
            cover:"https://i.ibb.co/mCpxhSs/campaign-creators-g-Msn-Xq-ILjp4-unsplash.jpg",
        },
        {
            id: 4,
            title:"this is sport event management service",
            desc:"it s event management service.that is responsible for managing events on our service",
            cover:"https://i.ibb.co/DpVPWtn/chuttersnap-a-En-H4h-J-Mrs-unsplash.jpg",
        },
        {
            id: 5,
            title:"this is sport event management service",
            desc:"it s event management service.that is responsible for managing events on our service",
            cover:"https://i.ibb.co/DwfZnGr/evelina-friman-hw-s-Kmjb0ns-unsplash.jpg",
        },
        {
            id: 6,
            title:"this is sport event management service",
            desc:"it s event management service.that is responsible for managing events on our service",
            cover:"https://i.ibb.co/Swr1Qrh/ibrahim-boran-m8-Yj-B0no-Wi-Y-unsplash.jpg",
        },
        {
            id: 7,
            title:"this is sport event management service",
            desc:"it s event management service.that is responsible for managing events on our service",
            cover:"https://i.ibb.co/bmWH6z1/marc-babin-a-QWm-CH-b3-MU-unsplash.jpg",
        },
        {
            id: 8,
            title:"this is sport event management service",
            desc:"it s event management service.that is responsible for managing events on our service",
            cover:"https://i.ibb.co/ncSXGYC/shardayyy-photography-f-Jzm-Pe-a0e-U-unsplash.jpg",
        },
        {
            id: 9,
            title:"this is sport event management service",
            desc:"it s event management service.that is responsible for managing events on our service",
            cover:"https://i.ibb.co/WFXsLxT/teemu-paananen-bzdhc5b3-Bxs-unsplash.jpg",
        },
        {
            id: 10,
            title:"this is sport event management service",
            desc:"it s event management service.that is responsible for managing events on our service",
            cover:"https://i.ibb.co/X4RdtTb/jason-goodman-Oalh2-Moj-Uuk-unsplash.jpg",
        },
        {
            id: 11,
            title:"this is sport event management service",
            desc:"it s event management service.that is responsible for managing events on our service",
            cover:"https://i.ibb.co/3NkyFTp/hari-nandakumar-zc-Q3-Ax-JLjq-E-unsplash.jpg",
        },
        {
            id: 12,
            title:"this is sport event management service",
            desc:"it s event management service.that is responsible for managing events on our service",
            cover:"https://i.ibb.co/T0BNdjr/stem-list-EVgs-Ab-L51-Rk-unsplash.jpg",
        },
    ]
    return (
         <div className='px-4 py-16 max-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
            <div className=' mb-6 text-center lg:justify-center lg:flex-row md:mb-8'>
                <h2 className='text-3xl font-bold'>OUR GALLERY</h2>
                <h4>Some of our project  discussion,management and meeting image</h4>
            </div>
            <div className='grid gap-6 row-gap-5 mb-8 w-full lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2'> 
                {Data.map(({id,title,desc,cover})=>
                <a key={id} href="/" aria-label="View Item">
                    <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                        <img src={cover} alt="" className='object-cover w-full h-56 md:h-64 xl:h-80'/>
                        <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className='mb-4 text-lg font-bold text-gray-100'>{title}</p>
                            <p className='text-sm tracking-wide text-gray-300'>{desc}</p>
                        </div>
                    </div>
                </a>
                )}
            </div>
        </div>
    );
};

export default GallerySection;