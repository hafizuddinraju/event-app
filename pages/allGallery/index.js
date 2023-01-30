import { useQuery } from "@tanstack/react-query";
import React from "react";
import GalleryCard from "../../components/galleryCard/GalleryCard";
import Spinner from "../../components/Spinner/Spinner";
import { getPhotoGallery } from "../../lib/helperGallery";

const index = () => {
  const {
    data: allPhotos = [],
    error,
    isError,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["photos"],
    queryFn: async () => {
      const res = await getPhotoGallery();
      return res;
    },
  });
  console.log(allPhotos);

  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
   <>
   <div className="">
        <h2 className="text-4xl mt-28 text-center font-semibold text-orange-600"><i>Our Event Gallery</i></h2>
        <p className="text-center text-xl font-xl mt-3">Our event management all service are available,we provide this <br/> and our service Gallery</p>
        </div>
     <div className="grid gap-6 mb-8 my-24 max-w-screen-xl mx-auto lg:grid-cols-4 md:grid-cols-2 sm:row-gap-6 sm:grid-cols-1">
      {allPhotos.length > 0 &&
        allPhotos
          ?.map(({ _id, title, desc, cover }) => (
            <GalleryCard
              key={_id}
              title={title}
              desc={desc}
              cover={cover}
            ></GalleryCard>
          ))}
    </div>
   </>
  );
};

export default index;