export const blogData = async() => {
    const data = await fetch('/api/apiBlog')
    const json =await data.json();
    return json;
}