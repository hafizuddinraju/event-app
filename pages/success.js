// import { useRouter } from "next/router";
// import { useEffect } from "react";
// import { useSWR } from "swr";
// import SingleCategory from "./singleevent/[eventId]";

// const Success = () => {
//     const {
//         query: {session_id},} = useRouter()
//     const {eventData} = SingleCategory();

//     const {data,error} = useSWR(
//         () =>`api/checkout_sessions/${session_id}`,
//         fetcher
//     )

//     useEffect(()=>{
//         if(data){
//             shootFireworks();
//             eventData()
//         }
//     },[data])
//     return(
//         <div className="container xl:max-w-screen-xl mx-auto py-12 px-6 text-center">
//             {error?(
//                 <div className="p-2 rounded-md bg-rose-200 text-rose-200 max-w-md mx-auto">
//                     <p className="text-lg">sorry,something went wrong</p>
//                 </div>
//             ):
//             !data? (
//                 <div className="p-2 rounded bg-gray-100 text-gray-500 max-w-md mx-auto">
//                     <p className="text-lg">Loading...</p>
//                 </div>
//             ):(
//                 <div className="py-4 px-8 rounded-md bg-gray-100 max-w-lg mx-auto">
//                     <h2 className="text-4xl font-semibold flex flex-col items-center space-x-1">
//                         <span>Thank for your order</span>
//                     </h2>
//                 </div>
//             )}
//         </div>
//     )
// }
// export default Success;