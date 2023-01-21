import axios from "axios"

export const getCategory = async() =>{
    const data = await fetch(`/api/categories`)
    const json = await data.json()
    return json
}
export const getSingleCategory = async (categoryId) => {
    const response = await axios.get(`/api/categories/${categoryId}`);
    if(response.status !== 200){
        return new Error('Unable to fetch data');

    }
    const dataCategory = await response.data;

    return dataCategory;
    
}
