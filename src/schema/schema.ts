/** @format */
import {gql} from 'apollo-server-express'
export const schema = gql`
  type Query {
    hello(id: Int): User
    findById(id: Int): String
  }
  type Mutation {
    createUser(uuid: String, username: String!, name: String, age: Int): User
  }
  type User {
    uuid: String
    username: String
    name: String
    age: Int
  }
`
