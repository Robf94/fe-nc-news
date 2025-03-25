import axios from "axios";

const api = axios.create({
  baseURL: "https://be-nc-news-rf-1.onrender.com/api",
});

function fetchArticles(topic, sort_by, order) {
  return api
    .get("/articles", {
      params: {
        topic,
        sort_by,
        order,
      },
    })
    .then(({ data }) => {
      return data.articles;
    });
}

function fetchArticleById(article_id) {
  return api.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
}

function fetchCommentsByArticleId(article_id) {
  return api.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
}

function updateArticleVotes(article_id, inc_votes) {
  return api.patch(`/articles/${article_id}`, {
    inc_votes: inc_votes,
  });
}

function postComment(article_id, commentData, author) {
  return api
    .post(`/articles/${article_id}/comments`, {
      author: author,
      body: commentData,
    })
    .then(({ data }) => {
      return data.comment;
    });
}

function deleteComment(comment_id) {
  return api.delete(`/comments/${comment_id}`);
}

export {
  fetchArticles,
  fetchArticleById,
  fetchCommentsByArticleId,
  updateArticleVotes,
  postComment,
  deleteComment,
};
