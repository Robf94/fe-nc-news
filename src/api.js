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

function fetchArticleById(article_id) {
  return api.get(`/articles/${article_id}`)
    .then(({ data }) => {
    return data.article
  })
}

export { fetchArticles, fetchArticleById };