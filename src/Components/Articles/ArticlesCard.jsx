import { Link } from "react-router-dom";

function ArticlesCard(props) {
  const { articleId, cardImg, subtitle, cardTitle, topic } = props;
  return (
    <Link to={`/articles/${articleId}`}>
      <article className="card bg-base-100 shadow-xl mx-10 my-10 card-bg">
        <figure>
          <img src={cardImg} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {cardTitle}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{subtitle}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{topic}</div>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default ArticlesCard;
