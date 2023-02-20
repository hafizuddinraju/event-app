import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import SmallSpinner from "../../components/Spinner/SmallSpinner";
import LayoutDashboard from "../../layout/LayoutDashboard";
import { getCategory } from "../../lib/helperCategory";
import { getSubCategory, postEvent } from "../../lib/helperSubCategory";
const cors = require("cors");

const addEvent = () => {
  const router = useRouter();
  const [spinner, setSpinner] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const imgHost = "041fbe58f313eee96990646a213a5d53";
  // console.log(imgHost);
  const { data: allEvent, isLoading } = useQuery({
    queryKey: ["allEvent"],
    queryFn: async () => {
      const res = await getCategory();

      return res;
    },
  });
  // console.log(allEvent);
  const { data: subCategories } = useQuery({
    queryKey: ["subCategories"],
    queryFn: async () => {
      const res = await getSubCategory();

      return res;
    },
  });
  // console.log(subCategories);

  const handleSubmitEvent = async (data) => {
   
      
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${imgHost}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(async(imgData) => {
        if (imgData.success) {
            const eventInfo = {
                code: data.allEvent,
                name: data.name,
                description: data.description,
                availability: '1',
                price: data.price,
                image_url: imgData.data.url,
                location: data.subCategories,
                position: data.position,
                latitude: data.latitude,
                longitude: data.longitude
              };
           const res = await postEvent(eventInfo);
           console.log(res)
           if(res){
            setSpinner(false)
            toast.success('Add Event Successful', {autoClose:500})
           }
              
          
        }
      });
  };
  const handleSpinner = () => {
    setSpinner(true);
  };
  return (
    <>
      <title>Add Event</title>
      <LayoutDashboard>
        <div className="bg-slate-800 border rounded-lg">
          <div className="text-white text-center uppercase font-bold text-3xl pt-20">
            Add Event
          </div>
          <div className=" bg-slate-900 border  border-slate-900 rounded-lg mx-20 my-4 flex justify-between items-center">
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
                      <span className="label-text text-white">Event Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Product Name"
                      {...register("name", {
                        required: "Name is Required",
                      })}
                      className="input input-bordered "
                    />
                    {errors.name && (
                      <p className="text-red-500">{errors.name.message}</p>
                    )}
                  </div>
                  <div className="form-control w-full md:w-1/3 ">
                    <label className="label">
                      {" "}
                      <span className="label-text text-white">Event Code</span>
                    </label>
                    <select
                      {...register("allEvent")}
                      className="select input-bordered w-full "
                    >
                        <option>Select Code</option>
                      {allEvent?.map((c) => (
                        <>
                        <option key={c._id} value={c.code}>
                          {c.code}
                        </option>
                        </>
                      ))}
                    </select>
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
                  <div className="form-control w-full md:w-1/3 ">
                    <label className="label">
                      {" "}
                      <span className="label-text text-white">Price</span>
                    </label>
                    <input
                      type="text"
                      placeholder="$588"
                      {...register("price", {
                        required: "Price is Required",
                      })}
                      className="input input-bordered w-full "
                    />
                    {errors.price && (
                      <p className="text-red-500">
                        {errors.price.message}
                      </p>
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
                      placeholder="Write details here"
                      {...register("description", {
                        required: "Description is Required",
                      })}
                      className="input input-bordered h-16 w-full "
                    />
                    {errors.description && (
                      <p className="text-red-500">
                        {errors.description.message}
                      </p>
                    )}
                  </div>
                  <div className="form-control w-full md:w-1/3 ">
                    <label className="label">
                      {" "}
                      <span className="label-text text-white">Location</span>
                    </label>
                    <select
                      {...register("subCategories")}
                      className="select input-bordered w-full "
                    >
                        <option>Select location</option>
                      {subCategories?.map((event) => (
                        <>
                        <option key={event._id} value={event.location}>
                          {event.location}
                        </option>
                        </>
                      ))}
                    </select>
                  </div>
                  <div className="form-control w-full md:w-1/3">
                    <label className="label">
                      {" "}
                      <span className="label-text text-white">Position</span>
                    </label>
                    <input
                      type="text"
                      placeholder="[latitude, longitude]"
                      {...register("position", {
                        required: "position is Required",
                      })}
                      className="input input-bordered "
                    />
                    {errors.position && (
                      <p className="text-red-500">{errors.position.message}</p>
                    )}
                  </div>
                  <div className="form-control w-full md:w-1/3">
                    <label className="label">
                      {" "}
                      <span className="label-text text-white">Latitude</span>
                    </label>
                    <input
                      type="text"
                      placeholder="23.781855069839718"
                      {...register("latitude", {
                        required: "latitude is Required",
                      })}
                      className="input input-bordered "
                    />
                    {errors.latitude && (
                      <p className="text-red-500">{errors.latitude.message}</p>
                    )}
                  </div>
                  <div className="form-control w-full md:w-1/3">
                    <label className="label">
                      {" "}
                      <span className="label-text text-white">Longitude</span>
                    </label>
                    <input
                      type="text"
                      placeholder="90.41470751205877"
                      {...register("longitude", {
                        required: "longitude is Required",
                      })}
                      className="input input-bordered "
                    />
                    {errors.longitude && (
                      <p className="text-red-500">{errors.longitude.message}</p>
                    )}
                  </div>
                </div>
                <div className=" md:w-1/2 md:mx-auto">
                  <button
                    onClick={handleSpinner}
                    className="btn btn-sm  bg-sky-500 border-none w-full md:w-1/3 mx-auto mt-4"
                    type="submit"
                  >
                    {spinner ? <SmallSpinner></SmallSpinner> : "Add Event"}
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

export default addEvent;
