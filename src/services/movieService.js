import { url } from "../constants/urlConstant";

exports.create = async ({title,description, year,duration,quality,age, country,genre, trailerUrl, imageUrl}) => {
   
    let movie = {
        title,
        description, 
        year,
        duration,
        quality,
        age, 
        country,
        genre, 
        trailerUrl, 
        imageUrl
    };
    
    let res = await fetch((`${url}/movies`), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(movie)
    });

    let jsonResult = await res.json();


    if(res.ok) {
        return jsonResult;
    } else {
        throw jsonResult;
    }

}