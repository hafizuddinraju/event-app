import { Fragment, useState } from "react";
import Collapsible from "react-collapsible";

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
    <Fragment>
    <section >
          <h2 className="text-3xl text-center mb-4">Frequently Ask</h2>
      <div >
        <div className="relative w-[400px]  bg-[#e3edf7] shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.15),-6px_-6px_10px_-1px_rgba(255,255,255,0.8)] rounded-xl">
          {
            Faqs.map(({id,title,desc})=>
              <div key={id} className="p-2 card shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.15),-8px_-8px_12px_-1px_rgba(255,255,255,0.8)] rounded-xl">
                  <Collapsible
                  className="collapsible"
                  trigger={[<i className='fa-solid fa-angle-down'/>,title]}
                  triggerOpen={[<i className='fa-solid fa-angle-up'/>,title]}
                  >
                      <p className="text-[16px]">{desc}</p>
                  </Collapsible>
              </div>
            )
          }
        </div>
          <div className="my-12 mx-5">
    <a href="/" aria-label="View Item">
        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
          <img
            className="object-cover w-[400px] h-56 md:h-64 xl:h-80"
            src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
            alt=""
          />
          <div className="absolute inset-0 px-6 text-center items-center justify-center py-4 transition-opacity duration-200 bg-black bg-opacity-60 opacity-100">
            <p className="mb-10 mt-6 text-3xl font-semibold text-gray-100">X-Coder's</p>
            <p className="mb-4 text-4xl font-semibold text-gray-100">Web Development <br/> Conference</p>
            
           <div className="py-4">
           <button className="btn bg-orange-600 border-none hover:bg-orange-400 ">Booking Ticket</button>
           </div>
          </div>
        </div>
      </a>
    </div>
         </div> 
    </section>
  </Fragment>
  );
};

export default RightSite;
