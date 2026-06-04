import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/Footer";

import Home from "./pages/home";
import WorkerRegister from "./pages/WorkerRegister";
import Workers from "./pages/Workers";
import WorkerDetails from "./pages/WorkerDetails";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/worker-register" element={<WorkerRegister />} />
        <Route path="/workers" element={<Workers />} />
        <Route path="/worker/:id" element={<WorkerDetails />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;