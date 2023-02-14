// get custom event 
export const getCustomEvent = async () =>{
    const response = await fetch('/api/addcustomevent')
        const json = await response.json();
        if(json) return json ;
        
}

// get custom event 

export const getRequestEventCustomEvent = async (customId) => {
    const response = await fetch(`/api/addcustomevent/${customId}`);
    const dataCategory = await response.json()

    if(dataCategory) return dataCategory;
    
}

// delete a custom event
export async function deleteEventRequest(customId){
    const Options = {
        method : 'DELETE',
        headers : { 'Content-Type': "application/json"},
    }

    const response = await fetch(`/api/addcustomevent/${customId}`, Options)
    const json = await response.json()
    return json;
}


// add a custom event 
export const addCustomEvent = async(formData) =>{
    try {
        const options = {
            method: "POST",
            headers: {
                "content-type":"application/json"
            },
            body:JSON.stringify(formData)
        }
        const response = await fetch('/api/addcustomevent', options)
        const json = await response.json();
        return json ;
    } catch (error) {
            return error ;
    }
}

// update event status or data
export const updateCustomEventData = async(customId, userData) =>{
    try{
        const options = {
            method : "PUT",
            headers: {
                "Content-type":"application/json"
            },
            body:JSON.stringify(userData)
        };
        const response = await fetch(`/api/addcustomevent/${customId}`,options);
        const json = await response.json();
        return json ;
    }
    catch(error){
        return error
    }
}