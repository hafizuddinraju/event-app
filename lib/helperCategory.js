export const getCategory = async() =>{
    const data = await fetch(`/api/categories`)
    const json = await data.json()
    return json
}
export const getSingleCategory = async (categoryId) => {
    const response = await fetch(`/api/categories/${categoryId}`);
    const dataCategory = await response.json()

    if(dataCategory) return dataCategory;
    
}
