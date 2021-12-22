import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCookies } from 'react-cookie';

import { getAllMine } from "../../../services/movieService";

import Card from "../../Catalog/Card/Card"

import Filter from "../../Filter/Filter";
import BreadCrumbs from "../../BreadCrumbs/BreadCrumbs";

const MyMoviesAll = () => {

	const { userId } = useParams()
	const [movies, setMovies] = useState([]);
    const [cookies, setCookie, removeCookie] = useCookies(['jwtToken']);


	useEffect(() => {
		getAllMine(userId, cookies['jwtToken'])
		  .then(result =>{
			setMovies(result);
		  })

		}, [userId]);

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

export default MyMoviesAll;