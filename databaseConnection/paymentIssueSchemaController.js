import paymentIssueEventSchemaModel from "../model/paymentSchema";

export const getPaymentEvent = async (req, res) => {
  try {
    const booked = await paymentIssueEventSchemaModel.find({});
    if (!booked) return res.status(404).json({ error: "Data not Found" });
    res.status(200).json(booked)
  } catch (error) {
    res.status(404).json({ error: "Error white Fetching Data" });
  }
};
export const getPaymentSingle = async (req, res) => {
  try {
    const {paymentId} = req.query;
    console.log(paymentId)
    const filter = {userEmail : paymentId}
    await paymentIssueEventSchemaModel.countDocuments(filter)
    if(paymentId){
      const booked = await paymentIssueEventSchemaModel.find(filter);
      res.status(200).json(booked);
    }
    // res.status(404).json({ error: "Booking not Selected" });
  } catch (error) {
    res.status(404).json({ error: "Cannot get the Booked...!" });
  }
};
// post user credential when payment
export const postPaymentIssue= async(req, res)=> {
    try {
      const formData = req.body;
      if (!formData)
        return res.status(404).json({ error: "Form Data Not Provided...!" });
        paymentIssueEventSchemaModel.create(formData, function (err, data) {
        return res.status(200).json(data);
      });
    } catch (error) {
      return res.status(404).json({ error });
    }
  }

  export const updatePaymentRoadMap = async(req, res)=> {
    try {
      const { paymentId } = req.query;
      const formData = req.body;
      let doc = await paymentIssueEventSchemaModel.findByIdAndUpdate(paymentId, formData, {
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