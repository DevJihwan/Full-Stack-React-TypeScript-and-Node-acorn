import { gql } from "apollo-server-express";

const typeDefs = gql`
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

export default typeDefs;
