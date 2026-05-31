import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>Find Trusted Workers Near You</h1>

      <p>
        Electrician, Plumber, Carpenter, Painter and many more services.
      </p>

      <Link to="/workers">
        <button className="explore-btn">
          Explore Workers
        </button>
      </Link>

      <div className="categories">
        <Link to="/workers?service=Electrician">
          ⚡ Electrician
        </Link>

        <Link to="/workers?service=Plumber">
          🚰 Plumber
        </Link>

        <Link to="/workers?service=Carpenter">
          🪚 Carpenter
        </Link>

        <Link to="/workers?service=Painter">
          🎨 Painter
        </Link>

        <Link to="/workers?service=AC Repair">
          ❄ AC Repair
        </Link>
      </div>
    </div>
  );
}

export default Home;