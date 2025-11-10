const API_URL = `http://192.168.1.128:8080/api/coach/get-coaches-by-sport-id?sportId`;

export const getCoachesBySportId = async (sportId) =>{
    try{
        const response = await fetch(`${API_URL}=${sportId}`);
        if(!response.ok){
            throw new Error('Wrong request!');
        }

        console.log(response);

        const data = await response.json();
        return data;
    } catch(error){
        throw error;
    }
}