import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import dateFormat from "dateformat";
import { fetchCommentsByArticleId } from "../../api";
import LikeButton from "../LikeButton";

function Comments() {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    fetchCommentsByArticleId(article_id).then((commentsData) => {
      setComments(commentsData);
    });
  }, []);

  const comment = comments.map((comment) => {
    return (
      <div key={comment.comment_id} className="card bg-primary my-3">
        <div className="card-body">
          <h3 className="card-title m-0">{comment.author}</h3>
          <h4>{dateFormat(comment.created_at, "dddd, dd mmmm yyyy 'at' H:MM")}</h4>
          <p className="m-0">{comment.body}</p>
          <LikeButton />
        </div>
      </div>
    );
  });

  // Is it better to write the map up here and then pass it down into the return statement below, or just write the whole thing in the return statement below?

  // Advanced - if current user logged in, then said user can delete their own comments
  // Advanced - add infinite scroll for comments

  return <main className="m-2">{comment}</main>;
}

export default Comments;
