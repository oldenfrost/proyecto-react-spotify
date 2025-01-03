export const searchTrack = async (isrc, accessToken) => {
    try {

        const response = await fetch(`https://spotify-be-b07j.onrender.com/spotify/track?isrc=${encodeURIComponent(isrc)}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                 'Authorization': `Bearer ${accessToken}`
            },

        });
        if(response.status >= 400 && response.status < 500){
            throw new Error("El código ISRC ingresado no está registrado. Por favor, verifica y vuelve a intentarlo.");
        }
        if(response.status >= 500){
            throw new Error("Se produjo un error al conectar con el servidor. Por favor, verifica la conexión e inténtalo nuevamente.");
        }
        else{
            const data = await response.json();
            return data;
        }

    }
    catch (error) {
        throw error;
    }
}