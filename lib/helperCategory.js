export const getCategory = async() =>{
    const data = await fetch(`/api/categories`)
    const json = await data.json()
    return json
}
