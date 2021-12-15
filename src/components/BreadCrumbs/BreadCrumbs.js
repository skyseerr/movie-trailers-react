import { Link } from "react-router-dom";

import "../BreadCrumbs/BreadCrumbs.css";

const BreadCrumbs = ({props}) => {
    return(
    <section className="section section--first section--bg crumbs-background" data-bg="img/section/section.jpg">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section__wrap">
                        <h1 className="section__title">{props.name}</h1>
    
                        <ul className="breadcrumb">
                            {props.name === "Home" 
                            
                            ?   <li className="breadcrumb__item breadcrumb__item--active">{props.name}</li>
    
                            :   <>
                                    <li className="breadcrumb__item"><Link to={"/"}>Home</Link></li>
                                    <li className="breadcrumb__item breadcrumb__item--active">{props.name}</li>
                                </>                    

                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )

}

export default BreadCrumbs;