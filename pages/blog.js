
import LeftSide from "../components/blogs/LeftSide";
import RightSite from "../components/blogs/RightSite";



const blog = () => {
  return (
    <div>
      <div className="mb-24 py-10">
        <div className="relative">
          <img
            className="object-cover w-full h-56 sm:h-96"
            src="https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          
          <div className="absolute  inset-0 bg-gray-900 bg-opacity-60" >
           <div className="text-center justify-center mt-24">
           <h3 className="text-xl my-2 font-lg text-white">OUR BLOGS</h3>
           <h3 className="text-3xl my-2 font-xl text-gray-200">EVENT MART</h3>
           <h3 className="text-5xl font-semibold text-yellow-500">LATEST BLOGS</h3>
           <div className="flex text-center justify-center mt-12">
            <a className="mr-10 text-lg font-lg hover:scale-105  duration-100 text-gray-200" href='/'>Home</a>
            <a className="mr-10 text-lg font-lg  text-gray-200" href='/'>||</a>
            <a className="text-lg font-lg hover:scale-105  duration-100 text-gray-200" href='/'>Our Blogs</a>
           </div>
           </div>
          </div>
        </div>
      </div>
      <div className="flex lg:inline-flex md:inline-block sm:inline-block  gap-10">
        <div className="w-2/3 ml-10 mb-10">
        <LeftSide/>
        </div>
        <div>
          <RightSite/>
        </div>
      </div>
    </div>
  );
};

export default blog;
