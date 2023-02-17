import Link from "next/link";
import Item from "./RightSite";

const Faq = () => {
    return (
      <div class="py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div class="flex flex-col mb-16 sm:text-center">
            <div class="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
              <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl text-center">
                  <span className="text-sky-600">Event</span>Mart
              </h2>
              <p class="text-base text-gray-700 md:text-lg px-3">
              The goal of our event management agency is to ensure that the event runs smoothly and is a success for all involved. We work closely with clients to understand their needs and goals, and then use our expertise to plan and execute an event that meets those needs and exceeds expectations.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <Item title="What is event management?">
            Event management involves the planning, organization, and execution of events, such as conferences, trade shows, concerts, and other gatherings. Event management professionals help clients with everything from selecting a venue to coordinating vendors and managing logistics on the day of the event.
            </Item>
            <Item title="What services does your event management company offer?">
            Our event management company offers a wide range of services, including event planning and design, vendor management, budgeting and financial management, and on-site event management and coordination.
            </Item>
            <Item title="How much does it cost to hire an event management company?">
            The cost of hiring an event management company will vary depending on the size and complexity of your event, as well as the services you require. We offer customized event management solutions that are tailored to your specific needs and budget, and we are happy to provide a detailed quote for our services upon request.
            </Item>
            <Item title="How can I ensure that my event runs smoothly?">
            To ensure that your event runs smoothly, it is important to work with an experienced and professional event management team that can help you anticipate and address any issues that may arise. We will work with you to create a detailed event plan and provide on-site coordination and management to ensure that everything goes according to plan.
            </Item>
          </div>
        </div>
        <div className="my-12 mx-5">
        <a href="/" aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-[400px] h-56 md:h-64 xl:h-80"
                src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                alt=""
              />
              <div className="absolute inset-0 px-6 text-center items-center justify-center py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-3xl font-bold text-gray-100">
                <span className="text-sky-500">Event</span>Mart
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                The goal of our event management agency is to ensure that the event runs smoothly and is a success for all involved. We work closely with clients to understand their needs and goals, and then use our expertise to plan and execute an event that meets those needs and exceeds expectations.
                </p>
                <div className='flex justify-center mt-5 tooltip' data-tip='click to explore our events'>
                  <Link href='/categories' className='btn text-lg normal-case bg-sky-500 hover:bg-sky-700 text-white font-sm py-2 px-4 rounded-full cursor-pointer border border-blue-500'>Events
                  </Link>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  };
  
  export default Faq;