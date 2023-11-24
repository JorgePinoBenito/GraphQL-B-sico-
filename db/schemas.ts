import mongoose from "npm:mongoose@7.6.3";
import { Pet } from "../types.ts";

const Schema = mongoose.Schema;

const PetSchema = new Schema(
  {
    name: String,
    breed: String,
  },
  { timestamps: true }
);

export type PetModelType = Pet & mongoose.Document;

export default mongoose.model<PetModelType>("pets", PetSchema);
