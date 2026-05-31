import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

function Workers() {
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const serviceFilter = query.get("service") || "";

  const [workers, setWorkers] = useState([]);
  const [search, setSearch] = useState(serviceFilter);

  useEffect(() => {
    setSearch(serviceFilter);
  }, [serviceFilter]);

  useEffect(() => {
    axios
      .get("https://fixnear-backend.onrender.com/api/workers")
      .then((res) => setWorkers(res.data))
      .catch((err) => console.log(err));
  }, []);

  const filteredWorkers = workers.filter(
    (worker) =>
      worker.service.toLowerCase().includes(search.toLowerCase()) ||
      worker.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="workers-container">
      <h1>All Workers</h1>

      <input
        type="text"
        placeholder="Search by service or city..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="workers-grid">
        {filteredWorkers.map((worker) => (
          <div className="worker-card" key={worker._id}>
            <h2>{worker.name}</h2>

            <p>
              <strong>Service:</strong> {worker.service}
            </p>

            <p>
              <strong>Experience:</strong> {worker.experience} years
            </p>

            <p>
              <strong>City:</strong> {worker.city}
            </p>

            <p>
              <strong>Charges:</strong> ₹{worker.charges}
            </p>

            <p>
              <strong>Phone:</strong> {worker.phone}
            </p>

            <div className="btn-group">
              <a href={`tel:${worker.phone}`}>
                <button>📞 Call Now</button>
              </a>

              <a
                href={`https://wa.me/91${worker.phone}`}
                target="_blank"
                rel="noreferrer"
              >
                <button>💬 WhatsApp</button>
              </a>

              <Link to={`/worker/${worker._id}`}>
                <button>View Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Workers;