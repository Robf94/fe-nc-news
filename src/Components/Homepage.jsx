import { Link } from "react-router-dom"
import BreakingNews from "./BreakingNews"

function Homepage() {
  return (
    <main className="prose">
      <h1>Welcome to NC News</h1>
      <h2>For only the most current of affairs!</h2>
      <BreakingNews />
      <Link to="/articles">Click here to view all articles</Link>
    </main>
  )
}

export default Homepage