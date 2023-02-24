import subCategories from "../model/categoryDataSchema";

export const getSubCategory = async (req, res) => {
    try {
        const cate = await subCategories.find({});
        if (!cate) {
            return res.status(404).json({ error: 'data not found' })
        }
        res.status(200).json(cate);
    } catch (error) {
        return res.status(404).json({ error: "error while fetching data" })
    }
}

export const getSingleSubCategory = async (req, res) => {
    try {
        const { subcatId } = req.query;
        const cate = await subCategories.find({});
        const filterData = cate.filter(cat => cat.code === subcatId)
        res.status(200).json(filterData)

    } catch (error) { 
        res.status(404).json({ error: "Cannot get the Category...!" });
    }
};

export const getEvent = async (req, res) => {
    try {
        const { eventId } = req.query;

        if (eventId) {
            const cate = await subCategories.findById(eventId);

            res.status(200).json(cate);
        }
        // res.status(404).json({ error: "Category not Selected" });
    } catch (error) {
        res.status(404).json({ error: "Cannot get the Category...!" });
    }
};
export const postEvent= async(req, res)=> {
    try {
      const formData = req.body;
      if (!formData)
        return res.status(404).json({ error: "Form Data Not Provided...!" });
        subCategories.create(formData, function (err, data) {
        return res.status(200).json(data);
      });
    } catch (error) {
      return res.status(404).json({ error });
    }
  }

  export const updateSubCategory = async(req, res)=> {
    try {
      const { eventId } = req.query;
      const formData = req.body;
      let doc = await subCategories.findByIdAndUpdate(eventId, formData, {
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
  export const updateSubAvailability = async(req, res)=> {
    try {
      
        const { subcatId } = req.query;
        const formData = req.body;

      let doc = await subCategories.findByIdAndUpdate(subcatId, formData, {
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