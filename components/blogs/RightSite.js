import { useState } from "react";
import { FaArrowCircleDown } from "react-icons/fa";

const RightSite = () => {
  const [faqs, setFaqs] = useState("Faqs");
  const Faqs = [
    {
      id: 1,
      title: "How to join this Event?",
      desc: "Lorem ipsum dollor site amet the best consectuer diam nerd adipiscing elites sed diam nonummy nibh the ebest uismod tincidunt ut laoreet dolore.",
    },
    {
      id: 2,
      title: "How to join this Event?",
      desc: "Lorem ipsum dollor site amet the best consectuer diam nerd adipiscing elites sed diam nonummy nibh the ebest uismod tincidunt ut laoreet dolore.",
    },
    {
      id: 3,
      title: "How to make new event?",
      desc: "Lorem ipsum dollor site amet the best consectuer diam nerd adipiscing elites sed diam nonummy nibh the ebest uismod tincidunt ut laoreet dolore.",
    },
    {
      id: 4,
      title: "How to join this Event?",
      desc: "Lorem ipsum dollor site amet the best consectuer diam nerd adipiscing elites sed diam nonummy nibh the ebest uismod tincidunt ut laoreet dolore.",
    },
    {
      id: 5,
      title: "How to join this Event?",
      desc: "Lorem ipsum dollor site amet the best consectuer diam nerd adipiscing elites sed diam nonummy nibh the ebest uismod tincidunt ut laoreet dolore.",
    },
  ];
  return (
    <div>
        <h1 className="font-semibold text-gray-900 -mt-16 text-center mb-10 text-5xl">Recent Post</h1>
      <div className="relative w-[400px]  bg-[#e3edf7] shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.15),-6px_-6px_10px_-1px_rgba(255,255,255,0.8)] rounded-xl">
        

        {Faqs.map(({ id, title, desc }) => (
          <div key={id} className="">
            <input
              type="checkbox"
              id="input"
              className="absolute peer opacity-0"
            ></input>
            <label
              className="font-bold tracking-[1px] mx-[20px] h-[50px] flex items-center"
              for="input"
            >
              {title}
            </label>
            <div className="absolute top-[46px] duration-200 right-[30px] rotate-0 peer-checked:rotate-180">
              <FaArrowCircleDown/>
            </div>
            <div className="max-h-0  overflow-hidden peer-checked:max-h-full">
              <p className="p-[20px]">{desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="my-12">
      <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-[400px] h-56 md:h-64 xl:h-80"
              src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
              alt=""
            />
            <div className="absolute inset-0 px-6 text-center items-center justify-center py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gray-100">Mona Lisa</p>
              <p className="text-sm tracking-wide text-gray-300">
                Painted between 1503 and 1517, Da Vinci’s alluring portrait has
                been dogged by two questions since the day it was made: Who’s
                the subject and why is she smiling?
              </p>
             <div className="py-4">
             <button className="btn bg-orange-500 hover:from-orange-700 hover:to-orange-400">Booking Ticket</button>
             </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default RightSite;
