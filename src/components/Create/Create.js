import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";

import Select from "react-select";
import { useCookies } from "react-cookie";

import { create } from "../../services/movieService";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
// import SelectOption from "../Create/SelectOption/SelectOption";

import "../Filter/Filter.css";
import "./Create.css";

const Create = () => {
  const navigate = useNavigate();

  const [cookies, setCookie, removeCookie] = useCookies(["jwtToken"]);

  const options = [
    { value: "Action", label: "Action" },
    { value: "Animation", label: "Animation" },
    { value: "Comedy", label: "Comedy" },
    { value: "Crime", label: "Crime" },
    { value: "Drama", label: "Drama" },
    { value: "Fantasy", label: "Fantasy" },
    { value: "Historical", label: "Historical" },
    { value: "Horror", label: "Horror" },
    { value: "Romance", label: "Romance" },
    { value: "Science-fiction", label: "Science-fiction" },
    { value: "Thriller", label: "Thriller" },
    { value: "Western", label: "Western" },
    { value: "Thriller", label: "Thriller" },
    { value: "Other", label: "Other" },
  ];

  // const [genreValue, setGenreValue] = useState([]);

  // const onClickHendler = (e) => {
  //     setGenreValue( arr => [...arr, e.target.textContent]);
  // };

  // const delteGenreValur = () => {
  //   setGenreValue([]);
  // };

  const [bgImage, setBgImage] = useState();
  const [genreValue, setGenreValue] = useState();

  const selectGenreHandler = (e) => {
    setGenreValue(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };

  const onImageChangeHandler = (e) => {
    setBgImage(e.currentTarget.value);
  };

  const genreValueHandler = (genreValue) => {
    setGenreValue();
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const {
      title,
      description,
      year,
      duration,
      director,
      country,
      genre,
      trailerUrl,
      imageUrl,
    } = Object.fromEntries(new FormData(e.target));

    create(
      {
        title,
        description,
        year,
        duration,
        director,
        country,
        genre,
        trailerUrl,
        imageUrl,
      },
      cookies["jwtToken"]
    ).then((data) => {
      navigate("/");
    });
  };

  return (
    <>
      <BreadCrumbs props={{ name: "Create" }} />

      <main className="main">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="main__title">
                <h2>Add Movie</h2>
              </div>
            </div>

            <div className="col-12">
              <form action="POST" className="form" onSubmit={submitHandler}>
                <div className="row row--form">
                  <div className="col-12 col-md-5 form__cover">
                    <div className="row row--form">
                      <div className="col-12 col-sm-6 col-md-12">
                        <div
                          className="form__img"
                          style={{ backgroundImage: `url("${bgImage}")` }}
                        >
                          <label for="form__img-upload">
                            {bgImage ? (
                              <p></p>
                            ) : (
                              <p>Upload cover (270 x 400)</p>
                            )}
                          </label>
                          <input
                            id="form__img-upload"
                            name="form__img-upload"
                          />
                          <img id="form__img" src="#" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-7 form__content">
                    <div className="row row--form">
                      <div className="col-12">
                        <input
                          type="text"
                          className="form__input"
                          placeholder="Title"
                          name="title"
                        />
                      </div>

                      <div className="col-12">
                        <textarea
                          id="text"
                          name="description"
                          className="form__textarea"
                          placeholder="Description"
                        ></textarea>
                      </div>

                      <div className="col-sm-6">
                        <input
                          type="text"
                          className="form__input"
                          placeholder="Release year"
                          name="year"
                        />
                      </div>

                      <div className="col-sm-6">
                        <input
                          type="text"
                          className="form__input"
                          placeholder="Running timed in minutes"
                          name="duration"
                        />
                      </div>

                      {/* <div className="col-12 col-sm-6 col-lg-3">
                      <select
                        className="js-example-basic-single"
                        id="quality"
                        name="quality"
                      >
                        <option value=""></option>
                        <option value="FullHD">FullHD</option>
                        <option value="HD">HD</option>
                      </select>
                    </div> */}

                      <div className="col-sm-6">
                        <input
                          type="text"
                          className="form__input"
                          placeholder="Director"
                          name="director"
                        />
                      </div>
                      <div className="col-sm-6">
                        <Select
                          value={selectedOption}
                          onChange={this.handleChange}
                          options={options}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="row row--form">
                      <div className="col-12">
                        <input
                          type="text"
                          className="form__input"
                          placeholder="Youtube Trailer Url"
                          name="trailerUrl"
                        />
                      </div>

                      <div className="col-12">
                        <input
                          onChange={onImageChangeHandler}
                          type="text"
                          className="form__input"
                          placeholder="Image Url"
                          name="imageUrl"
                        />
                      </div>

                      <div className="col-12 btn-center">
                        <button type="submit" className="form__btn">
                          publish
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Create;
