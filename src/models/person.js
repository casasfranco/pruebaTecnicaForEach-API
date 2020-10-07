import mongoose, { Schema } from "mongoose";

const personSchema = new Schema(
  {
    name: { type: String, maxlength: 30, required: true },
    lastName: { type: String, maxlength: 30, required: true },
  },
  { timestamps: true }
);

const Person = mongoose.model("person", personSchema);

export default Person;
