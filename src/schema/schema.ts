/** @format */
import {gql} from 'apollo-server-express'
export const schema = gql`
  type Query {
    hello(id: Int): User
    getUserByEmail(email: String): User
    getUserById(userid: String, username: String): User
    getAllUserById(userid: String, username: String): [User]
    getAllUserByIdWithUsernameBW(userid: String, username: String): [User]
    getUserByFilterName(userid: String, name: String): [User]
    getUserByFilterLSI(userid: String, age: Int): [User]
    getUserByFilterLSICON(userid: String, age: Int, username: String): [User]
  }
  type Mutation {
    createUser(userid: String, username: String!, name: String, age: Int, email: String): User
  }
  type User {
    userid: String
    username: String
    name: String
    age: Int
    email: String
  }
`
