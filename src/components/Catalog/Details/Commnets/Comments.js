import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";

import { create } from "../../../../services/commentService";
import { getAllComments } from "../../../../services/commentService";
import CommentBox from "./CommentBox/CommentBox";
import YouMayAlsoLike from "../YouMayAlsoLike/YouMayAlsoLike";

import "./Comments.css";

const Comments = (genre) => {
  const [comments, setComments] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(["jwtToken"]);
  const { movieId } = useParams();
  const [isCommentCreated, setIsCommentCreated] = useState(true);
  let user = localStorage.getItem("user");
  const onSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    let title = formData.get("title");
    let review = formData.get("review");

    create({ title, review, user }, movieId, cookies["jwtToken"])
    .then(result => {
      setIsCommentCreated(true);
    })
    e.currentTarget.title.value = "";
    e.currentTarget.review.value = "";
  };

  useEffect(() => {
    if (isCommentCreated) {
      getAllComments(movieId)
        .then((result) => {
          setComments(result);
          setIsCommentCreated(false);
        })
    }
  }, [isCommentCreated]);

  return (
    <>
      <section className="content">
        <div className="content__head">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="content__title">Comments:</h2>

                <div className="content__mobile-tabs" id="content__mobile-tabs">
                  <div
                    className="content__mobile-tabs-btn dropdown-toggle"
                    role="navigation"
                    id="mobile-tabs"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <input type="button" value="Comments" />
                    <span></span>
                  </div>

                  <div
                    className="content__mobile-tabs-menu dropdown-menu"
                    aria-labelledby="mobile-tabs"
                  >
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="1-tab"
                          data-toggle="tab"
                          href="#tab-1"
                          role="tab"
                          aria-controls="tab-1"
                          aria-selected="true"
                        >
                          Comments
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="2-tab"
                          data-toggle="tab"
                          href="#tab-2"
                          role="tab"
                          aria-controls="tab-2"
                          aria-selected="false"
                        >
                          Reviews
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="3-tab"
                          data-toggle="tab"
                          href="#tab-3"
                          role="tab"
                          aria-controls="tab-3"
                          aria-selected="false"
                        >
                          Photos
                        </a>
                      </li>
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
                <div
                  className="tab-pane fade show active"
                  id="tab-1"
                  role="tabpanel"
                  aria-labelledby="1-tab"
                >
                  <div className="row">
                    <div className="col-12">
                      <div className="comments">
                        <ul className="comments__list">
                          {comments.map(x => 
                            <li key={x._id} className="comments__item"><CommentBox key={x._id} props={x} /></li>)}
                        </ul>

                        {user
                        ? <form
                        action="POST"
                        className="form"
                        onSubmit={onSubmit}
                      >
                        <input
                          type="text"
                          className="form__input"
                          placeholder="Title"
                          name="title"
                        />
                        <textarea
                          className="form__textarea"
                          placeholder="Review"
                          name="review"
                        />
                        <button type="submit" className="form__btn">
                          Send
                        </button>
                      </form>
                      
                    : <p>''</p>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-4 col-xl-4">
              <YouMayAlsoLike props={{"genre": genre.props, "movieId": movieId}} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Comments;
