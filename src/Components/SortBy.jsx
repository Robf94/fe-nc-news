import { useEffect } from "react";

function SortBy(props) {
  const { sortQuery, setSortQuery, orderQuery, setOrderQuery, setSearchParams } = props;

  useEffect(() => {
    const params = {};
    if (orderQuery) params.order = orderQuery;
    if (sortQuery) params.sort_by = sortQuery;

    setSearchParams(params);
  }, [orderQuery, sortQuery]);

  return (
    <>
      <select className="select w-1/2" value={sortQuery} onChange={(event) => setSortQuery(event.target.value)}>
        <option disabled default selected>
          Sort by:
        </option>
        <option value={"date_created"} key={"date"}>
          Date
        </option>
        <option value={"title"} key={"title"}>
          Name
        </option>
        <option value={"votes"} key={"votes"}>
          Votes
        </option>
        <option value={"comment_count"} key={"comments"}>
          Number of comments
        </option>
      </select>

      <select className="select w-1/2" onChange={(event) => setOrderQuery(event.target.value)}>
        <option disabled default selected>
          Order:
        </option>
        <option value={"DESC"}>Descending</option>
        <option value={"ASC"}>Ascending</option>
      </select>

      <h2>
        {sortQuery || orderQuery ? `Sorted by ${sortQuery}, ${orderQuery}` : ""}
        {/* Sorted by {sortQuery}, {orderQuery} */}
      </h2>
    </>
  );
}

export default SortBy;
