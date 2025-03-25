import { Link } from "react-router-dom";

function ArticlesCard(props) {
  const { articleId, cardImg, subtitle, cardTitle, topic } = props;
  return (
    <Link to={`/articles/${articleId}`}>
      <article className="card bg-base-100 shadow-xl card-bg flex flex-col h-full">
        <figure className="w-full h-1/2 flex justify-center items-center overflow-hidden">
          <img
            src={cardImg}
            alt=""
            className="h-full w-full object-cover"
          />
        </figure>
        <div className="card-body flex flex-grow">
          <h2 className="card-title">{cardTitle}</h2>
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
