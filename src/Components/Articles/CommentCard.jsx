import { useContext } from "react";
import dateFormat from "dateformat";
import { deleteComment } from "../../api";
import { grumpy19 } from "../../context/loggedInUser";
// import DeleteButton from "../DeleteButton";

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
    <div className="card bg-primary my-3">
      <div className="card-body">
        <h3 className="card-title m-0">{author}</h3>
        <h4>{dateFormat(created_at, "dddd, dd mmmm yyyy 'at' H:MM")}</h4>
        <p className="m-0">{body}</p>
        {/* <DeleteButton /> */}
        {author === loggedInUser.username ? (
          <button className="btn btn-secondary" onClick={removeComment}>
            Delete
          </button>
        ) : null}
        {/* How could I create a separate DeleteButton component without prop drilling? */}
      </div>
    </div>
  );
}

export default CommentCard;
