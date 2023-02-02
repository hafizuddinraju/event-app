import Image from 'next/image';
import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const GalleryCard = ({_id,cover,desc,title}) => {
    return (
       
             <div
              key={_id}
              className="relative overflow-hidden transition-all rounded  duration-1000 transform shadow-lg hover: translate-y-2 hover:shadow-2xl"
            >
              <img
                src={cover}
                alt="pic"
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                width={100}
                height={100}
              />

              <div className="absolute inset-0 px-6 py-4 top-0 left-0 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">{title}</p>
                <PhotoProvider>
                  <PhotoView src={cover}>
                    <img src={cover} alt="" className="w-full absolute top-0 left-0 opacity-0 h-full"
                    width={100}
                    height={100}
                    />
                  </PhotoView>
                </PhotoProvider>

                <p className="text-sm tracking-wide text-gray-300">{desc}</p>
              </div>
            </div>
        
    );
};

export default GalleryCard;