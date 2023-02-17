import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { getPhotoGallery } from "../../lib/helperGallery";
import GalleryCard from "../galleryCard/GalleryCard";
import Spinner from "../Spinner/Spinner";

const GallerySection = () => {

  const { data: allPhotos = [], error, isError, refetch, isLoading } = useQuery({
    queryKey: ['photos'],
    queryFn: async () => {
      const res = await getPhotoGallery();
      return res;
    }
  })
  // console.log(allPhotos)


  if (isLoading) {
    return <Spinner></Spinner>
  }
  return (
    <>
      <div className="px-4 bg-[#f1f1f1]  max-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8 lg:py-28" data-aos="fade-up"
     data-aos-duration="3000">
        <div className=" mb-6 text-center lg:justify-center lg:flex-row md:mb-8">
          <h2 className="text-5xl font-bold mb-3"><span className="text-sky-500 ">OUR</span> GALLERY</h2>
          <h4 className="text-lg font-xl">
            Some of our projects discussion,management and meeting image
          </h4>
        </div>
        <div  className="grid gap-6 mb-8 w-full lg:grid-cols-4 md:grid-cols-2 sm:row-gap-6 sm:grid-cols-1 justify-center align-middle ">

          {
          allPhotos.length > 0  && allPhotos?.slice(0, 4).map(({ _id, title, desc, cover }) => 
            <GalleryCard 
            key={_id}
            title={title}
            desc={desc}
            cover={cover}
            ></GalleryCard>
          )}
        </div>
        <div className='flex justify-center mt-20 tooltip' data-tip='click the Button explore more Gallery Cards'>
          <Link href='/allGallery' className='btn text-xl normal-case bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 mb-12 md:mb-12 lg:mb-0 rounded-full cursor-pointer border border-blue-500'>See more
          </Link>
        </div>
      </div>
    </>
  );
};

export default GallerySection;
