import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchCommentsByArticleId } from "../../api";
import CommentCard from "./CommentCard";
import CommentAdder from "./CommentAdder";

function Comments() {
  const [comments, setComments] = useState([]);
  const [isError, setIsError] = useState(null);
  const { article_id } = useParams();

  useEffect(() => {
    fetchCommentsByArticleId(article_id)
      .then((comments) => {
        setComments(comments);
        setIsError(null);
      })
      .catch((err) => {
        setIsError(err);
      });
  }, [article_id]);

  // Advanced - if current user logged in, then said user can delete their own comments
  // Advanced - add infinite scroll for comments

  const addComment = (comment) => {
    setComments((prevComments) => [...prevComments, comment]);
  };

  return (
    <main className="m-2">
      <CommentAdder article_id={article_id} addComment={addComment} />
      {comments.map((comment) => (
        <CommentCard key={comment.comment_id} author={comment.author} created_at={comment.created_at} body={comment.body} />
      ))}
    </main>
  );
}

export default Comments;
