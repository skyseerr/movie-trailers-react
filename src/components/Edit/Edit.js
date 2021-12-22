import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";

import { getOne } from "../../services/movieService";
import { edit } from "../../services/movieService";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import makeAnimated from "react-select/animated";
import Select from "react-select";
import { validateForm } from "../../utils/validate";
import ControlledPopup from "../Popups/Popup";

import "./Edit.css";
import "../Create/SelectOption/SelectOption.css";


const Edit = () => {
  const animatedComponents = makeAnimated();
  const navigate = useNavigate();
  const { movieId } = useParams()
  const [cookies, setCookie, removeCookie] = useCookies(["jwtToken"]);
  const [bgImage, setBgImage] = useState()
  const [movie, setMovie] = useState([]);
  const [categories, setCategories] = useState();
  const [selectedValue, setSelectedValue] = useState([]);
  const [error, setError] = useState("");

    const options = [
        { value: 'Action', label: 'Action' },
        { value: 'Adventure', label: 'Adventure' },
        { value: 'Animation', label: 'Animation' },
        { value: 'Comedy', label: 'Comedy' },
        { value: 'Crime', label: 'Crime' },
        { value: 'Drama', label: 'Drama' },
        { value: 'Fantasy', label: 'Fantasy' },
        { value: 'Historical', label: 'Historical' },
        { value: 'Horror', label: 'Horror' },
        { value: 'Romance', label: 'Romance' },
        { value: 'Science-fiction', label: 'Science-fiction' },
        { value: 'Thriller', label: 'Thriller' },
        { value: 'Western', label: 'Western' },
        { value: 'Thriller', label: 'Thriller' },
        { value: 'Other', label: 'Other' },
    ];

  useEffect(() => {
    getOne(movieId)
      .then(result =>{
        setMovie(result)
        setBgImage(result.imageUrl)
        const genres = result.genre.map(genre => ({ value: genre, label: genre }))
        setCategories(genres)
      })
      .catch(err=> {
          console.log(err.error);
      })
    }, []);

  const valueSelectHandler = val => {
      setCategories(val)
      setSelectedValue(val.map(x=> x.value));
  };


  const onImageChangeHandler = (e) => {
    setBgImage(e.currentTarget.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();

    const {
      title,
      description,
      year,
      duration,
      director,
      country,
      trailerUrl,
      imageUrl,
    } = Object.fromEntries(new FormData(e.target));

    let genre = selectedValue;
    edit(
        movieId,
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
    ).then(result => {
      navigate(`/details/${movie._id}`)
    });
  };

  return (
    <>
    <BreadCrumbs props={{"name" :"Edit"}} />

    <main className="main">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="main__title">
              <h2>Editing "{movie.title}" Movie</h2>
            </div>
          </div>

          <div className="col-12">
            <form action="POST" className="form" onSubmit={submitHandler}>
              <div className="row row--form">
                <div className="col-12 col-md-5 form__cover">
                  <div className="row row--form">
                    <div className="col-12 col-sm-6 col-md-12">
                      <div className="form__img" style={{"backgroundImage" : `url("${bgImage}")`, "backgroundSize": "cover","backgroundPosition": "center", "backgroundRepeat": "no-repeat", "backgroundSize": "cover","backgroundRepeat": "noRepeat"}}>
                        <label for="form__img-upload">
                          {bgImage
                            ? <p></p>
                            : <p>Upload cover (270 x 400)</p>}
                          
                        </label>
                        <input id="form__img-upload" name="form__img-upload" />
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
                        defaultValue={movie.title}
                      />
                    </div>

                    <div className="col-12">
                      <textarea
                        id="text"
                        name="description"
                        className="form__textarea"
                        placeholder="Description"
                        defaultValue={movie.description}
                      ></textarea>
                    </div>

                    <div className="col-sm-6">
                      <input
                        type="text"
                        className="form__input"
                        placeholder="Release year"
                        name="year"
                        defaultValue={movie.year}
                      />
                    </div>

                    <div className="col-sm-6">
                      <input
                        type="text"
                        className="form__input"
                        placeholder="Running timed in minutes"
                        name="duration"
                        defaultValue={movie.duration}
                      />
                    </div>

                    <div className="col-sm-6">
                      <input
                        type="text"
                        className="form__input"
                        placeholder="Director"
                        name="director"
                        defaultValue={movie.director}
                      />
                    </div>

                    <div className="col-sm-6">
                        <Select
                            isMulti
                            onChange={valueSelectHandler}
                            components={animatedComponents}
                            value={categories}
                            options={options}
                            // defaultValue={options.filter(option => categories.map(categorie => option.value === categorie))}
                            className="basic-multi-select"
                            classNamePrefix="Select genre"
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
                        defaultValue={movie.trailerUrl}
                      />
                    </div>

                    <div className="col-12">
                      <input
                        onChange={onImageChangeHandler}
                        type="text"
                        className="form__input"
                        placeholder="Image Url"
                        name="imageUrl"
                        defaultValue={movie.imageUrl}
                      />
                    </div>

                    <div className="col-12 btn-center">
                      <button type="submit" className="form__btn">
                        update
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

export default Edit;
