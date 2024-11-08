import { useEffect, useState } from "react";

function SortBy(props) {
  const [orderBy, setOrderBy] = useState([]);
  const [sort, setSort] = useState([]);
  const { sortQuery, setSortQuery, orderQuery, setOrderQuery, setSearchParams } = props;

  useEffect(() => {
    const params = {};
    if (orderQuery) params.order = orderQuery;
    if (sortQuery) params.sort_by = sortQuery;

    setSearchParams(params);
  }, [orderQuery, sortQuery]);
  return (
    <>
      <select className="select w-1/2" onChange={(event) => setSortQuery(event.target.value)}>
        <option disabed selected>
          Sort by:
        </option>
        <option value={"created_at"} key={"date"}>
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
        <option disabled selected>
          Order:
        </option>
        <option value={"DESC"}>Descending</option>
        <option value={"ASC"}>Ascending</option>
      </select>
    </>
  );
}

export default SortBy;
