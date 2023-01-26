// import category from '../model/categorySchema';
import category from '../model/categorySchema'

export const getCategory = async (req, res) => {
  try {
    const cate = await category.find({});
    if (!cate) {
      return res.status(404).json({ error: 'data not found' })
    }
    res.status(200).json(cate);
  } catch (error) {
    return res.status(404).json({ error: "error while fetching data" })
  }
}
export const getSingleCategory = async (req, res) => {
  try {
    const { categoryId } = req.query;

    if (categoryId) {
      const cate = await category.findById(categoryId);

      res.status(200).json(cate);
    }
    // res.status(404).json({ error: "Category not Selected" });
  } catch (error) {
    res.status(404).json({ error: "Cannot get the Category...!" });
  }
};

// mj foul code
// export const getCateName = async (req, res) => {
//   try {
//     const cat = category.find({}, { cate_name: 1 }, (err, data) => {
//       // if (err) {
//       //   console.log(err);
//       // } else {
//       //   console.log(data);
//       // }
//       res.status(200).json(cat);
//     })
//   } catch (error) {
//     res.status(404).json({ error: "Cannot get the Category Name" });
//   }
// };