import { url } from "../constants/urlConstant";

export const login = async ({email, password}) => {

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
export const register = async ({name, email, password}) => {

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