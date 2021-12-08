import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer__content">
              <a href="index.html" className="footer__logo">
                <img src="img/logo.svg" alt="" />
              </a>

              <span className="footer__copyright">
                © HOTFLIX, 2019—2021 <br /> Create by{" "}
                <a
                  href="https://themeforest.net/user/dmitryvolkov/portfolio"
                  target="_blank"
                >
                  Dmitry Volkov
                </a>
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
