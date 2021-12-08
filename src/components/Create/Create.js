import React, { useState } from "react";

import "../Filter/Filter";

const Create = () => {
  const [genreValue, setGenreValue] = useState([]);

  const onClickHendler = (e) => {
      setGenreValue( arr => [...arr, e.target.textContent]);
  };

  const delteGenreValur = () => {
    setGenreValue([]);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="sign section--bg" data-bg="img/section/section.jpg">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sign__content">
              <form
                action="POST"
                onSubmit={submitHandler}
                className="sign__form"
                style={{ maxWidth: "600px" }}
              >
                <div className="sign__group">
                  <input
                    type="text"
                    name="title"
                    className="sign__input"
                    placeholder="Title *"
                  />
                </div>

                <div className="sign__group">
                  <input
                    type="text"
                    name="director"
                    className="sign__input"
                    placeholder="Director *"
                  />
                </div>

                <div className="sign__group">
                  <input
                    type="text"
                    name="cast"
                    className="sign__input"
                    placeholder="Cast *"
                  />
                </div>

                <div className="sign__group">
                  <input
                    type="text"
                    name="genre"
                    className="sign__input"
                    placeholder="Genre *"
                    disabled="disabled"
                    defaultValue={genreValue}
                  />
                  {genreValue.length > 0 ? (
                    <button
                      class="header__search-button"
                      onClick={delteGenreValur}
                      type="button"
                    >
                      <i class="icon ion-ios-close"></i>
                    </button>
                  ) : (
                    ""
                  )}
                </div>

                <div class="filter">
                  <div class="container">
                    <div class="row">
                      <div class="col-12">
                        <div class="filter__content">
                          <div class="filter__items">
                            <div class="filter__item" id="filter__genre">
                              <span class="filter__item-label">GENRE:</span>

                              <div
                                class="filter__item-btn dropdown-toggle"
                                role="navigation"
                                id="filter-genre"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <input type="button" value="Select..." />
                                <span></span>
                              </div>

                              <ul
                                class="filter__item-menu dropdown-menu scrollbar-dropdown"
                                aria-labelledby="filter-genre"
                              >
                                <li onClick={onClickHendler}>
                                  Action/Adventure
                                </li>
                                <li onClick={onClickHendler}>Animals</li>
                                <li onClick={onClickHendler}>Animation</li>
                                <li onClick={onClickHendler}>Biography</li>
                                <li onClick={onClickHendler}>Comedy</li>
                                <li onClick={onClickHendler}>Cooking</li>
                                <li onClick={onClickHendler}>Dance</li>
                                <li onClick={onClickHendler}>Documentary</li>
                                <li onClick={onClickHendler}>Drama</li>
                                <li onClick={onClickHendler}>Education</li>
                                <li onClick={onClickHendler}>Entertainment</li>
                                <li onClick={onClickHendler}>Family</li>
                                <li onClick={onClickHendler}>Fantasy</li>
                                <li onClick={onClickHendler}>History</li>
                                <li onClick={onClickHendler}>Horror</li>
                                <li onClick={onClickHendler}>Independent</li>
                                <li onClick={onClickHendler}>International</li>
                                <li onClick={onClickHendler}>Kids</li>
                                <li onClick={onClickHendler}>Kids & Family</li>
                                <li onClick={onClickHendler}>Medical</li>
                                <li onClick={onClickHendler}>Military/War</li>
                                <li onClick={onClickHendler}>Music</li>
                                <li onClick={onClickHendler}>Musical</li>
                                <li onClick={onClickHendler}>Mystery/Crime</li>
                                <li onClick={onClickHendler}>Nature</li>
                                <li onClick={onClickHendler}>Paranormal</li>
                                <li onClick={onClickHendler}>Politics</li>
                                <li onClick={onClickHendler}>Racing</li>
                                <li onClick={onClickHendler}>Romance</li>
                                <li onClick={onClickHendler}>Sci-Fi/Horror</li>
                                <li onClick={onClickHendler}>Science</li>
                                <li onClick={onClickHendler}>
                                  Science Fiction
                                </li>
                                <li onClick={onClickHendler}>Science/Nature</li>
                                <li onClick={onClickHendler}>Spanish</li>
                                <li onClick={onClickHendler}>Travel</li>
                                <li onClick={onClickHendler}>Western</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sign__group">
                  <input
                    type="text"
                    name="year"
                    className="sign__input"
                    placeholder="Release year *"
                  />
                </div>

                <div className="sign__group">
                  <input
                    type="text"
                    name="time"
                    className="sign__input"
                    placeholder="Running time *"
                  />
                </div>

                <div className="sign__group">
                  <input
                    type="text"
                    name="country"
                    className="sign__input"
                    placeholder="Country *"
                  />
                </div>

                <div className="sign__group">
                  <input
                    type="text"
                    name="imgUrl"
                    className="sign__input"
                    placeholder="Image url *"
                  />
                </div>

                <div className="sign__group">
                  <input
                    type="text"
                    name="trailer"
                    className="sign__input"
                    placeholder="Trailer url *"
                  />
                </div>

                {/* <div className="sign__group sign__group--checkbox">
								<input id="remember" name="remember" type="checkbox" checked="checked" />
								<label for="remember">Remember Me</label>
                                <input id="remember" name="remember" type="checkbox" checked="checked" />
								<label for="remember">Remember Me</label>
							</div> */}

                <button className="sign__btn" type="submit">
                  Create
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
