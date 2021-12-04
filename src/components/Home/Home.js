import Slider from "./Slider/Slider";
import Filter from "./Filter/Filter";
import Catalog from "./Catalog/Catalog";
import Premiere from "./Premiere/Premiere";

import "./Home.css";

const Home = () => {

    return(
        <>
        <Slider />
        <Filter />
        <Catalog />
        <Premiere />
        </>
    )

}

export default Home;