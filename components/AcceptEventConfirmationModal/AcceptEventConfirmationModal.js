import { useRouter } from "next/router";

const AcceptEventConfirmationModal = ({message, data , handler, setData}) => {
  const router = useRouter();
    const handleExecuteHandler = () =>{
        {!router.pathname.includes("/dashboard/allUser") && handler(data?._id);}
        handler(data?.email)
        setData(null);
    }
    return (
        <div>
{/* Put this part before </body> tag */}
<input type="checkbox" id="accept-event-confirmation-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
  <h3 className="font-bold text-xl text-center mb-2">{message || ""}</h3>
   {!router.pathname.includes("/dashboard/allUser") && <>
    <p className="text-xl font-semibold">Event is {data?.eventName || ""}</p>
    <p className=" text-xl">Event Date {data?.eventDate || ""}</p>
    <p className="font-semibold">Your Event Location {data?.eventLocation || ""}</p>
   </>}
   {
    router.pathname.includes("/dashboard/allUser") && <>
       <p className="text-xl text-black"> User Name :  {data?.name || ""}</p>
       <p className="text-xl text-black"> User Email :  {data?.email || ""}</p>
    </>
   }
    <div className="modal-action">
      <label htmlFor="accept-event-confirmation-modal" className="btn">Cancel</label>
      <label onClick={handleExecuteHandler} className="btn btn-primary">{router.pathname.includes("/dashboard/allUser") ? "Make Admin" :"Accept"}</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default AcceptEventConfirmationModal;