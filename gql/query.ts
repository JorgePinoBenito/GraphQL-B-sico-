import PetModel from "../db/schemas.ts";

export const getPets = async () => {
  const pets = await PetModel.find();
  return pets;
};

export const getPetsByBreed = async (_: unknown, args: { breed: string }) => {
  const pets = await PetModel.find({ breed: args.breed });
  return pets;
};
