import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="navbar bg-base-100 nav">
        <div className="flex-1">
          <Link className="btn btn-ghost text-xl" id="nav-heading" to="/">
            NC News
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {/* <li>
              <Link to="/topics">Topics</Link>
            </li> */}
            <li>
              <details>
                <summary>Topics</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
