const url = "http://localhost:5000"

exports.login = async ({email, password}) => {
   
        let user = {
            email,
            password
        };
        
        return fetch((`${url}/auth/login`), {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, /',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        });
    

}

// exports.register = (userData) => User.create(userData);