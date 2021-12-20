import React, { useEffect, useState } from "react";
import { useCookies } from 'react-cookie';

import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
// import {getProfile} from "../../services/profileService";
import { getLastFiveMine } from "../../services/movieService";
import MyMovies from "./MyMovies/MyMovies";
import { Link } from "react-router-dom";


const Profile = () => {

	const userId = localStorage.getItem('_id');
	const userName = localStorage.getItem('user');
    const [cookies, setCookie, removeCookie] = useCookies(['jwtToken']);
    // const [profile, setProfile] = useState({})
    const [movies, setMovies] = useState([])



	useEffect(() => {

		getLastFiveMine(userId)
		.then(result =>{
			setMovies(result);
		})
		.catch(err=> {
			console.log(err.error);
		})

	}, []);

    return(
<>

<BreadCrumbs props={{"name" :"My Profile"}} />
<section class="section">
	<div className="content content--profile">
		<div className="profile">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="profile__content">
							<div className="profile__user">
								<div className="profile__avatar">
									<img src="img/user.svg" alt="" />
								</div>
								<div className="profile__meta">
									<h3>{userName}</h3>
									<span>HOTFLIX ID: {userId}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div className="container">
			<div className="tab-content">
				<div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="1-tab">
					<div className="row row--grid">
						<div className="col-12">
							<div className="dashbox">
								<div className="dashbox__title">
									<h3><i className="icon ion-ios-film"></i> Your Movies:</h3>

									<div className="dashbox__wrap">
										<Link className="dashbox__more" to={`/catalog/my-movies-all/${userId}`}>View All</Link>
									</div>
								</div>

								<div className="dashbox__table-wrap">
									<table className="main__table main__table--dash">
										<thead>
											<tr>
												<th>TITLE</th>
												<th>YEAR</th>
												<th>CREATED AT</th>
												<th>DIRECTOR</th>
											</tr>
										</thead>
										<tbody>
										{movies.map(x => <MyMovies movie={x} />)}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="2-tab">
					<div className="row row--grid">
						<div className="col-12 col-md-6 col-lg-4 order-md-2 order-lg-1">
							<div className="price price--profile">
								<div className="price__item price__item--first"><span>Basic</span> <span>Free</span></div>
								<div className="price__item"><span><i className="icon ion-ios-checkmark"></i> 7 days</span></div>
								<div className="price__item"><span><i className="icon ion-ios-checkmark"></i> 720p Resolution</span></div>
								<div className="price__item price__item--none"><span><i className="icon ion-ios-close"></i> Limited Availability</span></div>
								<div className="price__item price__item--none"><span><i className="icon ion-ios-close"></i> Desktop Only</span></div>
								<div className="price__item price__item--none"><span><i className="icon ion-ios-close"></i> Limited Support</span></div>
								<a href="#" className="price__btn">Choose Plan</a>
							</div>
						</div>

						<div className="col-12 col-md-12 col-lg-4 order-md-1 order-lg-2">
							<div className="price price--profile price--premium">
								<div className="price__item price__item--first"><span>Premium</span> <span>$34.99 <sub>/ month</sub></span></div>
								<div className="price__item"><span><i className="icon ion-ios-checkmark"></i> 1 Month</span></div>
								<div className="price__item"><span><i className="icon ion-ios-checkmark"></i> Full HD</span></div>
								<div className="price__item"><span><i className="icon ion-ios-checkmark"></i> Lifetime Availability</span></div>
								<div className="price__item price__item--none"><span><i className="icon ion-ios-close"></i> TV & Desktop</span></div>
								<div className="price__item price__item--none"><span><i className="icon ion-ios-close"></i> 24/7 Support</span></div>
								<a href="#" className="price__btn">Choose Plan</a>
							</div>
						</div>

						<div className="col-12 col-md-6 col-lg-4 order-md-3">
							<div className="price price--profile">
								<div className="price__item price__item--first"><span>Cinematic</span> <span>$49.99 <sub>/ month</sub></span></div>
								<div className="price__item"><span><i className="icon ion-ios-checkmark"></i> 2 Months</span></div>
								<div className="price__item"><span><i className="icon ion-ios-checkmark"></i> Ultra HD</span></div>
								<div className="price__item"><span><i className="icon ion-ios-checkmark"></i> Lifetime Availability</span></div>
								<div className="price__item"><span><i className="icon ion-ios-checkmark"></i> Any Device</span></div>
								<div className="price__item"><span><i className="icon ion-ios-checkmark"></i> 24/7 Support</span></div>
								<a href="#" className="price__btn">Choose Plan</a>
							</div>
						</div>
					</div>
				</div>

				<div className="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="3-tab">
					<div className="row">
						<div className="col-12 col-lg-6">
							<form action="#" className="form form--profile">
								<div className="row row--form">
									<div className="col-12">
										<h4 className="form__title">Profile details</h4>
									</div>

									<div className="col-12 col-md-6 col-lg-12 col-xl-6">
										<div className="form__group">
											<label className="form__label" for="username">Username</label>
											<input id="username" type="text" name="username" className="form__input" placeholder="User 123" />
										</div>
									</div>

									<div className="col-12 col-md-6 col-lg-12 col-xl-6">
										<div className="form__group">
											<label className="form__label" for="email">Email</label>
											<input id="email" type="text" name="email" className="form__input" placeholder="email@email.com" />
										</div>
									</div>

									<div className="col-12 col-md-6 col-lg-12 col-xl-6">
										<div className="form__group">
											<label className="form__label" for="firstname">First Name</label>
											<input id="firstname" type="text" name="firstname" className="form__input" placeholder="John" />
										</div>
									</div>

									<div className="col-12 col-md-6 col-lg-12 col-xl-6">
										<div className="form__group">
											<label className="form__label" for="lastname">Last Name</label>
											<input id="lastname" type="text" name="lastname" className="form__input" placeholder="Doe" />
										</div>
									</div>

									<div className="col-12">
										<button className="form__btn" type="button">Save</button>
									</div>
								</div>
							</form>
						</div>

						<div className="col-12 col-lg-6">
							<form action="#" className="form form--profile">
								<div className="row row--form">
									<div className="col-12">
										<h4 className="form__title">Change password</h4>
									</div>

									<div className="col-12 col-md-6 col-lg-12 col-xl-6">
										<div className="form__group">
											<label className="form__label" for="oldpass">Old password</label>
											<input id="oldpass" type="password" name="oldpass" className="form__input" />
										</div>
									</div>

									<div className="col-12 col-md-6 col-lg-12 col-xl-6">
										<div className="form__group">
											<label className="form__label" for="newpass">New password</label>
											<input id="newpass" type="password" name="newpass" className="form__input" />
										</div>
									</div>

									<div className="col-12 col-md-6 col-lg-12 col-xl-6">
										<div className="form__group">
											<label className="form__label" for="confirmpass">Confirm new password</label>
											<input id="confirmpass" type="password" name="confirmpass" className="form__input" />
										</div>
									</div>

									<div className="col-12 col-md-6 col-lg-12 col-xl-6">
										<div className="form__group">
											<label className="form__label" for="select">Select</label>
											<select name="select" id="select" className="form__select">
												<option value="0">Option</option>
												<option value="1">Option 2</option>
												<option value="2">Option 3</option>
												<option value="3">Option 4</option>
											</select>
										</div>
									</div>

									<div className="col-12">
										<button className="form__btn" type="button">Change</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

    </>

    )

}

export default Profile;