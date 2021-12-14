import Slider from "../Slider/Slider";
import Catalog from "../Catalog/Catalog";
import Premiere from "../Premiere/Premiere";

import "./Home.css";

const Home = () => {
  return (
    <>
    	<section className="section section--first section--bg" data-bg="img/section/section.jpg">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="section__wrap">
							<h1 className="section__title">Home</h1>
		
							<ul className="breadcrumb">
								<li className="breadcrumb__item breadcrumb__item--active">Home</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
    <section className="content">
      
      </section>
    </>
  );
};

export default Home;
