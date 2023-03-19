import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import schema from "./graphql/index.js";

const port = 4000;

const server = new ApolloServer({
  schema,
});
const { url } = await startStandaloneServer(server, {
  listen: { port },
});
console.log(`aserver started at ${url}:${port}`);
