import { useState, useEffect, useContext } from "react";

import { getLastSixByCategory } from "../../../../services/movieService";
import CardTwoInRow from "../YouMayAlsoLike/CardTwoInRow/CardTwoInRow";
import "../YouMayAlsoLike/YouMayAlsoLike.css";


const YouMayAlsoLike = ({props}) => {
    
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        
        getLastSixByCategory(props.genre[0], props.movieId)
        .then(result => {
            setMovies(result)
        })

    },[props.genre[0]])

 
    
    return(
        <div className="row row--grid">
            <div className="col-12">
                <h2 className="section__title section__title--sidebar">You may also like...</h2>
            </div>

            {movies.map((x) => (<CardTwoInRow key={x._id} movie={x} />))}

         </div>
    )

}


export default YouMayAlsoLike;