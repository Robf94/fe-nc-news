import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchCommentsByArticleId } from "../../api";
import CommentCard from "./CommentCard";
import CommentAdder from "./CommentAdder";
import Loader from "../Loader";

function Comments() {
  const [comments, setComments] = useState([]);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchCommentsByArticleId(article_id)
      .then((comments) => {
        setComments(comments);
        setIsError(null);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(err);
      });
  }, [article_id]);

  // Advanced - if current user logged in, then said user can delete their own comments
  // Advanced - add infinite scroll for comments

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <p>Could not load comments</p>;
  }

  return (
    <main className="mx-2 my-10">
      <CommentAdder article_id={article_id} setComments={setComments} />
      {comments.map((comment) => (
        <CommentCard key={comment.comment_id} comment={comment} setComments={setComments} />
      ))}
    </main>
  );
}

export default Comments;
