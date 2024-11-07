import { useState } from "react";
import { postComment } from "../../api";

function CommentAdder({ article_id, setComments }) {
  const [userComment, setUserComment] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [isError, setIsError] = useState(false);
  // Could alter this further with context - one to sort further down the line (see screenshots)
  return (
    <form
      className="comment-adder"
      onSubmit={(event) => {
        event.preventDefault();
        setIsPosting(true);
        postComment(article_id, userComment)
          .then((comment) => {
            setIsError(false);
            setIsPosting(false);
            setComments((prevComments) => [comment, ...prevComments]);
          })
          .catch((err) => {
            setIsPosting(false);
            setIsError(true);
          });
        setUserComment("");
      }}>
      <div className="comment-input-button">
        <input
          type="text"
          className={isError ? "input input-bordered input-error w-full" : "input input-primary w-full"}
          id="new-comment"
          value={userComment}
          placeholder={isError ? "Comment cannot be empty!" : "Enter a comment"}
          onChange={(event) => {
            setUserComment(event.target.value);
          }}
        />
        <button className="btn btn-primary">Post comment</button>
      </div>
    </form>
  );
}

export default CommentAdder;
