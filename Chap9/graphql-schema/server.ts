import express from "express";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { makeExecutableSchema } from "@graphql-tools/schema";
import http from "http";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";

const app = express();
const httpServer = http.createServer(app);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const apolloServer = new ApolloServer({
  schema,
  context: ({ req, res }: any) => ({ req, res }),
  csrfPrevention: true,
  cache: "bounded",
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

apolloServer.start().then(() => {
  apolloServer.applyMiddleware({ app, cors: false });
  httpServer.listen({ port: 8000 }, () => {
    console.log("GraphQL server ready.");
  });
});
