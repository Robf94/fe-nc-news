import { useState } from "react";
import { postComment } from "../../api";

function CommentAdder({ article_id, addComment }) {
  const [userComment, setUserComment] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <form
      className="comment-adder"
      onSubmit={(event) => {
        event.preventDefault();
        setIsPosting(true);
        postComment(article_id, userComment)
          .then((comment) => {
            setIsPosting(false);
            addComment(comment);
          })
          .catch((err) => {
            setIsPosting(false);
            setIsError(true);
          });
        setUserComment("");
      }}>
      <label htmlFor="new-comment">Add a comment</label>
      <div className="comment-input-button">
        <input
          type="text"
          id="new-comment"
          value={userComment}
          onChange={(event) => {
            setUserComment(event.target.value);
          }}
        />
        <button>Post comment</button>
      </div>
    </form>
  );
}

export default CommentAdder;
