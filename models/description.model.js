const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const descNameSchema = new Schema(
  {
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const CityDesc = mongoose.model("CityDesc", descNameSchema);
module.exports = CityDesc;
