import { ReactComponent as UserIcon } from "../../../../../user.svg";

const CommentBox = ({ props }) => {


  return (
    <>
      <div className="comments__autor">
        <div className="flex-title">
          <UserIcon />
          <div className="user-info">
            <span className="comments__name">{props.owner}</span>
            <span className="comments__time">{props.createdAt}</span>
          </div>
        </div>
      </div>
      <h3 className="comments__heading">
        Title:  {props.title}
      </h3>
      <p className="comments__text comments_padding">
        <br />
        Review: <br /> {props.review}
      </p>
    </>
  );
};

export default CommentBox;
