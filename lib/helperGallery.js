export const getPhotoGallery = async() =>{
    const data = await fetch(`/api/gallery`)
    const json = await data.json()
    return json
}