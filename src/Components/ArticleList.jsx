import { useState, useEffect } from "react";
import { fetchArticles } from "../api";
import ArticlesCard from "./ArticlesCard";

function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    fetchArticles()
      .then((articleData) => {
        setArticles(articleData);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      });
  }, []);

  return (
    <>
      {articles.map((article) => (
        <ArticlesCard key={article.article_id} cardImg={article.article_img_url} subtitle={article.author} commentCount={article.comment_count} created={article.created_at} cardTitle={article.title} topic={article.topic} votes={article.votes} />
      ))}
    </>
  );
}

export default ArticleList;
