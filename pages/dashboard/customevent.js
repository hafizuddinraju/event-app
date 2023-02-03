import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import SmallSpinner from "../../components/Spinner/SmallSpinner"
import { AuthContext } from "../../context/AuthProvider";
import LayoutDashboard from "../../layout/LayoutDashboard"
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { addCustomEvent } from "../../lib/customEventAddHalper";
 const CustomEvent = () =>{
  const {user} = useContext(AuthContext);
  const userEmail = user?.email ;
    const [spinner, setSpinner] = useState(false);
    const router = useRouter();
    const {
        register,
        handleSubmit,
     
        formState: { errors },
      } = useForm();
    // check button
    const [term , setTerm ] = useState(false);
    //   form submit button assign
      const handleCustomEvent =async (data) =>{
        const userData = {
          eventName :data.name ,
          email : data.email ,
          phone:data.number ,
          eventDate : data.date ,
          guest: data.member ,
          description:data.description ,
          eventLocation : data.location,
          status : "0"
        }
        const response = await addCustomEvent(userData)
       if(response){
        setSpinner(false)
        toast.success('Request Event Successful', {autoClose:1000})
        router.push('/dashboard/requestedevent')
       }
      }
    const handleSpinner = () => {
        setSpinner(true);
      };
    return (
        <LayoutDashboard>
             <div className="bg-slate-800 border h-screen mb-20 rounded-lg">
          <div className="text-white text-center uppercase font-bold md:text-3xl text-2xl pt-10 md:pt-20">
            Request For Your Own Event
          </div>
          <div className=" bg-slate-900 border  border-slate-900 rounded-lg mx-2 md:mx-10 mt-4 flex justify-between items-center">
           <div>
           <img
              className=" lg:w-32 ml-10 hidden  lg:block "
              src="https://i.ibb.co/khpBckc/f67.png"
              alt=""
            />
           </div>
            <div className="md:p-10 flex-1">
                {/* form */}
              <form onSubmit={handleSubmit(handleCustomEvent)}>
                <div className="">
                    {/* even name div and place */}
                 <div className="md:flex  justify-center md:gap-20 lg:gap-5"> 
                 <div className="w-full form-control md:w-1/3">
                    <label className="label">
                      {" "}
                      <span className="label-text text-white">Event Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Product Name"
                      {...register("name", {
                        required: "Event Name is Required",
                      })}
                      className="input input-bordered "
                    />
                    {errors.name && (
                      <p className="text-red-500">{errors.name.message}</p>
                    )}
                  </div>
                   <div className="w-full my-2 md:my-0 form-control md:w-1/3">
                    <label className="label">
                      {" "}
                      <span className="label-text text-white">Event Location</span>
                    </label>
                    <input
                   
                      type="text"
                      placeholder="Where You want this location"
                      {...register("location", {
                        required: "Location is Required",
                      })}
                      className="input w-full input-bordered "
                    />
                    {errors.name && (
                      <p className="text-red-500">{errors.location.message}</p>
                    )}
                  </div>
                 
                 </div>
                 {/* second div for form */}
                 <div className="md:flex md:my-5 justify-center md:gap-20 lg:gap-5">
                 <div className="w-full my-2 md:my-0 form-control md:w-1/3">
                    <label className="label">
                      {" "}
                      <span className="label-text text-white">How many Member Attend</span>
                    </label>
                    <input
                   
                      type="number"
                      placeholder="How much member"
                      {...register("member", {
                        required: "member is Required",
                      })}
                      className="input -full input-bordered "
                    />
                    {errors.name && (
                      <p className="text-red-500">{errors.member.message}</p>
                    )}
                  </div>
                  <div className="w-full my-2 md:my-0 form-control md:w-1/3">
                    <label className="label">
                      {" "}
                      <span className="label-text text-white">How that Date you want</span>
                    </label>
                    <input
                   
                      type="date"
                     
                      {...register("date", {
                        required: "Event date is Required",
                      })}
                      className="input -full input-bordered "
                    />
                    {errors.name && (
                      <p className="text-red-500">{errors.date.message}</p>
                    )}
                  </div>
                 </div>
                 {/* second div for form */}
                 <div className="md:flex md:my-5 justify-center md:gap-20 lg:gap-5">
                 <div className="w-full my-2 md:my-0 form-control md:w-1/3">
                    <label className="label">
                      {" "}
                      <span className="label-text text-white">Your Email</span>
                    </label>
                    <input
                   
                      type="email"
                      defaultValue={userEmail}
                      readOnly
                      {...register("email", {
                        required: "email is Required",
                      })}
                      className="input -full input-bordered "
                    />
                    {errors.name && (
                      <p className="text-red-500">{errors.email.message}</p>
                    )}
                  </div>
                  <div className="w-full my-2 md:my-0 form-control md:w-1/3">
                    <label className="label">
                      {" "}
                      <span className="label-text text-white">Your Phone Number</span>
                    </label>
                    <input
                   
                      type="number"
                     
                      {...register("number", {
                        required: "phone number is Required",
                      })}
                      className="input -full input-bordered "
                    />
                    {errors.name && (
                      <p className="text-red-500">{errors.number.message}</p>
                    )}
                  </div>
                 </div>

                        {/* description field */}
               <div className="flex justify-center">
               <div className="form-control  w-full  md:w-4/6 ">
                    <label className="label">
                      {" "}
                      <span className="label-text  text-white">
                       Write Some About Your Event
                      </span>
                    </label>
                    <textarea
                      type="text"
                      placeholder="Write Here  ......"
                      {...register("description", {
                        required: "Description is Required",
                      })}
                      className="input placeholder:pt-1 placeholder:text-black input-bordered h-16 w-full "
                    />
                    {errors.description && (
                      <p className="text-red-500">
                        {errors.description.message}
                      </p>
                    )}
                  </div>
               </div>
                </div>
              

                        {/* submit spinner */}
                <div className="flex gap-5 justify-between items-center md:w-1/2 md:mx-auto">
                      {/* term and condition */}
                <div className="flex flex-col ">
                   
                    <label htmlFor="term" className="text-white">Are you agree our term and condition</label>
                        <input className="w-4 h-4" onClick={()=>setTerm(!term)} type="checkbox" />
                </div>
                    <button
                        onClick={handleSpinner}
                        disabled={!term}
                        className={`btn btn-sm disabled:text-gray-600 disabled:bg-gray-100 bg-sky-500 border-none w-full md:w-1/3 mx-auto mt-4 disabled `}
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
    )
}
export default CustomEvent