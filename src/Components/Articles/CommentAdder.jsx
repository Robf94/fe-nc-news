import { useState, useContext } from "react";
import { postComment } from "../../api";
import { grumpy19 } from "../../context/loggedInUser";

function CommentAdder({ article_id, setComments }) {
  const [userComment, setUserComment] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [isError, setIsError] = useState(false);

  const loggedInUser = useContext(grumpy19);

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
      }}
    >
      <div className="comment-input-button h-full mb-6">
        <textarea
          type="text"
          className={
            isError
              ? "textarea textarea-bordered textarea-error w-full"
              : "textarea textarea-primary w-full"
          }
          id="new-comment"
          value={userComment}
          placeholder={isError ? "Comment cannot be empty!" : "Add a comment"}
          onChange={(event) => {
            setUserComment(event.target.value);
          }}
        />
        <button className="btn btn-primary w-full mt-2">Post comment</button>
      </div>
    </form>
  );
}

export default CommentAdder;
