import { useState } from "react";
import { updateArticleVotes } from "../api";

function Votebutton({ articleId, currentVotes, setNewVote }) {
  const [isVoted, setIsVoted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleVote = () => {
    setIsError(false);
    if (isVoted) {
      setNewVote((currentNewVote) => currentNewVote - 1);
      setIsVoted(false);
      updateArticleVotes(articleId, -1)
        .then(() => {
          alert(`Vote removed`);
        })
        .catch((err) => {
          setIsError(true);
          console.log(err, "Error: vote not removed");
        });
    } else {
      setNewVote((currentNewVote) => currentNewVote + 1);
      setIsVoted(true);
      updateArticleVotes(articleId, 1)
        .then(() => {
          console.log(`Vote added (${currentVotes + 1})`);
        })
        .catch((err) => {
          setIsError(true);
          console.log(err, "Error: vote not added");
        });
    }
  };

  if (isError) {
    return <h2>Something went wrong!</h2>;
  }

  // Advanced - remember whether current used has voted post, so they cannot vote it multiple times after refreshing article

  return (
    <div className="w-1/3">
      <button className="btn btn-primary w-full" onClick={handleVote}>
        {isVoted ? "Unvote" : "Vote"}
      </button>
    </div>
  );
}

export default Votebutton;
