import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function WorkerDetails() {
  const { id } = useParams();
  const [worker, setWorker] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/workers/${id}`)
      .then((res) => setWorker(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!worker) return <h2>Loading...</h2>;

  return (
    <div className="worker-card">
      <h1>{worker.name}</h1>

      <p><strong>Service:</strong> {worker.service}</p>
      <p><strong>Experience:</strong> {worker.experience} years</p>
      <p><strong>City:</strong> {worker.city}</p>
      <p><strong>Charges:</strong> ₹{worker.charges}</p>
      <p><strong>Phone:</strong> {worker.phone}</p>

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
    </div>
  );
}

export default WorkerDetails;