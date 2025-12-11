const API_URL = `http://172.20.10.6:8080/api/team/get-teams-with-average-player-age?sportId`;

export const getTeamsAndPlayersAverage = async (sportId) =>{
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