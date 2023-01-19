import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React, { useState } from "react";
import { BsArrowsFullscreen } from "react-icons/bs";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { getPhotoGallery } from "../../lib/helperGallery";

const GallerySection = () => {
  const [hover, setHover] = useState(false);
  const {data: allPhotos = [],error, isError, refetch, isLoading} = useQuery({
    queryKey: ['photos'],
    queryFn: async () =>{
        const res = await getPhotoGallery();
        return res;
    }
})

if(isLoading){
  return <div>Loading....</div>
}
  return (
    <>
      <div className="px-4 py-16 max-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8 lg:py-20">
        <div className=" mb-6 text-center lg:justify-center lg:flex-row md:mb-8">
          <h2 className="text-3xl font-bold">OUR GALLERY</h2>
          <h4 className="text-lg font-xl">
            Some of our project discussion,management and meeting image
          </h4>
        </div>
        <div className="grid gap-6 mb-8 w-full lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
          {allPhotos?.map(({ id, title, desc, cover }) => (
            <div
              key={id}
              className="relative overflow-hidden transition rounded duration-200 transform shadow-lg hover: translate-y-2 hover:shadow-2xl"
            >
              <img
                src={cover}
                alt="pic"
                className="object-cover w-full h-56 md:h-64 xl:h-80"
              />

              <div className="absolute inset-0 px-6 py-4 top-0 left-0 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">{title}</p>
                <PhotoProvider>
                  <PhotoView src={cover}>
                    <img src={cover} alt="" className="w-full absolute top-0 left-0 opacity-0 h-full" />
                  </PhotoView>
                </PhotoProvider>

                <p className="text-sm tracking-wide text-gray-300">{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='flex justify-center mb-20 tooltip' data-tip='Tap to explore more events'>
                <Link href='/' className='btn text-xl normal-case bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer border border-blue-500'>See more...</Link>
            </div>
      </div>
    </>
  );
};

export default GallerySection;
