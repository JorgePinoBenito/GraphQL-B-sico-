export const typeDefs = `#graphql
  type Pet {
    id: ID!
    name: String!
    breed: String!
  }
  type Query {
    getPets: [Pet!]!
    getPetsByBreed(breed: String!): [Pet!]!
  }
  type Mutation {
    addPet(id: ID!, name: String!, breed: String!): Pet!
    deletePet(id: ID!): Pet!
    updatePet(id: ID!, name: String!, breed: String!): Pet!
  }
`;
