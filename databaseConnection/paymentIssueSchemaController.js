import paymentIssueSchemaModel from "../model/paymentSchema";


// post user credential when payment
export const postPaymentIssue= async(req, res)=> {
    try {
      const formData = req.body;
      if (!formData)
        return res.status(404).json({ error: "Form Data Not Provided...!" });
        paymentIssueSchemaModel.create(formData, function (err, data) {
        return res.status(200).json(data);
      });
    } catch (error) {
      return res.status(404).json({ error });
    }
  }