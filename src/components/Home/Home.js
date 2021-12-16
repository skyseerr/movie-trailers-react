
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";

import "./Home.css";

import LatestMovies from "../LatestMovies/LatestMovies";

const Home = () => {
  return (
    <>
	      <BreadCrumbs props={{"name" :"Home"}} />
        <LatestMovies />
    </>
  );
};

export default Home;
