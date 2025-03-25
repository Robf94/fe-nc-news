import { useEffect } from "react";

function SortBy(props) {
  const { sortQuery, setSortQuery, orderQuery, setOrderQuery, setSearchParams } = props;

  useEffect(() => {
    const params = {};
    if (orderQuery) params.order = orderQuery;
    if (sortQuery) params.sort_by = sortQuery;

    setSearchParams(params);
  }, [orderQuery, sortQuery]);

  const formatOrder = (order) => {
    return order === "ASC" ? "ascending" : order === "DESC" ? "descending" : null;
  };

  const formatSortValues = (value) => {
    return value === "date_created"
      ? "date created"
      : value === "title"
      ? "title"
      : value === "votes"
      ? "votes"
      : value === "comment_count"
      ? "total comments"
      : "";
  };

  return (
    <>
      <div className="flex justify-center">
        <select
          className="select w-1/4"
          onChange={(event) => setSortQuery(event.target.value)}
        >
          <option
            disabled
            default
            selected
          >
            Sort by:
          </option>
          <option
            value={"date_created"}
            key={"date"}
          >
            Date
          </option>
          <option
            value={"title"}
            key={"title"}
          >
            Name
          </option>
          <option
            value={"votes"}
            key={"votes"}
          >
            Votes
          </option>
          <option
            value={"comment_count"}
            key={"comments"}
          >
            Number of comments
          </option>
        </select>

        <select
          className="select w-1/4"
          onChange={(event) => setOrderQuery(event.target.value)}
        >
          <option
            disabled
            default
            selected
          >
            Order:
          </option>
          <option value={"DESC"}>Descending</option>
          <option value={"ASC"}>Ascending</option>
        </select>
      </div>
      <h2 className="w-full text-center">
        {sortQuery || orderQuery
          ? `Sorted by ${formatSortValues(sortQuery) || ""} ${formatOrder(orderQuery) || ""}`
          : ""}
      </h2>
    </>
  );
}

export default SortBy;
