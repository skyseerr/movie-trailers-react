import { url } from "../constants/urlConstant";
import constructAuthHeader from "../utils/tokenUtil";

export const create = async ({
    title,
    description,
    year,
    duration,
    director,
    genre,
    trailerUrl,
    imageUrl
}, token) => {

    let movie = {
        title,
        description,
        year,
        duration,
        director,
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

export const edit = async ( 
    id,
{
    title,
    description,
    year,
    duration,
    director,
    genre,
    trailerUrl,
    imageUrl
}, token) => {

    let movie = {
        title,
        description,
        year,
        duration,
        director,
        genre,
        trailerUrl,
        imageUrl
    };

    let res = await fetch((`${url}/${id}/edit`), {
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

export const getAllMovies = async () => {    

    let res = await fetch((`${url}/movies`), {
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

export const getLastSix = async () => {    

    let res = await fetch((`${url}/lastsix`), {
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

export const getOne = async (id) => {    

    let res = await fetch((`${url}/${id}/details`), {
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

export const getLastFiveMine = async (id, token) => {    

    let res = await fetch((`${url}/my-movies/${id}`), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': constructAuthHeader(token)
        }
    });

    let jsonResult = await res.json();


    if(res.ok) {
        return jsonResult;
    } else {
        throw jsonResult;
    }
}

export const getAllMine = async (id, token) => {    

    let res = await fetch((`${url}/my-movies-all/${id}`), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': constructAuthHeader(token)
        }
    });

    let jsonResult = await res.json();


    if(res.ok) {
        return jsonResult;
    } else {
        throw jsonResult;
    }
}

export const deleteOne = async (id, token) => {
    
    let res = await fetch((`${url}/${id}/delete`), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': constructAuthHeader(token)
        },
    });

    let jsonResult = await res.json();


    if (res.ok) {
        return jsonResult;
    } else {
        throw jsonResult;
    }

}

export const getMoviesByParam = async (param) => {    

    let res = await fetch((`${url}/catalog/${param}`), {
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

export const getMoviesByCatery = async (categoryName) => {    

    let res = await fetch((`${url}/catalog/category/${categoryName}`), {
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

export const getLastSixByCategory = async (categoryName, movieId) => {    

    let res = await fetch((`${url}/catalog/category/${categoryName}/${movieId}`), {
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
