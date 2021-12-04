import "../Header/Header.css";

const Header = () => {

    return (
        <header className="header">
		<div className="container">
			<div className="row">
				<div className="col-12">
					<div className="header__content">
						<a href="index.html" className="header__logo">
							<img src="img/logo.svg" alt="" />
						</a>

						<ul className="header__nav">

							<li className="header__nav-item">
								<a className="dropdown-toggle header__nav-link" href="#" role="button" id="dropdownMenuCatalog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Catalog <i className="icon ion-ios-arrow-down"></i></a>

								<ul className="dropdown-menu header__dropdown-menu" aria-labelledby="dropdownMenuCatalog">
									<li><a href="catalog.html">Catalog style 1</a></li>
									<li><a href="catalog2.html">Catalog style 2</a></li>
									<li><a href="details.html">Details style 1</a></li>
									<li><a href="details2.html">Details style 2</a></li>
								</ul>
							</li>

							<li className="header__nav-item">
								<a href="pricing.html" className="header__nav-link">Pricing plan</a>
							</li>

							<li className="dropdown header__nav-item">
								<a className="dropdown-toggle header__nav-link header__nav-link--more" href="#" role="button" id="dropdownMenuMore" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="icon ion-ios-more"></i></a>

								<ul className="dropdown-menu header__dropdown-menu scrollbar-dropdown" aria-labelledby="dropdownMenuMore">
									<li><a href="about.html">About</a></li>
									<li><a href="profile.html">Profile</a></li>
									<li><a href="contacts.html">Contacts</a></li>
									<li><a href="faq.html">Help center</a></li>
									<li><a href="privacy.html">Privacy policy</a></li>
									<li><a href="../admin/index.html" target="_blank">Admin pages</a></li>
									<li><a href="signin.html">Sign in</a></li>
									<li><a href="signup.html">Sign up</a></li>
									<li><a href="forgot.html">Forgot password</a></li>
									<li><a href="404.html">404 Page</a></li>
								</ul>
							</li>
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

							<div className="dropdown header__lang">
								<a className="dropdown-toggle header__nav-link" href="#" role="button" id="dropdownMenuLang" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">EN <i className="icon ion-ios-arrow-down"></i></a>

								<ul className="dropdown-menu header__dropdown-menu" aria-labelledby="dropdownMenuLang">
									<li><a href="#">English</a></li>
									<li><a href="#">Spanish</a></li>
									<li><a href="#">Russian</a></li>
								</ul>
							</div>

							<a href="signin.html" className="header__sign-in">
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