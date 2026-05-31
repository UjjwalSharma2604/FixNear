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
        "http://localhost:5000/api/workers",
        formData
      );

      alert(res.data.message);

      setFormData({
        name: "",
        phone: "",
        service: "",
        experience: "",
        city: "",
        charges: "",
      });
    } catch (error) {
      console.log(error);
      alert("Error registering worker");
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
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />

        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
        >
          <option value="">Select Service</option>
          <option>Electrician</option>
          <option>Plumber</option>
          <option>Carpenter</option>
          <option>Painter</option>
          <option>Cleaner</option>
        </select>

        <input
          type="number"
          name="experience"
          placeholder="Experience"
          value={formData.experience}
          onChange={handleChange}
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
        />

        <input
          type="number"
          name="charges"
          placeholder="Service Charges"
          value={formData.charges}
          onChange={handleChange}
        />

        <button type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default WorkerRegister;