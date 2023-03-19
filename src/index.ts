import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import schema from "./graphql/index.js";

const server = new ApolloServer({
  schema,
});
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});
