import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { fetchArticles } from "../../api";
import ArticlesCard from "./ArticlesCard";
import Loader from "../Loader";
import SortBy from "../SortBy";
import ErrorPage from "../ErrorPage";

function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortQuery, setSortQuery] = useState(searchParams.get("sort_by") || null);
  const [orderQuery, setOrderQuery] = useState(searchParams.get("order") || null);

  const { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    if (sortQuery) {
    }
    fetchArticles(topic, sortQuery, orderQuery)
      .then((articlesData) => {
        setArticles(articlesData);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      });
  }, [topic, sortQuery, orderQuery]);

  if (isError) {
    return <ErrorPage />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main className="mx-2 md:mx-8 lg:mx-32">
      <h1 className="text-center text-xl font-bold">All {topic} articles</h1>
      <SortBy
        sortQuery={sortQuery}
        setSortQuery={setSortQuery}
        orderQuery={orderQuery}
        setOrderQuery={setOrderQuery}
        setSearchParams={setSearchParams}
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
        {articles.map((article) => (
          <ArticlesCard
            key={article.article_id}
            articleId={article.article_id}
            cardImg={article.article_img_url}
            subtitle={article.author}
            commentCount={article.comment_count}
            created={article.created_at}
            cardTitle={article.title}
            topic={article.topic}
            votes={article.votes}
          />
        ))}
      </div>
    </main>
  );
}

export default ArticleList;
