import { GraphQLError } from "graphql";
import PetModel from "../db/schemas.ts";

export const createPet = async (
  _: unknown,
  args: { name: string; breed: string }
) => {
  const pet = await PetModel.create({
    name: args.name,
    breed: args.breed,
  });
  return pet;
};

export const deletePet = async (_: unknown, args: { id: string }) => {
  const pet = await PetModel.findByIdAndDelete(args.id);
  if (!pet) {
    throw new GraphQLError(`No pet found with id ${args.id}`, {
      extensions: { code: "NOT_FOUND" },
    });
  }
  return pet;
};

export const updatePet = async (
  _: unknown,
  args: { id: string; name: string; breed: string }
) => {
  const pet = await PetModel.findByIdAndUpdate(
    args.id,
    { name: args.name, breed: args.breed },
    { new: true }
  );
  if (!pet) {
    throw new GraphQLError(`No pet found with id ${args.id}`, {
      extensions: { code: "NOT_FOUND" },
    });
  }
  return pet;
};
