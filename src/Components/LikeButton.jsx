import { useState } from "react";
import { updateArticleLikes } from "../api";

function Likebutton({ articleId, currentVotes, setNewVote }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleLike = () => {
    setIsError(false);
    if (isLiked) {
      setNewVote((currentNewVote) => currentNewVote - 1);
      setIsLiked(false);
      updateArticleLikes(articleId, -1)
        .then(() => {
          console.log(`Like removed (${currentVotes})`);
        })
        .catch((err) => {
          setIsError(true);
          console.log(err, "Error: like not removed");
        });
    } else {
      setNewVote((currentNewVote) => currentNewVote + 1);
      setIsLiked(true);
      updateArticleLikes(articleId, 1)
        .then(() => {
          console.log(`Like added (${currentVotes + 1})`);
        })
        .catch((err) => {
          setIsError(true);
          console.log(err, "Error: like not added");
        });
    }
  };

  if (isError) {
    return <h2>Something went wrong!</h2>;
  }

  // Advanced - remember whether current used has liked post, so they cannot like it multiple times after refreshing article

  return (
    <div>
      <button className="btn btn-primary" onClick={handleLike}>
        {isLiked ? "Unlike" : "Like"}
      </button>
    </div>
  );
}

export default Likebutton;
