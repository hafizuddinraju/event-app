import Image from 'next/image';
import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const GalleryCard = ({_id,cover,desc,title}) => {
    return (
       
             <div
              key={_id}
              className="relative cursor-pointer gallery-items  overflow-hidden transition-all rounded  duration-1000 transform shadow-lg hover: translate-y-2 hover:shadow-2xl"
            >
              <img
                src={cover}
                alt="pic"
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                width={100}
                height={100}
              />
              <div className='absolute hover-item-info  top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full  z-50'>
              <p className="capitalize mx-5 text-lg font-bold text-gray-100">{title}</p>
              <p className="font-semibold mx-5 text-white text-xl tracking-wide ">{desc}</p>
              <PhotoProvider>
                  <PhotoView src={cover}>
                    <img src={cover} alt="" className="w-full absolute top-0 left-0 opacity-0 h-full"
                    width={100}
                    height={100}
                    />
                  </PhotoView>
                </PhotoProvider>
              </div>
            </div>
        
    );
};

export default GalleryCard;