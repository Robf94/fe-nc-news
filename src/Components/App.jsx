import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Homepage from "./Homepage";
import TopicsList from "./TopicsList";
import ArticleList from "./Articles/ArticleList";
import SingleArticle from "./Articles/SingleArticle";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/topics" element={<TopicsList />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
    </>
  );
}

export default App;
