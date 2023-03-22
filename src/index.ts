import {ApolloServer} from "@apollo/server"
import {startStandaloneServer} from "@apollo/server/standalone"
import env from "./config.js";
const port=env.PORT

const server=new ApolloServer({
    typeDefs:[]
});

const {url}=await startStandaloneServer(server,{
    listen:{port}
});
console.log("server started at "+ url)
