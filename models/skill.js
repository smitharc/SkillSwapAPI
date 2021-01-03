const mongoose = require("mongoose");
const { timeStamp } = require("console");

const skillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
      unique: true,
    },
  },
  { timestamps: true }
);


module.exports = mongoose.model("Skill", skillSchema);
