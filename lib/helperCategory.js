export const getCategory = async() =>{
    const data = await fetch(`http://localhost:3000/api/categories`)
    const json = await data.json()
    return json
}
