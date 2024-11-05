import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import BreakingNews from "./BreakingNews";
import Loader from "./Loader";
import ArticlesCard from "./Articles/ArticlesCard";

function Homepage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main className="prose mx-2">
      <h1>Welcome to NC News</h1>
      <h2>For only the most current of affairs!</h2>
      {/* <BreakingNews /> */}
      <h1>Breaking news:</h1>
      <ArticlesCard />
      <Link to="/articles">Click here to view all articles</Link>
    </main>
  );
}

export default Homepage;
