import { FaBookmark } from "react-icons/fa";
import { BsFillCalendar2EventFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { BsFillHeartFill } from "react-icons/bs";

const BlogData = () => {
  return (
    <div className="ml-12">
      <div className="">
        <div className="flex  mt-20">
          <FaBookmark className="text-sky-500 mr-5" size={25} />
          <p>Exploring Event</p>
        </div>
        <div>
          <h2 className="text-3xl my-4 font-semibold">
            Next js is The React frameWork 2023 update 13
          </h2>
          <img
            className=""
            src="https://i.ibb.co/N7C0rhH/1-htb-Ud-Wg-FQ3a94-PMEv-Br-h-Q.png"
            alt=""
          />
        </div>
        <div className="flex my-7">
          <div className="flex items-center mr-24 bg-slate-200 rounded-xl px-5">
            <BsFillCalendar2EventFill
              size={30}
              className="text-sky-500 my-10 mr-5"
            />
            <div>
              <p>Date</p>
              <p>3 February 2023</p>
            </div>
          </div>
          <div className="flex items-center bg-slate-200 rounded-xl px-5">
            <BsFillCalendar2EventFill
              size={30}
              className="text-sky-500 my-10 mr-5"
            />
            <div>
              <p>Category</p>
              <p>Next Js Technology</p>
            </div>
          </div>
          <button className="btn btn-sm ml-10 mt-10">Payment</button>
        </div>
        <div>
          <p className="  text-justify">
            In Next.js 13, we announced the new app directory (beta). This new
            routing and data fetching system can be incrementally adopted
            alongside your existing pages directory. The app directory provides
            many benefits, including enhanced layouts, co-location of
            components, tests, and styles, component-level data fetching, and
            more. Thanks to your feedback and early testing, we've made several
            improvements to the reliability of the app directory:
          </p>
          <h2 className="text-2xl my-2 font-semibold">
            Built-in module transpilation (stable)
          </h2>
          <p className=" text-justify">
            While bundlers understand these barrel files and can remove unused
            re-exports (called "dead code elimination"), this process involves
            parsing/compiling all re-exported files. In case of published
            libraries some npm packages ship barrel files that have thousands of
            modules re-exported, which slows down compile times. These libraries
            recommended babel-plugin-transform-imports to avoid this issue, but
            for those using SWC, there was no previous support. We've added a
            new SWC transform built into Next.js called modularizeImports.
          </p>
          <br />
          <p className=" text-justify">
            The Edge Runtime inside Next.js uses a strict subset of Node.js APIs
            (like Request, Response, and more) which are compatible with Edge
            computing platforms like Vercel or when self-hosting. These APIs run
            everywhere, including in the browser, allowing developers to learn
            them once and write everywhere.Next.js Middleware already uses this
            light edge runtime by default for better performance. As Middleware
            can run before every request in your application, having a
            lightweight runtime is critical to ensure low latency. In Next.js
            12.2, we added the ability to optionally use this runtime for API
            Routes as well.
          </p>
        </div>
      </div>
      <div className="my-20">
        <h2 className="text-3xl my-16 font-xl">
          Blog <span className="font-bold">Comment</span>
        </h2>
        <div className="flex ">
          <img
            className="rounded-full mr-12 justify-center items-center text-center  w-24"
            src="https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className="">
            <div className="flex text-yellow-600">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <p className="text-3xl font-semibold">John doe</p>
          </div>
        </div>
        <p className="w-1/2 mt-5 text-justify ml-36">
          Brilliant production. Enjoyed this as it captured so many emotions and
          being Irish some bits resonated with Irish families, the craic,
          singing. Fantastic acting and so many surprises.Fantastic acting and
          so many surprises.
        </p>
        <div className="w-1/2 my-16 flex justify-between">
          <div className="flex">
            <div className="flex ml-36 mt-2">
              <BsFillHeartFill
                size={25}
                className="justify-center text-gray-500 mr-4"
              />
              <p>Helpful?</p>
            </div>
            {/* <div className="flex ml-5">
                <a href="#" className="border-gray-500 rounded mr-2 border px-6 py-1 text-center justify-center w-10">Yes</a>
                <a href="#" className="border-gray-500 rounded border px-6 py-1  text-center justify-center w-10">No</a>
            </div> */}
          </div>
          <div className="flex ml-36">
            <button className="btn mr-5 btn-outline btn-info">Reply</button>
            <button className="btn btn-outline btn-info">Share</button>
          </div>
        </div>
      </div>
      <hr className=" border-2"/>
      <div className=" mt-20">
        <h2 className="text-4xl mb-16 font-semibold">
          Write a <span className="font-bold">Comment</span>
        </h2>
        <div className="flex my-5">
          <input
            type="text"
            placeholder="Your Name"
            className="input mr-2 bg-slate-100 input-bordered  w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Your Email Address"
            className="input mr-2 bg-slate-100 input-bordered  w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Your phone Number"
            className="input bg-slate-100 input-bordered  w-full max-w-xs"
          />
        </div>
        <textarea
          className="textarea w-full p-5 bg-slate-100 "
          placeholder="Your message"
        ></textarea>
      </div>
      <button className="btn border-none hover:bg-sky-600 my-8 bg-sky-500">
        Submit Now
      </button>
    </div>
  );
};

export default BlogData;
