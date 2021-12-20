import React from "react";
import { Link } from "react-router-dom";

const CardTwoInRow = ({
    movie
}) => {

    const movieGenre = movie.genre

    return(
        <div className="col-6 col-sm-4 col-lg-6">
        <div className="card">
            <div className="card__cover">
                <img src={movie.imageUrl} alt="" />
                <Link to={`/details/${movie._id}`} className="card__play">
                    <i className="icon ion-ios-play"></i>
                </Link>
                {/* <span className="card__rate card__rate--green">7.1</span> */}
            </div>
            <div className="card__content">
                <h3 className="card__title"><Link to={`/details/${movie._id}`}>{movie.title}</Link></h3>
                <span className="card__category">
                {movieGenre.map(x => <Link to={`/catalog/category/${x.toLowerCase()}`}>{x}</Link>)}
                </span>
            </div>
        </div>
    </div>
    )
}

export default CardTwoInRow;