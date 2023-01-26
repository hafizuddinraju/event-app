export const getSubCategory = async () => {
    const data = await fetch(`/api/subcategory`)
    const json = await data.json()
    return json
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