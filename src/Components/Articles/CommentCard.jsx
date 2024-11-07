import dateFormat from "dateformat";

function CommentCard({ author, created_at, body }) {
  return (
    <div className="card bg-primary my-3">
      <div className="card-body">
        <h3 className="card-title m-0">{author}</h3>
        <h4>{dateFormat(created_at, "dddd, dd mmmm yyyy 'at' H:MM")}</h4>
        <p className="m-0">{body}</p>
      </div>
    </div>
  );
}

export default CommentCard;
