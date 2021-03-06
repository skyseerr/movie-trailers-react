import { useState, useEffect } from "react";

import Card from "../Catalog/Card/Card";
import Loader from "../Loader/Loader";

import { getLastSix } from "../../services/movieService";

const LastSix = () => {

	const [movies, setMovies] = useState([]);
	const [loader, setLoader] = useState(true);

	useEffect(() => {
		getLastSix()
		.then((result) => {
			setMovies(result);
			setLoader(false);
		});
	}, []);
	
  return (
    
	<section className="section">
      <div className="catalog">
        <div className="container">
			<h2 className="underline">Latest Movies</h2>
        	{
			loader
			? <Loader /> 
			: <div className="row row--grid">
            {movies.map((x) => (<Card key={x._id} movie={x} />))}
			</div>
			}
        </div>
      </div>
	</section>
  );
};

export default LastSix;
