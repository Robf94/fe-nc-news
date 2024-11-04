import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Homepage from "./Homepage";
import TopicsList from "./TopicsList";
import ArticleList from "./ArticleList";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/topics" element={<TopicsList />} />
        <Route path="/articles" element={<ArticleList />} />
      </Routes>
    </>
  );
}

export default App;
