import bookingsData from "../model/bookingSchema";




export const getBookings = async (req, res) => {
  try {
    const booked = await bookingsData.find({});
    if (!booked) return res.status(404).json({ error: "Data not Found" });
    res.status(200).json(booked)
  } catch (error) {
    res.status(404).json({ error: "Error white Fetching Data" });
  }
};
export const getBook = async (req, res) => {
  try {
    const {bookingId} = req.query;
    const filter = {email : bookingId}
    await bookingsData.countDocuments(filter)
    if(bookingId){
      const booked = await bookingsData.find(filter);
      res.status(200).json(booked);
    }
    // res.status(404).json({ error: "Booking not Selected" });
  } catch (error) {
    res.status(404).json({ error: "Cannot get the Booked...!" });
  }
};

export const postBooking= async(req, res)=> {
  try {
    const formData = req.body;
    if (!formData)
      return res.status(404).json({ error: "Form Data Not Provided...!" });
      bookingsData.create(formData, function (err, data) {
      return res.status(200).json(data);
    });
  } catch (error) {
    return res.status(404).json({ error });
  }
}

// GET Single Booking : http://localhost:3000/api/users/userId
export const getSingleBookingForDetails = async(req , res)=>{
  try {
      const {bookingId} = req.query ;
      if(bookingId){
          const singleUser = await bookingsData.findById(bookingId)
          return res.status(200).json(singleUser)
      }
      res.status(404).json({error:"single user not find"})
  } catch (error) {
      res.status(404).json({error:"Error while fetching by id"})
  }
}
export const getSingleBookingPayment = async(req , res)=>{
  try {
      const {paymentId} = req.query ;
      if(paymentId){
          const singleUser = await bookingsData.findById(paymentId)
          return res.status(200).json(singleUser)
      }
      res.status(404).json({error:"single user not find"})
  } catch (error) {
      res.status(404).json({error:"Error while fetching by id"})
  }
}

// put : http://localhost:3000/api/users/1
export const updateBooking = async(req, res)=> {
  try {
    const { paymentId } = req.query;
    const formData = req.body;
    let doc = await bookingsData.findByIdAndUpdate(paymentId, formData, {
        new:true,
        upsert:true
    })
   if(doc){
    res.status(200).json(doc);
   }
   
  } catch (error) {
    res.status(404).json({ error: "Error While Updating the Data...!" });
  }
}

// delete : http://localhost:3000/api/users/1
export async function deleteBooking(req, res) {
  try {
    const { bookingId } = req.query;

    if (bookingId) {
      const booked = await bookingsData.findByIdAndDelete(bookingId);
      return res.status(200).json(booked);
    }

    res.status(404).json({ error: "Booking Not Selected...!" });
  } catch (error) {
    res.status(404).json({ error: "Error While Deleting the Booking...!" });
  }
}
