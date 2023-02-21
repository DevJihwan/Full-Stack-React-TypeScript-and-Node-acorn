"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const apollo_server_core_1 = require("apollo-server-core");
const schema_1 = require("@graphql-tools/schema");
const http_1 = __importDefault(require("http"));
const typeDefs_1 = __importDefault(require("./typeDefs"));
const resolvers_1 = __importDefault(require("./resolvers"));
const app = (0, express_1.default)();
const httpServer = http_1.default.createServer(app);
const schema = (0, schema_1.makeExecutableSchema)({
    typeDefs: typeDefs_1.default,
    resolvers: resolvers_1.default,
});
const apolloServer = new apollo_server_express_1.ApolloServer({
    schema,
    context: ({ req, res }) => ({ req, res }),
    csrfPrevention: true,
    cache: "bounded",
    plugins: [(0, apollo_server_core_1.ApolloServerPluginDrainHttpServer)({ httpServer })],
});
apolloServer.start().then(() => {
    apolloServer.applyMiddleware({ app, cors: false });
    httpServer.listen({ port: 8000 }, () => {
        console.log("GraphQL server ready.");
    });
});
