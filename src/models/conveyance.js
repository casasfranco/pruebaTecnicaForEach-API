import mongoose, { Schema } from "mongoose";

const conveyanceSchema = new Schema(
  {
    name: { type: String, maxlength: 60, required: true },
    fECO2: { type: Number, required: true, min: 0},
  },
  { timestamps: true }
);

const Conveyance = mongoose.model("conveyance", conveyanceSchema);

export default Conveyance;
