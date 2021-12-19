import { useState, useEffect, useContext } from "react";

import { getMoviesByCatery } from "../../../../services/movieService";
import CardTwoInRow from "../YouMayAlsoLike/CardTwoInRow/CardTwoInRow";
import "../YouMayAlsoLike/YouMayAlsoLike.css";


const YouMayAlsoLike = ({props}) => {
    
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        
        getMoviesByCatery(props.props[0])
        .then(result => {
            setMovies(result)
        })
        .catch(err=> {
            console.log(err.error);
        })

    },[props.props])

 
    
    return(
        <div className="row row--grid">
            <div className="col-12">
                <h2 className="section__title section__title--sidebar">You may also like...</h2>
            </div>

            {movies.map((x) => (<CardTwoInRow movie={x} />))}

         </div>
    )

}


export default YouMayAlsoLike;