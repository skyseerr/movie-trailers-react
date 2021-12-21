import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getMoviesByParam } from "../../services/movieService";

import Card from "../Catalog/Card/Card";

import Filter from "../Filter/Filter";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";

const Search = () => {

	const { param } = useParams()
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		getMoviesByParam(param)
		  .then(result =>{
			setMovies(result);
		  })
		  .catch(err=> {
			  console.log(err.error);
		  })

		}, [param]);

    return(
      <>
    	<div>
        
		<BreadCrumbs props={{"name" :"Catalog"}} />

        <Filter />

		<div className="catalog">
			<div className="container">
				<div className="row row--grid">

				{movies.map(x => <Card key={x._id} movie={x} />)}

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

export default Search;