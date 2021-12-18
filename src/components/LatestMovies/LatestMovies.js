import { useState, useEffect } from "react";

import Card from "../Catalog/Card/Card";

import { getLastSix } from "../../services/movieService";

const LastSix = () => {

	const [movies, setMovies] = useState([]);

	useEffect(() => {
		getLastSix()
		.then((result) => {
			setMovies(result);
			console.log(`mounted`);
		})
		.catch((err) => {
			console.log(err.error);
		});
	}, []);
	
  return (
    
	<section className="section">
      <div className="catalog">
        <div className="container">
			<h2 class="underline">Latest Movies</h2>
        	<div className="row row--grid">
            {movies.map((x) => (<Card movie={x} />))}
          	</div>
        </div>
      </div>
	</section>
  );
};

export default LastSix;
