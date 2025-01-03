export const loginUser = async (username, password) => {
    try {

        const response = await fetch('https://spotify-be-b07j.onrender.com/public/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, password}),
        });
    
      
        if(response.status !== 200){
            throw new Error("Las credenciales ingresadas no son correctas. Por favor, verifica tu nombre de usuario y contraseña e inténtalo nuevamente.");
        }
        else{
            const data = await response.json();
            const userData = {
                username: data.username,
                refreshToken: data.refreshToken,
                accessToken: data.accessToken,
                idToken: data.idToken
            };
            sessionStorage.setItem("dataUser", JSON.stringify(userData));
            return data;
        }

    }
    catch (error) {
        throw error;
    }
}