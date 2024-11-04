import { Link } from "react-router-dom";

function ArticlesCard(props) {
  const { cardImg, subtitle, commentCount, created, cardTitle, topic, votes } = props;

  console.log(props);

  return (
    // <Link>

    <article className="card bg-base-100 shadow-xl mx-10 my-10">
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
  );
}

export default ArticlesCard;
