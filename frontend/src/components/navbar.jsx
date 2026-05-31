import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>FixNear</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/workers">Workers</Link>
        <Link to="/worker-register">Register Worker</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;