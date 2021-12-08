import "../Contacts/Contacts.css";

const Contacts = () => {

    return(
	<section className="section">
		<div className="container">
			<div className="row">
				<div className="col-12 col-md-7 col-xl-8">
					<div className="row">
						<div className="col-12">
							<h2 className="section__title section__title--mb">Contact Form</h2>
						</div>

						<div className="col-12">
							<form action="#" className="form form--contacts">
								<div className="row row--form">
									<div className="col-12 col-xl-6">
										<input type="text" className="form__input" placeholder="Name" />
									</div>
									<div className="col-12 col-xl-6">
										<input type="text" className="form__input" placeholder="Email" />
									</div>
									<div className="col-12">
										<input type="text" className="form__input" placeholder="Subject" />
									</div>
									<div className="col-12">
										<textarea id="text" name="text" className="form__textarea" placeholder="Type your message..."></textarea>
									</div>
									<div className="col-12">
										<button type="button" className="form__btn">Send</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
				
				<div className="col-12 col-md-5 col-xl-4">
					<div className="row">
						<div className="col-12">
							<h2 className="section__title section__title--mb">Info</h2>
						</div>

						<div className="col-12">
							<p className="section__text">It is a long fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.</p>

							<ul className="contacts__list">
								<li><a href="tel:+18002345678">+1 800 234-56-78</a></li>
								<li><a href="mailto:support@moviego.com">support@hotflix.template</a></li>
							</ul>

							<div className="contacts__social">
								{/* todo social */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

    )

}

export default Contacts;