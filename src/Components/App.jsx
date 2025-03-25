import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import ArticleList from "./Articles/ArticleList";
import SingleArticle from "./Articles/SingleArticle";
import ErrorPage from "./ErrorPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ArticleList />} />
        {/* <Route path="/topics" element={<TopicsList />} /> */}
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route path="/articles/:article_id/comments" element={<SingleArticle />} />
        <Route path="/topics/:topic" element={<ArticleList />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
