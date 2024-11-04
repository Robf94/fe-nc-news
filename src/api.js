import axios from "axios";

const api = axios.create({
  baseURL: "https://be-nc-news-rf-1.onrender.com/api",
});

function fetchArticles() {
  return api.get("/articles")
    .then(({ data }) => {
    return data.articles;
  })
}

export { fetchArticles }