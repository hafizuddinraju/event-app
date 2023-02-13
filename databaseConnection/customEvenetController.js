import customEventModel from "../model/customEventSchema";

// get custom event from user for admin dashboard
export const getCustomEvent = async ( req , res ) =>{
   try {
    const events = await customEventModel.find({})
    if(!events)return res.status(404).status({error:"event not found"});
     res.status(200).json(events);
   } catch (error) {
    res.status(400).json({error:"error while fetching data"});
   }
}

// get login user event 
export const getRequestEvent = async (req, res) => {
    try {
      const {customId} = req.query;
      const filter = {email : customId}
      await customEventModel.countDocuments(filter)
      if(customId){
        const booked = await customEventModel.find(filter);
        res.status(200).json(booked);
      }
      // res.status(404).json({ error: "Booking not Selected" });
    } catch (error) {
      res.status(404).json({ error: "Cannot get the Booked...!" });
    }
  };


// post a custom event from user
export const addCustomEvent = async(req ,res) =>{
    try {
        const formData = req.body ; 
        if(Object.keys(formData) == 0)return res.status(401).json({error:"data input is not valid"});
        customEventModel.create(formData , (err , data)=>{
            res.status(200).json(data);
        })
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}

// update single event information form user and admin
export const updateCustomEventData = async(req, res) =>{
  try {
    const {customId} = req.query ;
    const formData = req.body ;
    if(customId && formData){
      const eventStatus = await customEventModel.findByIdAndUpdate(customId, formData);
      res.status(200).json(eventStatus);
    }
    res.status(404).json({error: "Data not updated"});
  } catch (error) {
    res.status(401).json({error:"Error While update data"})
  }
}

// delete : http://localhost:3000/api/requseted/1
export async function deleteEventRequest(req, res) {
    try {
      const { customId } = req.query;
      if (customId) {
        const booked = await customEventModel.findByIdAndDelete(customId);
        return res.status(200).json(booked);
      }
  
      res.status(404).json({ error: "Booking Not Selected...!" });
    } catch (error) {
      res.status(404).json({ error: "Error While Deleting the Booking...!" });
    }
  }