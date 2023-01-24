
import { useQuery } from "@tanstack/react-query";
import "react-photo-view/dist/react-photo-view.css";
import { getPhotoGallery } from "../../helper/helperGallery";
import GalleryData from "./GalleryData";

const GallerySection = () => {

  const {data: allGallery = [], refetch} = useQuery({
    queryKey: ['gallery'],
    queryFn: async () =>{
        const res = await getPhotoGallery();
        return res;
    }
})

console.log(allGallery)

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
          {
          allGallery.length > 0 && allGallery.slice(0, 3).map(category => 
              <GalleryData
              key={category.id}
              category={category}
              ></GalleryData>
         )}
        </div>
        
      </div>
    </>
  );
};

export default GallerySection;
