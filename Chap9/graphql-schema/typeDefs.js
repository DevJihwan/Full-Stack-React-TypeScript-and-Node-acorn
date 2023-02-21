"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs = (0, apollo_server_express_1.gql) `
  type User {
    id: ID!
    username: string!
    email: string
  }

  type Todo {
    id: ID!
    title: string!
    description: string
  }

  type Query {
    getUser(id: ID): User
    getTodos: [Todo!]
  }
`;
exports.default = typeDefs;
