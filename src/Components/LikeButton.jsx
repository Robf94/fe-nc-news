import { useEffect, useState } from "react";
import { updateArticleLikes } from "../api";
import { useParams } from "react-router-dom";

function LikeButton({ setNewVote }) {
  const [isLiked, setIsLiked] = useState(false);

  const { article_id } = useParams();

  const handleLike = () => {
    if (isLiked) {
      updateArticleLikes(article_id);
      setNewVote((currentNewVote) => {
        return currentNewVote - 1;
      });
      setIsLiked(false);
    } else {
      updateArticleLikes(article_id);
      setNewVote((currentNewVote) => {
        return currentNewVote + 1;
      });
      setIsLiked(true);
    }
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={handleLike}>
        {isLiked ? "Unlike" : "Like"}
      </button>
    </div>
  );
}

export default LikeButton;
