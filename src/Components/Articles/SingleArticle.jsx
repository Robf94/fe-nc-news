import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import dateFormat from "dateformat";
import { fetchArticleById } from "../../api";
import Loader from "../Loader";

function SingleArticle() {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { article_id } = useParams();

  const formatDate = dateFormat(article.created_at, "dddd, dd mmmm yyyy 'at' H:MM");

  const checkSingleVote = article.votes === 1 ? "like" : "likes";

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    fetchArticleById(article_id)
      .then((articleData) => {
        console.log(articleData);
        setArticle(articleData);
        setTimeout(() => setIsLoading(false), 500);
      })
      .catch((err) => {
        setIsError(true);
        console.log(err);
      });
  }, [article_id]);

  if (isError) {
    return <h2>Something went wrong!</h2>;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="article-container prose">
      <h1>{article.title}</h1>
      <img src={article.article_img_url} alt="" />
      <p>{formatDate}</p>
      <p>{article.body}</p>
      <p>
        {article.votes} {checkSingleVote}
      </p>
      <button class="btn btn-primary">Like</button>
      <button class="btn btn-secondary">Comments</button>
    </div>
  );
}

export default SingleArticle;
