const express = require("express");
const router = express.Router();

const Worker = require("../models/Worker");

// Register Worker
router.post("/", async (req, res) => {
  try {
    const worker = new Worker(req.body);
    await worker.save();

    res.status(201).json({
      success: true,
      message: "Worker Registered Successfully",
      worker,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Get All Workers
router.get("/", async (req, res) => {
  try {
    const workers = await Worker.find();
    res.json(workers);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Get Worker By ID
router.get("/:id", async (req, res) => {
  try {
    const worker = await Worker.findById(req.params.id);
    res.json(worker);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;