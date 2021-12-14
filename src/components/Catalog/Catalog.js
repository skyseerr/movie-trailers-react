import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { getAllMovies } from "../../services/movieService";
import Card from "./Card/Card";

import Filter from "../Filter/Filter";

const Catalog = () => {

	const [movies, setMovies] = useState([]);

	useEffect(() => {
		getAllMovies()
		  .then(result =>{
			setMovies(result);
		  })
		  .catch(err=> {
			  console.log(err.error);
		  })
		}, []);

    return(
      <>
    	<div>
			<section className="section section--first section--bg" data-bg="img/section/section.jpg">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="section__wrap">
							<h1 className="section__title">Catalog</h1>
		
							<ul className="breadcrumb">
								<li className="breadcrumb__item"><Link to={"/"}>Home</Link></li>
								<li className="breadcrumb__item breadcrumb__item--active">Catalog</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
        
        <Filter />

		<div className="catalog">
			<div className="container">
				<div className="row row--grid">

				{movies.map(x => <Card movie={x} />)}

				</div>

				{/* <div className="row">

					<div className="col-12">
						<button className="catalog__more" type="button">Load more</button>
					</div>

				</div> */}
			</div>
		</div>

	</div>
	</>
    )

}

export default Catalog;