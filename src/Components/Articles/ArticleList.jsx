import { useState, useEffect } from "react";
import { fetchArticles } from "../../api";
import ArticlesCard from "./ArticlesCard";
import Loader from "../Loader";

function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    fetchArticles()
      .then((articlesData) => {
        setArticles(articlesData);
        setTimeout(() => setIsLoading(false), 1000);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      });
  }, []);

  if (isError) {
    return <h2>Something went wrong!</h2>;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main className="mx-2">
      {articles.map((article) => (
        <ArticlesCard key={article.article_id} articleId={article.article_id} cardImg={article.article_img_url} subtitle={article.author} commentCount={article.comment_count} created={article.created_at} cardTitle={article.title} topic={article.topic} votes={article.votes} />
      ))}
    </main>
  );
}

export default ArticleList;
