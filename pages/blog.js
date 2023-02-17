import Faq from "../components/blogs/Faq";
import LeftSide from "../components/blogs/LeftSide";


const blog = () => {
  return (
    <div>
      <div className="mb-10 lg:mb-24 py-5 lg:py-10">
        <div className="relative">
          <img
            className="object-cover w-full h-80 sm:h-96"
            src="https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          
          <div className="absolute  inset-0 bg-gray-900 bg-opacity-80" >
           <div className="text-center justify-center mt-24">
           <h3 className="text-lg md:text-xl my-2 font-light font-lg text-white">OUR BLOGS</h3>
           <h3 className="text-xl md:text-3xl my-2 font-xl text-gray-300">EVENT MART</h3>
           <h3 className="text-2xl md:text-5xl font-semibold text-sky-500">LATEST BLOGS</h3>
           <div className="flex text-center justify-center mt-12">
            <a className="mr-10 text-lg font-lg hover:scale-105  duration-100 text-gray-300" href='/'>Home</a>
            <a className="mr-10 text-lg font-lg  text-gray-200" href='/'>||</a>
            <a className="text-lg font-lg hover:scale-105  duration-100 text-gray-300" href='/'>Our Blogs</a>
           </div>
           </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="w-3/4 ml-10 mb-10 order-2 lg:order-1">
        <LeftSide/>
        </div>
        <div className=" order-1 lg:order-2">
          <Faq/>
        </div>
      </div>
    </div>
  );
};

export default blog;
