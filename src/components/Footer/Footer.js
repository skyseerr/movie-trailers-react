import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer__content">
              <Link to="/" className="footer__logo">
                <img src="img/logo.svg" alt="" />
              </Link>

              <span className="footer__copyright">
                © movieTube, 2021-2022 <br /> Created by{" "}
                <Link to={"https://www.linkedin.com/in/ivan-asenov/"}>
                    
                  Ivan Asenov
                </Link>
              </span>

              <nav className="footer__nav">
                <Link to="/about">About Us</Link>
                <Link to="/contacts">Contacts</Link>
                <Link to="/privacy">Privacy policy</Link>
              </nav>

              <button className="footer__back" type="button">
                <i className="icon ion-ios-arrow-round-up"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
