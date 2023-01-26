export const getPhotoGallery = async() =>{
    const data = await fetch(`/api/allphoto`)
    const json = await data.json()
    return json
}