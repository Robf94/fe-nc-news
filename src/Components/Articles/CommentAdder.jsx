import { useState, useContext } from "react";
import { postComment } from "../../api";
import { grumpy19 } from "../../context/loggedInUser";

function CommentAdder({ article_id, setComments }) {
  const [userComment, setUserComment] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [isError, setIsError] = useState(false);
  // Could alter this further with context - one to sort further down the line (see screenshots)

  const loggedInUser = useContext(grumpy19)

  return (
    <form
      className="comment-adder"
      onSubmit={(event) => {
        setIsError(false);
        event.preventDefault();
        setIsPosting(true);
        postComment(article_id, userComment, loggedInUser.username)
          .then((comment) => {
            setIsPosting(false);
            setComments((prevComments) => [comment, ...prevComments]);
          })
          .catch((err) => {
            setIsPosting(false);
            setIsError(true);
          });
        setUserComment("");
      }}>
      <div className="comment-input-button h-full mb-5">
        <textarea
          type="text"
          className={isError ? "textarea textarea-bordered textarea-error w-full" : "textarea textarea-secondary w-full"}
          id="new-comment"
          value={userComment}
          placeholder={isError ? "Comment cannot be empty!" : "Add a comment"}
          onChange={(event) => {
            setUserComment(event.target.value);
          }}
        />
        <button className="btn btn-accent rounded-full w-full">Post comment</button>
      </div>
    </form>
  );
}

export default CommentAdder;
