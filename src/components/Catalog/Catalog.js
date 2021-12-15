import { useState, useEffect } from "react";

import { getAllMovies } from "../../services/movieService";
import Card from "./Card/Card";

import Filter from "../Filter/Filter";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";

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
        
		<BreadCrumbs props={{"name" :"Catalog"}} />

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