import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { blogData } from "../../lib/helperBlog";

const LeftSide = () => {
  
  const [readMore, setReadMore] = useState({});

  const handleReadMore = (id) =>{
    setReadMore({
      ...readMore,
      [id]: true
    });
}

const handleShowLess = (id) =>{
  setReadMore({
    ...readMore,
    [id]: false
  });
}

const { data: cards = [], error, isError, refetch, isLoading } = useQuery({
  queryKey: ['blog'],
  queryFn: async () => {
    const res = await blogData();
    return res;
  }
})

// console.log(cards)
  
  return (
   <>
   
   <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-5 sm:grid-cols-1">
      {
      cards.length > 0  && cards?.map(({ _id, name, title, desc ,image}) => (
        <div
          key={_id}
          className=" max-w-screen-lg row-gap-5 md:row-gap-8 sm:mx-auto"
        >
          <div className="transition  duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow-2xl md:text-start">
            <div className="relative">
              
              <img
                className="object-cover w-full h-full rounded-t lg:h-80 xl:h-96"
                src={image}
                alt="img"
              />
              
              <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
              
            </div>
            <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
              <div className="flex items-center mr-4 gap-4">
                <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                  {name}
                </h5>
              </div>
              <div className="flex items-center my-3 gap-2">
                <BsPersonCircle size={25}/>
                <h4 className="text-xl text-gray-500">{title}</h4>
              </div>
              <p className={' transition-all duration-1000 '}>

                {desc?.length > readMore || readMore[_id] ? (
                  <small className='transition text-[16px] duration-1000'>
                    {" "}
                    {desc}{" "}
                    {desc?.length > readMore && !readMore[_id] && (
                      <button
                        onClick={() => handleReadMore(_id)}
                        className="text-sky-700"
                      >
                        read more
                      </button>
                    )}
                    {readMore[_id] && (
                      <button className='text-red-500 underline font-bold' 
                        onClick={() => handleShowLess(_id)}>
                        show less
                      </button>
                    )}
                  </small>
                ) : (
                  <small className='transition text-[16px] duration-1000'>
                    {" "}
                    {desc.slice(0, 200) + "..."}{" "}
                    <button
                      onClick={() => handleReadMore(_id)}
                      className="text-sky-700"
                    >
                      read more
                    </button>
                  </small>
                )}
              </p>
              
              <Link href='/BlogDetail'><button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6 mt-6 font-medium tracking-wide text-orange-600 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Read more
              </button></Link>
            </div>
          </div>
        </div>
      ))}
    </div>
   </> 
  );
};

export default LeftSide;
