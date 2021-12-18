import { Link } from "react-router-dom";

const MyMovies = ({movie}) => {

    return(
        <>
        <tr>
        	<td>
        		<div className="main__table-text"><Link to={`/details/${movie._id}`}>{movie.title}</Link></div>
        	</td>
        	<td>
        		<div className="main__table-text">{movie.year}</div>
        	</td>
        	<td>
        		<div className="main__table-text main__table-text--rate"><i className="icon ion-ios-star"></i> 0</div>
        	</td>
        </tr>
        </>
    )
}

export default MyMovies;