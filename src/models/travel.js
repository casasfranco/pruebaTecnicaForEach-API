import mongoose, { Schema } from "mongoose";
import Conveyance from "./conveyance";
import Person from "./person";

const travelSchema = new Schema(
  {
    typeOfTrip: { type: Boolean, required: true },
    conveyance: { type: Schema.ObjectId, ref: "Conveyance" },
    distance: { type: Number, required: true, min: 0 },
    arrivalAddress: { type: String, maxlength: 40, required: true },
    departureAddress: { type: String, maxlength: 40, required: true },
    listOfPersonsSelected: [{ type: Schema.ObjectId, ref: "Person" }],
    kgCO2PerPerson: { type: Number, required: true, min: 0 },
    dateTimeTravel: { type: String, required: true, maxlength: 120 },
  },
  { timestamps: true }
);

const Travel = mongoose.model("travel", travelSchema);

export default Travel;
