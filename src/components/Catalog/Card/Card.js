import { Link } from "react-router-dom";

import "./Card.css";

const Card = ({
    movie
}) => {

    const movieGenre = movie.genre
    return(
        <div className="col-6 col-sm-4 col-md-3 col-xl-2">
        <div className="card card-top">
            <div className="card__cover">
                <img src={movie.imageUrl} alt="" />
                <Link to={`/details/${movie._id}`} className="card__play">
                    <i className="icon ion-ios-play"></i>
                </Link>
                {/* <span className="card__rate card__rate--green">0</span> */}
            </div>
            <div className="card__content">
                <h3 className="card__title"><Link to={`/details/${movie._id}`}>{movie.title}</Link></h3>
                <span className="card__category">
                    {movieGenre.map(x => <Link to={`/catalog/category/${x.toLowerCase()}`}>{x}</Link>)}
                </span>
            </div>
        </div>
    </div>
    );

}

export default Card;