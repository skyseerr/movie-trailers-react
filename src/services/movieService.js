import { url } from "../constants/urlConstant";
import constructAuthHeader from "../utils/tokenUtil";

const create = async ({
    title,
    description,
    year,
    duration,
    age,
    country,
    genre,
    trailerUrl,
    imageUrl
}, token) => {

    let movie = {
        title,
        description,
        year,
        duration,
        age,
        country,
        genre,
        trailerUrl,
        imageUrl
    };

    let res = await fetch((`${url}/create`), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': constructAuthHeader(token)

        },
        body: JSON.stringify(movie)
    });

    let jsonResult = await res.json();


    if (res.ok) {
        return jsonResult;
    } else {
        throw jsonResult;
    }

}

export default create;