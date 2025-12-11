const API_URL = `http://172.20.10.6:8080/api/player/get-players-per-coach?coachId`;

export const getPlayersPerCoach = async (coachId) =>{
    try{
        const response = await fetch(`${API_URL}=${coachId}`);
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

const API_URL_PLAYER = `http://172.20.10.6:8080/api/player/get-player-by-id?playerId`;

export const getPlayerById = async (playerId) =>{
    try{
        const response = await fetch(`${API_URL_PLAYER}=${playerId}`);
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