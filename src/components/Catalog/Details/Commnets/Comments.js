import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";

import { create } from "../../../../services/commentService";
import { getAllComments } from "../../../../services/commentService";
import CommentBox from "./CommentBox/CommentBox";

import "./Comments.css";


const Comments = () => {
    
    const [comments, setComments] = useState([]);
    const [cookies, setCookie, removeCookie] = useCookies(["jwtToken"]);
    const {movieId} = useParams()
    const onSubmit = (e) => {
        e.preventDefault()
        
        let formData = new FormData(e.currentTarget);
        
        let title = formData.get('title');
        let review = formData.get('review');
        let userName = localStorage.getItem('user');
        
        create({title, review, userName}, cookies["jwtToken"], movieId);

        e.currentTarget.title.value = '';
        e.currentTarget.review.value = '';
    }


    useEffect(() => {
		getAllComments(movieId)
		  .then(result =>{
			setComments(result);
		  })
		  .catch(err=> {
			  console.log(err.error);
		  })
		}, []);


    return(
      
<>
	<section className="content">
		<div className="content__head">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h2 className="content__title">Comments:</h2>

						<div className="content__mobile-tabs" id="content__mobile-tabs">
							<div className="content__mobile-tabs-btn dropdown-toggle" role="navigation" id="mobile-tabs" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<input type="button" value="Comments" />
								<span></span>
							</div>

							<div className="content__mobile-tabs-menu dropdown-menu" aria-labelledby="mobile-tabs">
								<ul className="nav nav-tabs" role="tablist">
									<li className="nav-item"><a className="nav-link active" id="1-tab" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">Comments</a></li>

									<li className="nav-item"><a className="nav-link" id="2-tab" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false">Reviews</a></li>

									<li className="nav-item"><a className="nav-link" id="3-tab" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false">Photos</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div className="container">
			<div className="row">
				<div className="col-12 col-lg-8 col-xl-8">
					<div className="tab-content">
						<div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="1-tab">
							<div className="row">
								<div className="col-12">
									<div className="comments">
										<ul className="comments__list">

                                          {comments.map(x =>  <li key={x._id} className="comments__item"><CommentBox props={x} /> </li>)}


										</ul>

										<form action="POST" className="form" onSubmit={onSubmit}>
											<input type="text" className="form__input" placeholder="Title" name="title"/>
											<textarea className="form__textarea" placeholder="Review" name="review" />
											<button type="submit" className="form__btn">Send</button>
										</form>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>

				<div className="col-12 col-lg-4 col-xl-4">
					<div className="row row--grid">
						<div className="col-12">
							<h2 className="section__title section__title--sidebar">You may also like...</h2>
						</div>

						<div className="col-6 col-sm-4 col-lg-6">
							<div className="card">
								<div className="card__cover">
									<img src="img/covers/cover.jpg" alt="" />
									<a href="#" className="card__play">
										<i className="icon ion-ios-play"></i>
									</a>
									<span className="card__rate card__rate--green">8.4</span>
								</div>
								<div className="card__content">
									<h3 className="card__title"><a href="#">I Dream in Another Language</a></h3>
									<span className="card__category">
										<a href="#">Action</a>
										<a href="#">Triler</a>
									</span>
								</div>
							</div>
						</div>

						<div className="col-6 col-sm-4 col-lg-6">
							<div className="card">
								<div className="card__cover">
									<img src="img/covers/cover2.jpg" alt="" />
									<a href="#" className="card__play">
										<i className="icon ion-ios-play"></i>
									</a>
									<span className="card__rate card__rate--green">7.1</span>
								</div>
								<div className="card__content">
									<h3 className="card__title"><a href="#">Benched</a></h3>
									<span className="card__category">
										<a href="#">Comedy</a>
									</span>
								</div>
							</div>
						</div>

						<div className="col-6 col-sm-4 col-lg-6">
							<div className="card">
								<div className="card__cover">
									<img src="img/covers/cover3.jpg" alt="" />
									<a href="#" className="card__play">
										<i className="icon ion-ios-play"></i>
									</a>
									<span className="card__rate card__rate--red">6.3</span>
								</div>
								<div className="card__content">
									<h3 className="card__title"><a href="#">Whitney</a></h3>
									<span className="card__category">
										<a href="#">Romance</a>
										<a href="#">Drama</a>
										<a href="#">Music</a>
									</span>
								</div>
							</div>
						</div>

						<div className="col-6 col-sm-4 col-lg-6">
							<div className="card">
								<div className="card__cover">
									<img src="img/covers/cover4.jpg" alt="" />
									<a href="#" className="card__play">
										<i className="icon ion-ios-play"></i>
									</a>
									<span className="card__rate card__rate--green">7.9</span>
								</div>
								<div className="card__content">
									<h3 className="card__title"><a href="#">Blindspotting</a></h3>
									<span className="card__category">
										<a href="#">Comedy</a>
										<a href="#">Drama</a>
									</span>
								</div>
							</div>
						</div>

						<div className="col-6 col-sm-4 col-lg-6">
							<div className="card">
								<div className="card__cover">
									<img src="img/covers/cover5.jpg" alt="" />
									<a href="#" className="card__play">
										<i className="icon ion-ios-play"></i>
									</a>
									<span className="card__rate card__rate--green">8.4</span>
								</div>
								<div className="card__content">
									<h3 className="card__title"><a href="#">I Dream in Another Language</a></h3>
									<span className="card__category">
										<a href="#">Action</a>
										<a href="#">Triler</a>
									</span>
								</div>
							</div>
						</div>

						<div className="col-6 col-sm-4 col-lg-6">
							<div className="card">
								<div className="card__cover">
									<img src="img/covers/cover6.jpg" alt="" />
									<a href="#" className="card__play">
										<i className="icon ion-ios-play"></i>
									</a>
									<span className="card__rate card__rate--green">7.1</span>
								</div>
								<div className="card__content">
									<h3 className="card__title"><a href="#">Benched</a></h3>
									<span className="card__category">
										<a href="#">Comedy</a>
									</span>
								</div>
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

export default Comments;