import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { getMoviesByCatery } from "../../../services/movieService";
import Card from "../Card/Card";

// import Filter from "../Filter/Filter";
import BreadCrumbs from "../../BreadCrumbs/BreadCrumbs";

const Category = () => {

    const params = useParams()
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		getMoviesByCatery(params.categoryName)
		  .then(result =>{
			setMovies(result)
		  })
		  .catch(err=> {
			  console.log(err.error);
		  })

		}, [params]);

    return(
      <>
    	<div>
        
		<BreadCrumbs props={{"name" :"Catalog", "category" : "category", "categoryName" : params}} />

        {/* <Filter /> */}
        <section className="section">
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
        </section>
	</div>
	</>
    )

}

export default Category;