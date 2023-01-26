import React from "react";

const LeftSide = () => {
  const cards = [
    {
      id: 1,
      name: "Biggest Musical Event",
      title: " Musical Event",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "",
      icon: "",
    },
    {
      id: 2,
      name: "Biggest Musical Event",
      title: " Musical Event",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "",
      icon: "",
    },
    {
      id: 3,
      name: "Biggest Musical Event",
      title: " Musical Event",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "",
      icon: "",
    },
    {
      id: 4,
      name: "Biggest Musical Event",
      title: " Musical Event",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "",
      icon: "",
    },
    {
      id: 5,
      name: "Biggest Musical Event",
      title: " Musical Event",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "",
      icon: "",
    },
    {
      id: 6,
      name: "Biggest Musical Event",
      title: " Musical Event",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "",
      icon: "",
    },
  ];
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-5 sm:grid-cols-1">
      
      {cards.map(({ id, name, title, desc, img, icon }) => (
        <div
          key={id}
          className=" max-w-screen-lg border-orange-600 row-gap-5 md:row-gap-8 sm:mx-auto"
        >
          <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-start">
            <div className="relative">
              <img
                className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                src="https://images.pexels.com/photos/3182796/pexels-photo-3182796.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
              <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
            </div>
            <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
              <div>
                {icon}
                <h4>{title}</h4>
              </div>
              <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                {name}
              </h5>
              <p className="mb-5 text-gray-700">{desc}</p>
              <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-orange-600 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Read more
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeftSide;
