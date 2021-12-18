import { url } from "../constants/urlConstant";
import constructAuthHeader from "../utils/tokenUtil";

export const create = async ({ title, review }, token, movieId) => {

    let comment = { title, review };

    let res = await fetch((`${url}/comment/${movieId}`), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': constructAuthHeader(token)

        },
        body: JSON.stringify(comment)
    });

    let jsonResult = await res.json();


    if (res.ok) {
        return jsonResult;
    } else {
        throw jsonResult;
    }

}

export const getAllComments = async (movieId) => {    

    let res = await fetch((`${url}/${movieId}/comments`), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    let jsonResult = await res.json();


    if(res.ok) {
        return jsonResult;
    } else {
        throw jsonResult;
    }
}