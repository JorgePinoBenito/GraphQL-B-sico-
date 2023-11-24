import { getPets, getPetsByBreed } from "./query.ts";
import { createPet, deletePet, updatePet } from "./mutation.ts";

export const resolvers = {
  Query: {
    getPets: getPets,
    getPetsByBreed: getPetsByBreed,
  },
  Mutation: {
    addPet: createPet,
    deletePet: deletePet,
    updatePet: updatePet,
  },
};
