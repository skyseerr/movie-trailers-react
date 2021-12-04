import { Link } from "react-router-dom";

import Filter from "../Filter/Filter";

const Catalog = () => {

    return(
      
    <div>
        
        <Filter />

		<div className="catalog">
			<div className="container">
				<div className="row row--grid">
					<div className="col-6 col-sm-4 col-md-3 col-xl-2">
						<div className="card">
							<div className="card__cover">
								<img src="img/covers/cover.jpg" alt="" />
								<Link to="details.html" className="card__play">
									<i className="icon ion-ios-play"></i>
								</Link>
								<span className="card__rate card__rate--green">8.4</span>
							</div>
							<div className="card__content">
								<h3 className="card__title"><Link to="details.html">I Dream in Another Language</Link></h3>
								<span className="card__category">
									<Link to="#">Action</Link>
									<Link to="#">Triler</Link>
								</span>
							</div>
						</div>
					</div>

					<div className="col-6 col-sm-4 col-md-3 col-xl-2">
						<div className="card">
							<div className="card__cover">
								<img src="img/covers/cover2.jpg" alt="" />
								<Link to="details.html" className="card__play">
									<i className="icon ion-ios-play"></i>
								</Link>
								<span className="card__rate card__rate--green">7.1</span>
							</div>
							<div className="card__content">
								<h3 className="card__title"><Link to="details.html">Benched</Link></h3>
								<span className="card__category">
									<Link to="#">Comedy</Link>
								</span>
							</div>
						</div>
					</div>

					<div className="col-6 col-sm-4 col-md-3 col-xl-2">
						<div className="card">
							<div className="card__cover">
								<img src="img/covers/cover3.jpg" alt="" />
								<Link to="details.html" className="card__play">
									<i className="icon ion-ios-play"></i>
								</Link>
								<span className="card__rate card__rate--red">6.3</span>
							</div>
							<div className="card__content">
								<h3 className="card__title"><Link to="details.html">Whitney</Link></h3>
								<span className="card__category">
									<Link to="#">Romance</Link>
									<Link to="#">Drama</Link>
									<Link to="#">Music</Link>
								</span>
							</div>
						</div>
					</div>

					<div className="col-6 col-sm-4 col-md-3 col-xl-2">
						<div className="card">
							<div className="card__cover">
								<img src="img/covers/cover4.jpg" alt="" />
								<Link to="details.html" className="card__play">
									<i className="icon ion-ios-play"></i>
								</Link>
								<span className="card__rate card__rate--yellow">6.9</span>
							</div>
							<div className="card__content">
								<h3 className="card__title"><Link to="details.html">Blindspotting</Link></h3>
								<span className="card__category">
									<Link to="#">Comedy</Link>
									<Link to="#">Drama</Link>
								</span>
							</div>
						</div>
					</div>

					<div className="col-6 col-sm-4 col-md-3 col-xl-2">
						<div className="card">
							<div className="card__cover">
								<img src="img/covers/cover5.jpg" alt="" />
								<Link to="details.html" className="card__play">
									<i className="icon ion-ios-play"></i>
								</Link>
								<span className="card__rate card__rate--green">8.4</span>
							</div>
							<div className="card__content">
								<h3 className="card__title"><Link to="details.html">I Dream in Another Language</Link></h3>
								<span className="card__category">
									<Link to="#">Action</Link>
									<Link to="#">Triler</Link>
								</span>
							</div>
						</div>
					</div>

					<div className="col-6 col-sm-4 col-md-3 col-xl-2">
						<div className="card">
							<div className="card__cover">
								<img src="img/covers/cover6.jpg" alt="" />
								<Link to="details.html" className="card__play">
									<i className="icon ion-ios-play"></i>
								</Link>
								<span className="card__rate card__rate--green">7.1</span>
							</div>
							<div className="card__content">
								<h3 className="card__title"><Link to="details.html">Benched</Link></h3>
								<span className="card__category">
									<Link to="#">Comedy</Link>
								</span>
							</div>
						</div>
					</div>

					<div className="col-6 col-sm-4 col-md-3 col-xl-2">
						<div className="card">
							<div className="card__cover">
								<img src="img/covers/cover7.jpg" alt="" />
								<Link to="details.html" className="card__play">
									<i className="icon ion-ios-play"></i>
								</Link>
								<span className="card__rate card__rate--green">7.1</span>
							</div>
							<div className="card__content">
								<h3 className="card__title"><Link to="details.html">Benched</Link></h3>
								<span className="card__category">
									<Link to="#">Comedy</Link>
								</span>
							</div>
						</div>
					</div>

					<div className="col-6 col-sm-4 col-md-3 col-xl-2">
						<div className="card">
							<div className="card__cover">
								<img src="img/covers/cover8.jpg" alt="" />
								<Link to="details.html" className="card__play">
									<i className="icon ion-ios-play"></i>
								</Link>
								<span className="card__rate card__rate--red">5.5</span>
							</div>
							<div className="card__content">
								<h3 className="card__title"><Link to="details.html">I Dream in Another Language</Link></h3>
								<span className="card__category">
									<Link to="#">Action</Link>
									<Link to="#">Triler</Link>
								</span>
							</div>
						</div>
					</div>

					<div className="col-6 col-sm-4 col-md-3 col-xl-2">
						<div className="card">
							<div className="card__cover">
								<img src="img/covers/cover9.jpg" alt="" />
								<Link to="details.html" className="card__play">
									<i className="icon ion-ios-play"></i>
								</Link>
								<span className="card__rate card__rate--yellow">6.7</span>
							</div>
							<div className="card__content">
								<h3 className="card__title"><Link to="details.html">Blindspotting</Link></h3>
								<span className="card__category">
									<Link to="#">Comedy</Link>
									<Link to="#">Drama</Link>
								</span>
							</div>
						</div>
					</div>

					<div className="col-6 col-sm-4 col-md-3 col-xl-2">
						<div className="card">
							<div className="card__cover">
								<img src="img/covers/cover10.jpg" alt="" />
								<Link to="details.html" className="card__play">
									<i className="icon ion-ios-play"></i>
								</Link>
								<span className="card__rate card__rate--red">5.6</span>
							</div>
							<div className="card__content">
								<h3 className="card__title"><Link to="details.html">Whitney</Link></h3>
								<span className="card__category">
									<Link to="#">Romance</Link>
									<Link to="#">Drama</Link>
									<Link to="#">Music</Link>
								</span>
							</div>
						</div>
					</div>

					<div className="col-6 col-sm-4 col-md-3 col-xl-2">
						<div className="card">
							<div className="card__cover">
								<img src="img/covers/cover11.jpg" alt="" />
								<Link to="details.html" className="card__play">
									<i className="icon ion-ios-play"></i>
								</Link>
								<span className="card__rate card__rate--green">9.2</span>
							</div>
							<div className="card__content">
								<h3 className="card__title"><Link to="details.html">Benched</Link></h3>
								<span className="card__category">
									<Link to="#">Comedy</Link>
								</span>
							</div>
						</div>
					</div>

					<div className="col-6 col-sm-4 col-md-3 col-xl-2">
						<div className="card">
							<div className="card__cover">
								<img src="img/covers/cover12.jpg" alt="" />
								<Link to="details.html" className="card__play">
									<i className="icon ion-ios-play"></i>
								</Link>
								<span className="card__rate card__rate--green">8.4</span>
							</div>
							<div className="card__content">
								<h3 className="card__title"><Link to="details.html">I Dream in Another Language</Link></h3>
								<span className="card__category">
									<Link to="#">Action</Link>
									<Link to="#">Triler</Link>
								</span>
							</div>
						</div>
					</div>

					<div className="col-6 col-sm-4 col-md-3 col-xl-2">
						<div className="card">
							<div className="card__cover">
								<img src="img/covers/cover13.jpg" alt="" />
								<Link to="details.html" className="card__play">
									<i className="icon ion-ios-play"></i>
								</Link>
								<span className="card__rate card__rate--green">8.0</span>
							</div>
							<div className="card__content">
								<h3 className="card__title"><Link to="details.html">I Dream in Another Language</Link></h3>
								<span className="card__category">
									<Link to="#">Action</Link>
									<Link to="#">Triler</Link>
								</span>
							</div>
						</div>
					</div>

					<div className="col-6 col-sm-4 col-md-3 col-xl-2">
						<div className="card">
							<div className="card__cover">
								<img src="img/covers/cover14.jpg" alt="" />
								<Link to="details.html" className="card__play">
									<i className="icon ion-ios-play"></i>
								</Link>
								<span className="card__rate card__rate--green">7.2</span>
							</div>
							<div className="card__content">
								<h3 className="card__title"><Link to="details.html">Benched</Link></h3>
								<span className="card__category">
									<Link to="#">Comedy</Link>
								</span>
							</div>
						</div>
					</div>

					<div className="col-6 col-sm-4 col-md-3 col-xl-2">
						<div className="card">
							<div className="card__cover">
								<img src="img/covers/cover15.jpg" alt="" />
								<Link to="details.html" className="card__play">
									<i className="icon ion-ios-play"></i>
								</Link>
								<span className="card__rate card__rate--yellow">5.9</span>
							</div>
							<div className="card__content">
								<h3 className="card__title"><Link to="details.html">Whitney</Link></h3>
								<span className="card__category">
									<Link to="#">Romance</Link>
									<Link to="#">Drama</Link>
									<Link to="#">Music</Link>
								</span>
							</div>
						</div>
					</div>

					<div className="col-6 col-sm-4 col-md-3 col-xl-2">
						<div className="card">
							<div className="card__cover">
								<img src="img/covers/cover16.jpg" alt="" />
								<Link to="details.html" className="card__play">
									<i className="icon ion-ios-play"></i>
								</Link>
								<span className="card__rate card__rate--green">8.3</span>
							</div>
							<div className="card__content">
								<h3 className="card__title"><Link to="details.html">Blindspotting</Link></h3>
								<span className="card__category">
									<Link to="#">Comedy</Link>
									<Link to="#">Drama</Link>
								</span>
							</div>
						</div>
					</div>

					<div className="col-6 col-sm-4 col-md-3 col-xl-2">
						<div className="card">
							<div className="card__cover">
								<img src="img/covers/cover17.jpg" alt="" />
								<Link to="details.html" className="card__play">
									<i className="icon ion-ios-play"></i>
								</Link>
								<span className="card__rate card__rate--green">8.0</span>
							</div>
							<div className="card__content">
								<h3 className="card__title"><Link to="details.html">I Dream in Another Language</Link></h3>
								<span className="card__category">
									<Link to="#">Action</Link>
									<Link to="#">Triler</Link>
								</span>
							</div>
						</div>
					</div>

					<div className="col-6 col-sm-4 col-md-3 col-xl-2">
						<div className="card">
							<div className="card__cover">
								<img src="img/covers/cover18.jpg" alt="" />
								<Link to="details.html" className="card__play">
									<i className="icon ion-ios-play"></i>
								</Link>
								<span className="card__rate card__rate--green">7.1</span>
							</div>
							<div className="card__content">
								<h3 className="card__title"><Link to="details.html">Benched</Link></h3>
								<span className="card__category">
									<Link to="#">Comedy</Link>
								</span>
							</div>
						</div>
					</div>

				</div>

				<div className="row">

					<div className="col-12">
						<button className="catalog__more" type="button">Load more</button>
					</div>

				</div>
			</div>
		</div>

	</div>
    )

}

export default Catalog;