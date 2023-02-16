export const blogData = async() => {
    const data = await fetch('/api/apiBlog')
    const json =await data.json();
    return json;
}
export async function addBlogData(formData){
    console.log(formData);
    try{
        const Options = {
            method : 'POST',
            headers : { 'Content-Type': "application/json"},
            body: JSON.stringify(formData)
        }
        
        const response = await fetch(`/api/apiBlog`, Options)
        const json = await response.json()

        return json;
    }catch(error){
        return error;
    }
}