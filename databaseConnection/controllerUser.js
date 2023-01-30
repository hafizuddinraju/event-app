import userInfo from "../model/userSchema";

export const getUsers = async (req, res) => {
  try {
    const users = await userInfo.find({});
    if (!users) return res.status(404).json({ error: "Data not Found" });
    res.status(200).json(users)
  } catch (error) {
    res.status(404).json({ error: "Error white Fetching Data" });
  }
};
export const getUser = async (req, res) => {
  try {
    const {userId} = req.query;
    if(userId){
      const user = await userInfo.findById(userId);
      res.status(200).json(user);
    }
    res.status(404).json({ error: "User not Selected" });
  } catch (error) {
    res.status(404).json({ error: "Cannot get the User...!" });
  }
};

export const postUser = async(req, res)=> {
  try {
    const formData = req.body;
    console.log(formData);
    const {name, email, role} = formData;
    if (!formData)
      return res.status(404).json({ error: "Form Data Not Provided...!" });
    userInfo.create({ name, email, role}, function (err, data) {
      return res.status(200).json(data);
    });
  } catch (error) {
    return res.status(404).json({ error });
  }
}

// put : http://localhost:3000/api/users/1
export const putUser = async(req, res)=> {
  try {
    const { emailId } = req.query;
    const formData = req.body;
    let filter = {email : emailId}
    await userInfo.countDocuments(filter)
    let doc = await userInfo.findOneAndUpdate(filter, formData, {
        new:true,
        upsert:true
    })
    res.status(200).json(doc);
  } catch (error) {
    res.status(404).json({ error: "Error While Updating the Data...!" });
  }
}

// delete : http://localhost:3000/api/users/1
export async function deleteUser(req, res) {
  try {
    const { emailId } = req.query;

    if (emailId) {
      const user = await userInfo.findByIdAndDelete(emailId);
      return res.status(200).json(user);
    }

    res.status(404).json({ error: "User Not Selected...!" });
  } catch (error) {
    res.status(404).json({ error: "Error While Deleting the User...!" });
  }
}
