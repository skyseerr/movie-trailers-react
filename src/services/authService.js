// import bcrypt from "bcryptjs";
import { url } from "../constants/urlConstant";

// const salt = bcrypt.genSaltSync(10)

// function cryptPassword(password) {
//     return bcrypt.hashSync(password, salt)
// };

export const login = async ({email, password}) => {

    // let hashedPass = cryptPassword(password);

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

    // let hashedPass = cryptPassword(password);
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