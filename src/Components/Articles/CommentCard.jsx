import { useContext } from "react";
import dateFormat from "dateformat";
import { deleteComment } from "../../api";
import { grumpy19 } from "../../context/loggedInUser";

function CommentCard({ comment, setComments }) {
  const { author, created_at, body, comment_id } = comment;

  const loggedInUser = useContext(grumpy19);

  const removeComment = () => {
    deleteComment(comment_id)
      .then(() => {
        console.log("Comment deleted");
        setComments((currentComments) => {
          return currentComments.filter((comment) => comment.comment_id !== comment_id);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="card shadow-lg my-3">
      <div className="card-body">
        <h3 className="card-title m-0">{author}</h3>
        <h4>{dateFormat(created_at, "dddd, dd mmmm yyyy 'at' HH:MM")}</h4>
        <p className="m-0">{body}</p>
        {author === loggedInUser.username ? (
          <button className="btn btn-accent rounded-full" onClick={removeComment}>
            Delete
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default CommentCard;
