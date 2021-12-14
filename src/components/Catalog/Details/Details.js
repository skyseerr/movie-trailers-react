import { useState, useEffect } from "react";

import { useParams, Link } from "react-router-dom";

import { getOne } from "../../../services/movieService";

const Details = () => {

	let { movieId } = useParams();
	
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		getOne(movieId)
		  .then(result =>{
			setMovie(result);
		  })
		  .catch(err=> {
			  console.log(err.error);
		  })
		}, []);

  return (
    <>
      <section className="section section--details">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="section__title section__title--mb">
                {movie.title}
              </h1>
            </div>

            <div className="col-12 col-xl-6">
              <div className="card card--details">
                <div className="row">
                  <div className="col-12 col-sm-5 col-md-4 col-lg-3 col-xl-5">
                    <div className="card__cover">
                      <img src={movie.imageUrl} alt="" />
                      <span className="card__rate card__rate--green">8.4</span>
                    </div>
                    <a
                      href="http://www.youtube.com/watch?v=0O2aH4XLbto"
                      className="card__trailer"
                    >
                      <i className="icon ion-ios-play-circle"></i> Watch trailer
                    </a>
                  </div>

                  <div className="col-12 col-md-8 col-lg-9 col-xl-7">
                    <div className="card__content">
                      <ul className="card__meta">
                        <li>
                          <span>Director:</span> Vince Gilligan
                        </li>
                        <li>
                          <span>Genre:</span> 
						  {movie.genre}
						  {/* <a href="#">Action</a>
                          <a href="#">Triler</a> */}
                        </li>
                        <li>
                          <span>Release year:</span> {movie.year}
                        </li>
                        <li>
                          <span>Running time:</span> {movie.duration} min
                        </li>
                      </ul>
                      <div className="card__description">
						  {movie.description}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-xl-6">
              <iframe
                width="560"
                height="315"
                src={movie.trailerUrl}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
