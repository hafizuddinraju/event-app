import { useRouter } from "next/router";
import { useState } from "react";


const ConfirmationModal = ({message, data , handler, setData}) => {
  const [userMessage, setUserMessage] = useState("");
    const handleExecuteHandler = () =>{
        handler(data?._id);
        setData(null);
    }
    console.log(data, "modal")
    const router = useRouter();
    return (
<div>

<input type="checkbox" id="confirmation-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-xl text-center mb-2">{message || ""}</h3>
    {
      !router.pathname.includes("/dashboard/allUser") && <>
    <p className="text-xl font-semibold">Your Event is {data?.eventName || ""}</p>
    <p className=" text-xl">Your Event Date {data?.eventDate || ""}</p>
    <p className="font-semibold">Your Event Location {data?.eventLocation || ""}</p>
      </>
    }
    {
      router.pathname.includes("/dashboard/allUser") && <>
       <p className=" text-xl text-black">User Name :  {data?.name || ""}</p>
       <p className=" text-xl text-black">User Email  : {data?.email || ""}</p>
      </>
    }
    
    <div>
     { router.pathname.includes( 
"/dashboard/adminRequestEvents") && <textarea onChange={(e)=>setUserMessage(e.target.value)} className="input input-bordered
       border-black w-full h-20 py-2 my-2" type="text" placeholder="Write something for user...." ></textarea>}
    </div>
    <div className="modal-action">
      <label htmlFor="confirmation-modal" className="btn">Cancel</label>
      <label onClick={handleExecuteHandler} className="btn btn-primary">{
        router.pathname.includes("/dashboard/adminRequestEvents") ? "Reject" : "DELETE"
      }</label>
    </div>
  </div>
</div>
</div>
    );
};

export default ConfirmationModal;