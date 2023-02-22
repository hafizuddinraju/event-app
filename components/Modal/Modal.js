
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { addBooking } from "../../lib/helperBooking";


const Modal = ({ setModal, modal }) => {
  console.log(modal);
  const {user} =useContext(AuthContext);
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState("");
  
  const options = [ 
    "Select an Optional plan",
    "Photography",
    "Ceremony Music", 
    "Guitar Play",
    "Violin Play",
    "Plan for VIP persons (such as: distributing flowers)",
    "Vendor recommendations",
    "Videography",
    "Entertainment"
  ];

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };
  
  const handleBooking =  (event) => {
    event.preventDefault();
    const form = event.target;
    const phone = form.phone.value;
    const optionals = form.optionals.value;
    const eventDate = form.date.value;

    const booking = {
      picture: modal?.image_url,
      price: modal?.price,
      phone: phone,
      optionals: optionals,
      availability: '0',
      email: user?.email,
      product_id: modal?._id,
      event_name: modal?.name,
      event_Date: eventDate
    };
     addBooking(booking).then(res =>{
      console.log(res)
      router.push("/dashboard/myOrders");
     })
     .catch(error =>{
      console.log(error);
     })
    
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold"></h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              type="text"
              readOnly
              defaultValue={user?.email}
              className="input text-gray-800  w-full input-bordered "
            />

            <input
              name="name"
              type="text"
              defaultValue={modal?.name}
              readOnly
              className="input w-full text-gray-800 input-bordered"
            />
            <input
              name="date"
              type="date"
              className="input w-full text-gray-800 input-bordered"
            />
            <input
              name="name"
              type="text"
              defaultValue={modal?.price}
              readOnly
              className="input w-full text-gray-800 input-bordered"
            />

            <select 
              name="optionals" 
              value={selectedOption}
              onChange={handleSelectChange}
              className="input w-full text-gray-800 input-bordered" 
              >
                {options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
            </select>

            <input
              name="phone"
              type="number"
              placeholder="Phone Number"
              className="input text-gray-800 w-full input-bordered"
            />

            <br />

            <input
              className="btn bg-sky-500 hover:bg-sky-600 border-none w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
