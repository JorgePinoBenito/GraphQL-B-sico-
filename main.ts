import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./gql/types.ts";
import { resolvers } from "./gql/resolvers.ts";

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);
