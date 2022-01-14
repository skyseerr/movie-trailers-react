import { useState, useEffect } from "react";

import { getAllMovies } from "../../services/movieService";
import Card from "./Card/Card";
import Loader from "../Loader/Loader";

import Filter from "../Filter/Filter";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";

const Catalog = () => {

	const [movies, setMovies] = useState([]);
	const [loader, setLoader] = useState(true);

	useEffect(() => {
		getAllMovies()
		  .then(result =>{
			setMovies(result);
			setLoader(false);
		  })
		}, []);

    return(
      <>
    	<div>
        
		<BreadCrumbs props={{"name" :"Catalog"}} />

        <Filter />

		<div className="catalog">
			<div className="container">
				{
					loader 
					? <Loader />
					: <div className="row row--grid">
					{movies.map(x => <Card key={x._id} movie={x} />)}
					</div>

				}

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