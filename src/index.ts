/** @format */

//FIXME: for Serverless deployement
import {ApolloServer, defaultPlaygroundOptions} from 'apollo-server-lambda'

import {createUser, getUserByPK, getAllUserById, getAllUserByIdWithUsernameBW} from './resolver'
import {schema} from './schema/schema'
import {getUserByFilterName, getUserByFilterLSI, getUserByFilterLSICON} from './resolver/userResolver/user.query.filter'
// import schema = require('./src/schema/schema.graphql')
// const typeDefs = importSchema(schema)
// const typeDefs = schema

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello World',
    getUserById: async (obj, args, context, info) => {
      return getUserByPK(args)
    },
    getAllUserById: async (obj, args, context, info) => {
      return getAllUserById(args, 'username')
    },
    // getAllUserByAge: async (obj, args, context, info) => {
    //   return getAllUserByAge(args, 'age')
    // },
    getAllUserByIdWithUsernameBW: async (obj, args, context, info) => {
      return getAllUserByIdWithUsernameBW(args, 'age')
    },

    getUserByFilterName: async (obj, args, context, info) => {
      return getUserByFilterName(args)
    },
    getUserByFilterLSI: async (obj, args, context, info) => {
      return getUserByFilterLSI(args)
    },
    getUserByFilterLSICON: async (obj, args, context, info) => {
      return getUserByFilterLSICON(args)
    },
  },
  Mutation: {
    createUser: async (obj, args, context, info) => {
      return createUser(args)
    },
  },
}

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  playground: defaultPlaygroundOptions,
})

// server.listen()
//FIXME: for Serverless deployement
exports.graphqlHandler = server.createHandler()
