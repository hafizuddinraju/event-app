export const getPhotoGallery = async() =>{
    const data = await fetch(`http://localhost:3000/api/gallery`)
    const json = await data.json()
    return json
}