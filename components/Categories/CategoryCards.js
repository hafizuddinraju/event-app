import { useRouter } from "next/router";
import React from "react";

const CategoryCards = ({ events }) => {
  const { img,  cate_name } = events;
  const router = useRouter();
  const handlePushAllCategory = () =>{
    router.push('/categories');
  }
  return (
    <div onClick={handlePushAllCategory} className="rounded-xl cursor-pointer parent-category-container-grid-card mx-14 lg:mx-0 lg:h-64  bg-slate-50 transition duration-1000 shadow-sky-400 hover:scale-105 shadow-lg">
      <div className="p-5 ">
        <div className="rounded-xl">
          <img src={img} alt="" className="" />
        </div>
      </div>
      <div className="py-5">
        <h6 className=" text-center text-2xl font-semibold leading-5">{cate_name}</h6>
      </div>
    </div>
  );
};

export default CategoryCards;
