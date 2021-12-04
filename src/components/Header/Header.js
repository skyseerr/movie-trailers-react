import { Link } from "react-router-dom";

import "../Header/Header.css";

const Header = () => {

    return (
        <header className="header">
		<div className="container">
			<div className="row">
				<div className="col-12">
					<div className="header__content">
						<a href="/" className="header__logo">
							<img src="img/logo.svg" alt="" />
						</a>

						<ul className="header__nav">

							<li className="header__nav-item">
								<Link to="/catalog" className="header__nav-link">Catalog</Link>
							</li>

							<li className="header__nav-item">
								<Link to="/create" className="header__nav-link">Create</Link>
							</li>

							<li className="header__nav-item">
								<Link to="/about" className="header__nav-link">About</Link>
							</li>

							<li className="header__nav-item">
								<Link to="/contacts" className="header__nav-link">Contacts</Link>
							</li>	



							{/* <li className="dropdown header__nav-item">
								<a className="dropdown-toggle header__nav-link header__nav-link--more" href="#" role="button" id="dropdownMenuMore" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="icon ion-ios-more"></i></a>

								<ul className="dropdown-menu header__dropdown-menu scrollbar-dropdown" aria-labelledby="dropdownMenuMore">
									<li><Link to="about.html">About</Link></li>
									<li><Link to="profile.html">Profile</Link></li>
									<li><Link to="contacts.html">Contacts</Link></li>
									<li><Link to="faq.html">Help center</Link></li>
									<li><Link to="privacy.html">Privacy policy</Link></li>
									<li><Link to="../admin/index.html" target="_blank">Admin pages</Link></li>
									<li><Link to="signin.html">Sign in</Link></li>
									<li><Link to="signup.html">Sign up</Link></li>
									<li><Link to="forgot.html">Forgot password</Link></li>
									<li><Link to="404.html">404 Page</Link></li>
								</ul>
							</li> */}
						</ul>

						<div className="header__auth">
							<form action="#" className="header__search">
								<input className="header__search-input" type="text" placeholder="Search..." />
								<button className="header__search-button" type="button">
									<i className="icon ion-ios-search"></i>
								</button>
								<button className="header__search-close" type="button">
									<i className="icon ion-md-close"></i>
								</button>
							</form>

							<button className="header__search-btn" type="button">
								<i className="icon ion-ios-search"></i>
							</button>
{/* 
							<div className="dropdown header__lang">
								<a className="dropdown-toggle header__nav-link" href="#" role="button" id="dropdownMenuLang" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">EN <i className="icon ion-ios-arrow-down"></i></a>

								<ul className="dropdown-menu header__dropdown-menu" aria-labelledby="dropdownMenuLang">
									<li><a href="#">English</a></li>
									<li><a href="#">Spanish</a></li>
									<li><a href="#">Russian</a></li>
								</ul>
							</div> */}

							<a href="/login" className="header__sign-in">
								<i className="icon ion-ios-log-in"></i>
								<span>sign in</span>
							</a>
						</div>

						<button className="header__btn" type="button">
							<span></span>
							<span></span>
							<span></span>
						</button>
					</div>
				</div>
			</div>
		</div>
		</header>
    )

}

export default Header