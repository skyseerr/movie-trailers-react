import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as UserLogo } from "../../user.svg";
import { useCookies } from 'react-cookie';


import "../Header/Header.css";
import { ReactComponent as Logo } from "../../logo.svg";
import { AuthContext } from "../../contexts/AuthContext";



const Header = () => {

    const {user, setUser} = useContext(AuthContext);
    const [cookies, setCookie, removeCookie] = useCookies(['name', 'jwtToken']);
	const navigate = useNavigate()
	const userName = localStorage.getItem('user');
	
	const logout = () => {
		removeCookie('name',{path:'/'});
		removeCookie('jwtToken',{path:'/'});
		localStorage.removeItem('user');
		localStorage.removeItem('_id');
		setUser(null)
		navigate('/')
	}

	const loggedInMenu = (
		<>
		<Link to="/profile"><p style={{color: "white", margin : "0", display: "flex", alignItems: "center"}}> <UserLogo /> &nbsp; {userName}</p></Link>
		<button type="button" onClick={logout} className="header__sign-in">
		<i className="icon ion-ios-log-in"></i>
		<span>Logout</span>
		</button>
		</>
	)

	const guestUserMenu = (
		<>
		<Link to="/login" className="header__sign-in">
		<i className="icon ion-ios-log-in"></i>
		<span>sign in</span>
		</Link>
		</>
	)

	const searchHandler = (e) => {
		e.preventDefault()

		let formData = new FormData(e.currentTarget)

		let searchParam = formData.get('search')

		navigate(`/catalog/${searchParam}`);


	}

    return (
		
        <header className="header">
		<div className="container">
			<div className="row">
				<div className="col-12">
					<div className="header__content">
						<Link to="/" className="header__logo">
							{ <Logo />}
						</Link>

						<ul className="header__nav">

						{userName
						
						?	<>
							
								<li className="header__nav-item">
								<Link to="/" className="header__nav-link">Home</Link>
								</li>

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
							</>
								:

							<>

								<li className="header__nav-item">
								<Link to="/" className="header__nav-link">Home</Link>
								</li>

								<li className="header__nav-item">
								<Link to="/catalog" className="header__nav-link">Catalog</Link>
								</li>
						
								<li className="header__nav-item">
									<Link to="/about" className="header__nav-link">About</Link>
								</li>
						
								<li className="header__nav-item">
									<Link to="/contacts" className="header__nav-link">Contacts</Link>
								</li>
							</>
							} 

						</ul>

						<div className="header__auth">
							<form action="#" className="header__search" onSubmit={searchHandler}>
								<input className="header__search-input" type="text" placeholder="Search..." name="search" />
								<button className="header__search-button" type="submit" >
									<i className="icon ion-ios-search"></i>
								</button>
								<button className="header__search-close" type="button">
									<i className="icon ion-md-close"></i>
								</button>
							</form>

							<button className="header__search-btn" type="button">
								<i className="icon ion-ios-search"></i>
							</button>

							{	
								userName
						
								? loggedInMenu 
								: guestUserMenu
							}


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