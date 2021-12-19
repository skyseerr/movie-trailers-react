import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useCookies } from 'react-cookie';
import Youtube from "./Youtube/Youtube";

import "../Details/Details.css";

import { getOne } from "../../../services/movieService";
import { deleteOne } from "../../../services/movieService";
import { AuthContext } from "../../../contexts/AuthContext";
import Comments from "./Commnets/Comments";


const Details = () => {

  const navigate = useNavigate()
	const [cookies, setCookie, removeCookie] = useCookies(['jwtToken']);
  const { user } = useContext(AuthContext);
	let { movieId } = useParams();
	const [movie, setMovie] = useState([]);
	const [trailerUrl, setTrailerUrl] = useState();
  const [genre, setGenre] = useState([]);

	useEffect(() => {
		getOne(movieId)
		  .then(result =>{
      setTrailerUrl(result.trailerUrl)
			setMovie(result);
			setGenre(result.genre);
		  })
		  .catch(err=> {
			  console.log(err.error);
		  })
		}, [movieId]);


  const onDeleteHendler = () => {

    const movieId = movie._id;
    const token = cookies['jwtToken'];

    try {
      deleteOne(movieId)
      navigate('/')
    } catch (error) {
      console.log(error);
    }

    
  }

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
                      <span className="card__rate card__rate--green">0</span>
                    </div>

                  </div>

                  <div className="col-12 col-md-8 col-lg-9 col-xl-7">
                    <div className="card__content">
                      <ul className="card__meta">
                        <li>
                          <span>Director:</span> {movie.director}
                        </li>
                        <li>
                          <span>Genre:</span>
                            {genre.map(x => <Link to={`/catalog/category/${x.toLowerCase()}`}>{x}</Link>)}

                        </li>
                        <li>
                          <span>Release year:</span> {movie.year}
                        </li>
                        <li>
                          <span>Running time:</span> {movie.duration} min
                        </li>
                      </ul>


                      <div className="row-btn">
                        {((user._id === movie.owner )
                         
                        ? <>
                            <Link to={`/edit/${movie._id}`}><button className="form__btn">Edit</button></Link>
                            <button className="form__btn " onClick={onDeleteHendler}>Delete</button>
                         </>
                        :
                        <div class="comments__rate">
                          <button type="button"><i class="icon ion-md-thumbs-up"></i></button>
                          <button type="button"><i class="icon ion-md-thumbs-down"></i></button>
                        </div>  
                        )
                        }
                      </div>
                      
                      <div className="row-btn">
                    
                    

                          </div>
                      <div className="card__description">
						                {movie.description}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-xl-6">
                <Youtube param={trailerUrl}/>
            </div>
          </div>
        </div>
      </section>

      <Comments props={genre} />
    </>
  );
};

export default Details;
