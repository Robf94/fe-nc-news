import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import dateFormat from "dateformat";
import { fetchArticleById } from "../../api";
import Loader from "../Loader";
import Comments from "./Comments";
import VoteButton from "../VoteButton";
import ErrorPage from "../ErrorPage";

function SingleArticle() {
  const [article, setArticle] = useState({});
  const [newVote, setNewVote] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { article_id } = useParams();

  const formatDate = dateFormat(article.created_at, "dddd, dd mmmm yyyy 'at' H:MM");

  const checkSingleVote = article.votes === 1 ? "vote" : "votes";

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    fetchArticleById(article_id)
      .then((articleData) => {
        setArticle(articleData);
        setTimeout(() => setIsLoading(false), 500);
      })
      .catch((err) => {
        setIsError(true);
      });
  }, []);

  if (isError) {
    return <ErrorPage />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="article-container flex flex-col prose m-auto">
      <h1 className="mx-2">{article.title}</h1>
      <img
        src={article.article_img_url}
        alt="Article image"
        className="object-cover w-full h-full m-0"
      />
      <div className="text-container mx-2 md:mx-0">
        <p>{formatDate}</p>
        <p>{article.body}</p>
      </div>
      <div className="btn-vote-container flex flex-col items-center justify-center w-full">
        <VoteButton
          articleId={article.article_id}
          setNewVote={setNewVote}
          currentVotes={article.votes}
        />
        <h3 className="w-1/3 m-0 text-center">
          {article.votes + newVote} {checkSingleVote}
        </h3>
      </div>
      <Comments />
    </div>
  );
}

export default SingleArticle;
