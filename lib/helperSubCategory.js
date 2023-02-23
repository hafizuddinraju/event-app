export const getSubCategory = async () => {
    const data = await fetch(`/api/subcategory`)
    const json = await data.json()
    return json
}
export async function postEvent(formData){
    console.log(formData);
    try{
        const Options = {
            method : 'POST',
            headers : { 'Content-Type': "application/json"},
            body: JSON.stringify(formData)
        }
        
        const response = await fetch(`/api/subcategory`, Options)
        const json = await response.json()

        return json;
    }catch(error){
        return error;
    }
}

export const getSingleSubCategory = async (subcatId) => {
    const response = await fetch(`/api/subcategory/${subcatId}`);
    const dataCategory = await response.json()

    if (dataCategory) return dataCategory;

}
export const getEvent = async (eventId) => {
    const response = await fetch(`/api/singleevent/${eventId}`);
    const dataCategory = await response.json()

    if (dataCategory) return dataCategory;

}
export const updateSubCategory = async ( eventId , formData ) =>{
    try {
        const Options = {
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(formData)
        }
        const response = await fetch(`/api/singleevent/${eventId}`,Options);
        const json = await response.json()
        return json ;
    } catch (error) {
        return error ;
    }
}
export const updateSubAvailability = async (subcatId,formData) =>{
    try {
        const Options = {
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(formData)
        }
        const response = await fetch(`/api/subcategory/${subcatId}`,Options);
        const json = await response.json()
        return json ;
    } catch (error) {
        return error ;
    }
}