import photoGallery from "../model/gallerySchema";

export const getPhotoGallery = async (req, res) =>{
    try {
        const cate = await photoGallery.find({});
        if(!cate){
            return res.status(404).json({error: 'data not found'})
        }
        res.status(200).json(cate);
    } catch (error) {
        return res.status(404).json({error: "error while fetching data"})
    }
}