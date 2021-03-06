const mongoose = require("mongoose");

const JobSchema = mongoose.Schema(
  {
    title: String,
    description: String,
    skills: [String],
    company: String,
    city: String,
    country: String,
    isFullTime: Boolean,
    isPartTime: Boolean,
    isRemote: Boolean,
    isPermanent: Boolean,
    isContract: Boolean,
    level: Number,
    tags: [String],
    link: String,
    createdBy: Object
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Job", JobSchema);
