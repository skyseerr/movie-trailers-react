import { Link } from "react-router-dom";

const Slider = () => {

    return (
        <section className="home home--bg">
		<div className="container">
			<div className="row">
				<div className="col-12">
					<h1 className="home__title"><b>NEW ITEMS</b> OF THIS SEASON</h1>

					<button className="home__nav home__nav--prev" type="button">
						<i className="icon ion-ios-arrow-round-back"></i>
					</button>
					<button className="home__nav home__nav--next" type="button">
						<i className="icon ion-ios-arrow-round-forward"></i>
					</button>
				</div>

				<div className="col-12">
					<div className="owl-carousel home__carousel home__carousel--default">
						<div className="card card--big">
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

						<div className="card card--big">
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

						<div className="card card--big">
							<div className="card__cover">
								<img src="img/covers/cover3.jpg" alt="" />
								<Link to="details.html" className="card__play">
									<i className="icon ion-ios-play"></i>
								</Link>
								<span className="card__rate card__rate--green">7.9</span>
							</div>
							<div className="card__content">
								<h3 className="card__title"><Link to="details.html">Whitney</Link></h3>
								<span className="card__category">
									<Link to="#">Romance</Link>
									<Link to="#">Drama</Link>
								</span>
							</div>
						</div>

						<div className="card card--big">
							<div className="card__cover">
								<img src="img/covers/cover4.jpg" alt="" />
								<Link to="details.html" className="card__play">
									<i className="icon ion-ios-play"></i>
								</Link>
								<span className="card__rate card__rate--yellow">6.8</span>
							</div>
							<div className="card__content">
								<h3 className="card__title"><Link to="details.html">Blindspotting</Link></h3>
								<span className="card__category">
									<Link to="#">Comedy</Link>
									<Link to="#">Drama</Link>
								</span>
							</div>
						</div>

						<div className="card card--big">
							<div className="card__cover">
								<img src="img/covers/cover5.jpg" alt="" />
								<Link to="details.html" className="card__play">
									<i className="icon ion-ios-play"></i>
								</Link>
								<span className="card__rate card__rate--yellow">6.2</span>
							</div>
							<div className="card__content">
								<h3 className="card__title"><Link to="details.html">Blindspotting</Link></h3>
								<span className="card__category">
									<Link to="#">Comedy</Link>
									<Link to="#">Drama</Link>
								</span>
							</div>
						</div>

						<div className="card card--big">
							<div className="card__cover">
								<img src="img/covers/cover6.jpg" alt="" />
								<Link to="details.html" className="card__play">
									<i className="icon ion-ios-play"></i>
								</Link>
								<span className="card__rate card__rate--red">5.3</span>
							</div>
							<div className="card__content">
								<h3 className="card__title"><Link to="details.html">I Dream in Another Language</Link></h3>
								<span className="card__category">
									<Link to="#">Action</Link>
									<Link to="#">Triler</Link>
								</span>
							</div>
						</div>

						<div className="card card--big">
							<div className="card__cover">
								<img src="img/covers/cover7.jpg" alt="" />
								<Link to="details.html" className="card__play">
									<i className="icon ion-ios-play"></i>
								</Link>
								<span className="card__rate card__rate--red">5.9</span>
							</div>
							<div className="card__content">
								<h3 className="card__title"><Link to="details.html">Benched</Link></h3>
								<span className="card__category">
									<Link to="#">Comedy</Link>
								</span>
							</div>
						</div>

						<div className="card card--big">
							<div className="card__cover">
								<img src="img/covers/cover8.jpg" alt="" />
								<Link to="details.html" className="card__play">
									<i className="icon ion-ios-play"></i>
								</Link>
								<span className="card__rate card__rate--green">9.1</span>
							</div>
							<div className="card__content">
								<h3 className="card__title"><Link to="details.html">Whitney</Link></h3>
								<span className="card__category">
									<Link to="#">Romance</Link>
									<Link to="#">Drama</Link>
								</span>
							</div>
						</div>

						<div className="card card--big">
							<div className="card__cover">
								<img src="img/covers/cover9.jpg" alt="" />
								<Link to="details.html" className="card__play">
									<i className="icon ion-ios-play"></i>
								</Link>
								<span className="card__rate card__rate--yellow">6.6</span>
							</div>
							<div className="card__content">
								<h3 className="card__title"><Link to="details.html">Blindspotting</Link></h3>
								<span className="card__category">
									<Link to="#">Comedy</Link>
									<Link to="#">Drama</Link>
								</span>
							</div>
						</div>

						<div className="card card--big">
							<div className="card__cover">
								<img src="img/covers/cover10.jpg" alt="" />
								<Link to="details.html" className="card__play">
									<i className="icon ion-ios-play"></i>
								</Link>
								<span className="card__rate card__rate--green">8.1</span>
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
				</div>
			</div>
		</div>
	</section>
    )
}

export default Slider;