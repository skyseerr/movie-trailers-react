const ForgotPassword = () => {
  return (
    <div className="sign section--bg" data-bg="img/section/section.jpg">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sign__content">
              <form action="#" className="sign__form">

                <div className="sign__group">
                  <input
                    type="text"
                    className="sign__input"
                    placeholder="Email"
                  />
                </div>

                <button className="sign__btn" type="button">
                  Send
                </button>

                <span className="sign__text">
                  We will send a password to your Email
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
