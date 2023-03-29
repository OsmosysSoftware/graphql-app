import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import env from "./env.js";
import schema from "./graphql/index.js";

const port = env.PORT;

const server = new ApolloServer({
  schema,
});
const { url } = await startStandaloneServer(server, {
  listen: { port },
});

console.log(`server started at ${url}`);
