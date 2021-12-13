import { url } from "../constants/urlConstant";

exports.login = async ({email, password}) => {
   
        let user = {
            email,
            password
        };
        
        let res = await fetch((`${url}/auth/login`), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        });

        let jsonResult = await res.json();


        if(res.ok) {
            return jsonResult;
        } else {
            throw jsonResult;
        }
    

}

// exports.register = (userData) => User.create(userData);

exports.register = async ({name, email, password}) => {
   
    let user = {
        name,
        email,
        password
    };
    
    let res = await fetch((`${url}/auth/register`), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    });

    let jsonResult = await res.json();


    if(res.ok) {
        return jsonResult;
    } else {
        throw jsonResult;
    }

}