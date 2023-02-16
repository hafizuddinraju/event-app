import React from "react";

const CategoryCards = ({ events }) => {
  const { img,  cate_name } = events;

  return (
    <div className="rounded-xl h-64 text-center bg-slate-50 transition duration-1000 shadow-sky-500 hover:scale-105 shadow-lg">
      <div className="p-5 py-5 flex flex-col">
        <div className="rounded-xl overflow-hidden">
          <img src={img} alt="" className="" />
        </div>
      </div>
      <div className="py-5">
        <h6 className="mb-2 ml-5 font-semibold leading-5">{cate_name}</h6>
      </div>
    </div>
  );
};

export default CategoryCards;
