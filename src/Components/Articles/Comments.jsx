import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchCommentsByArticleId } from "../../api";
import CommentCard from "./CommentCard";

function Comments() {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    fetchCommentsByArticleId(article_id).then((commentsData) => {
      setComments(commentsData);
    });
  }, [article_id]);

  // Advanced - if current user logged in, then said user can delete their own comments
  // Advanced - add infinite scroll for comments

  return (
    <main className="m-2">
      {comments.map((comment) => (
        <CommentCard key={comment.comment_id} author={comment.author} created_at={comment.created_at} body={comment.body} />
      ))}
    </main>
  );
}

export default Comments;
