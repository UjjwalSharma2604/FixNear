const mongoose = require("mongoose");

const workerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
  },

  service: {
    type: String,
    required: true,
  },

  experience: {
    type: Number,
    required: true,
  },

  city: {
    type: String,
    required: true,
  },

  charges: {
    type: Number,
    required: true,
  },
});

const Worker = mongoose.model("Worker", workerSchema);

module.exports = Worker;