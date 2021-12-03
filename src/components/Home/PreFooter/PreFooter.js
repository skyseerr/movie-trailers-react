const PreFooter = () => {

    return(
        <section class="section section--border">
		<div class="container">
			<div class="row">
				<div class="col-12 col-xl-10">
					<h2 class="section__title section__title--mb"><b>HotFlix</b> – Best Place for Movies</h2>

					<p class="section__text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of <b>using Lorem</b> Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>

					<p class="section__text">Content here, content here, making it look like <a href="#">readable</a> English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
				</div>
			</div>

			<div class="row row--grid">
				<div class="col-12 col-md-6 col-lg-4 order-md-2 order-lg-1">
					<div class="price">
						<div class="price__item price__item--first"><span>Basic</span> <span>Free</span></div>
						<div class="price__item"><span><i class="icon ion-ios-checkmark"></i> 7 days</span></div>
						<div class="price__item"><span><i class="icon ion-ios-checkmark"></i> 720p Resolution</span></div>
						<div class="price__item price__item--none"><span><i class="icon ion-ios-close"></i> Limited Availability</span></div>
						<div class="price__item price__item--none"><span><i class="icon ion-ios-close"></i> Desktop Only</span></div>
						<div class="price__item price__item--none"><span><i class="icon ion-ios-close"></i> Limited Support</span></div>
						<a href="#" class="price__btn">Choose Plan</a>
					</div>
				</div>

				<div class="col-12 col-md-12 col-lg-4 order-md-1 order-lg-2">
					<div class="price price--premium">
						<div class="price__item price__item--first"><span>Premium</span> <span>$34.99 <sub>/ month</sub></span></div>
						<div class="price__item"><span><i class="icon ion-ios-checkmark"></i> 1 Month</span></div>
						<div class="price__item"><span><i class="icon ion-ios-checkmark"></i> Full HD</span></div>
						<div class="price__item"><span><i class="icon ion-ios-checkmark"></i> Lifetime Availability</span></div>
						<div class="price__item price__item--none"><span><i class="icon ion-ios-close"></i> TV & Desktop</span></div>
						<div class="price__item price__item--none"><span><i class="icon ion-ios-close"></i> 24/7 Support</span></div>
						<a href="#" class="price__btn">Choose Plan</a>
					</div>
				</div>

				<div class="col-12 col-md-6 col-lg-4 order-md-3">
					<div class="price">
						<div class="price__item price__item--first"><span>Cinematic</span> <span>$49.99 <sub>/ month</sub></span></div>
						<div class="price__item"><span><i class="icon ion-ios-checkmark"></i> 2 Months</span></div>
						<div class="price__item"><span><i class="icon ion-ios-checkmark"></i> Ultra HD</span></div>
						<div class="price__item"><span><i class="icon ion-ios-checkmark"></i> Lifetime Availability</span></div>
						<div class="price__item"><span><i class="icon ion-ios-checkmark"></i> Any Device</span></div>
						<div class="price__item"><span><i class="icon ion-ios-checkmark"></i> 24/7 Support</span></div>
						<a href="#" class="price__btn">Choose Plan</a>
					</div>
				</div>
			</div>
		</div>
	</section>
    )

}

export default PreFooter;