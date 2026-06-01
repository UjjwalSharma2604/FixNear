import { useState } from "react";
import axios from "axios";

function WorkerRegister() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    experience: "",
    city: "",
    charges: "",
  });

  const API_URL = "https://fixnear-backend.onrender.com";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${API_URL}/api/workers`,
        formData
      );

      alert("Worker Registered Successfully ✅");

      setFormData({
        name: "",
        phone: "",
        service: "",
        experience: "",
        city: "",
        charges: "",
      });
    } catch (error) {
      console.error(error);
      alert("Error registering worker ❌");
    }
  };

  return (
    <div className="form-container">
      <h1>Worker Registration</h1>

      <form className="worker-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option value="">Select Service</option>
          <option value="Electrician">Electrician</option>
          <option value="Plumber">Plumber</option>
          <option value="Carpenter">Carpenter</option>
          <option value="Painter">Painter</option>
          <option value="Cleaner">Cleaner</option>
        </select>

        <input
          type="number"
          name="experience"
          placeholder="Experience (Years)"
          value={formData.experience}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="charges"
          placeholder="Service Charges"
          value={formData.charges}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Register Worker
        </button>
      </form>
    </div>
  );
}

export default WorkerRegister;