
 // pentru hotspot trb sa iau ip din cmd HOTSPOT_URL = `http://172.20.10.6:8080/api/sport/get-all-sports`
const API_URL = `http://192.168.1.128:8080/api/sport/get-all-sports`;

export const getSports = async () =>{
    try{
        const response = await fetch(`${API_URL}`);
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