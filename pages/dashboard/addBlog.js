import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import SmallSpinner from "../../components/Spinner/SmallSpinner";
import LayoutDashboard from "../../layout/LayoutDashboard";
import { addBlogData, blogData } from "../../lib/helperBlog";
const cors = require("cors");

const addBlog = () => {
  const router = useRouter();
  const [spinner, setSpinner] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const imgHost = "041fbe58f313eee96990646a213a5d53";
  console.log(imgHost);
  const { data: allBlog, isLoading } = useQuery({
    queryKey: ["allBlog"],
    queryFn: async () => {
      const res = await blogData();

      return res;
    },
  });

  
  const url = `https://api.imgbb.com/1/upload?key=${imgHost}`;
  console.log(allBlog);

  const handleSubmitEvent = async (data) => {
   
      
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);

      console.log(url)
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        console.log(imgData.data.display_url);
        const BlogInfo = {
            name: data.name,
            title: data.title,
            desc: data.desc,
            image: imgData.data.display_url,
          };
        if (imgData.success) {
           const res = addBlogData(BlogInfo);
           console.log(res)
           if(res){
            setSpinner(false)
            toast.success('Add Blog Successful', {autoClose:500})
           }
              
          
        }
      });
  };
  const handleSpinner = () => {
    setSpinner(true);
  };
  return (
    <>
      <title>Add Blog</title>
      <LayoutDashboard>
        <div className="bg-slate-800 border h-screen rounded-lg">
          <div className="text-white text-center uppercase font-bold text-3xl pt-20">
            Add Blog
          </div>
          <div className=" bg-slate-900 border  border-slate-900 rounded-lg mx-20 mt-4 flex justify-between items-center">
            <img
              className="w-32 ml-20 hidden md:block lg:block "
              src="https://i.ibb.co/khpBckc/f67.png"
              alt=""
            />
            <div className="p-10">
              <form onSubmit={handleSubmit(handleSubmitEvent)}>
                <div className="flex flex-wrap gap-5">
                  <div className="form-control w-full md:w-1/3">
                    <label className="label">
                      {" "}
                      <span className="label-text text-white">Blog Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Blog Name"
                      {...register("name", {
                        required: "Name is Required",
                      })}
                      className="input input-bordered "
                    />
                    {errors.name && (
                      <p className="text-red-500">{errors.name.message}</p>
                    )}
                  </div>
                  <div className="form-control w-full md:w-1/3">
                    <label className="label">
                      {" "}
                      <span className="label-text text-white">Your Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      {...register("title", {
                        required: "title is Required",
                      })}
                      className="input input-bordered "
                    />
                    {errors.name && (
                      <p className="text-red-500">{errors.title.message}</p>
                    )}
                  </div>
                  <div className="form-control w-full md:w-1/3 ">
                    <label className="label">
                      {" "}
                      <span className="label-text text-white">Photo</span>
                    </label>
                    <input
                      type="file"
                      {...register("image", {
                        required: "Photo is Required",
                      })}
                      className="input input-bordered py-2 w-full "
                    />
                    {errors.img && (
                      <p className="text-red-500">{errors.img.message}</p>
                    )}
                  </div>

                  <div className="form-control w-full ml-3 md:w-4/6 ">
                    <label className="label">
                      {" "}
                      <span className="label-text  text-white">
                        Description
                      </span>
                    </label>
                    <textarea
                      type="text"
                      {...register("desc", {
                        required: "Description is Required",
                      })}
                      className="input input-bordered h-16 w-full "
                    />
                    {errors.desc && (
                      <p className="text-red-500">
                        {errors.desc.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className=" md:w-1/2 md:mx-auto">
                  <button
                    onClick={handleSpinner}
                    className="btn btn-sm  bg-sky-500 border-none w-full md:w-1/3 mx-auto mt-4"
                    type="submit"
                  >
                    {spinner ? <SmallSpinner></SmallSpinner> : "Add Blog"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </LayoutDashboard>
    </>
  );
};

export default addBlog;
