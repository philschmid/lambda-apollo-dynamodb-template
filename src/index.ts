/** @format */

//FIXME: for Serverless deployement
import {ApolloServer, defaultPlaygroundOptions} from 'apollo-server-lambda'

import {createUser} from './resolver/User.Resolver'
import {schema} from './schema/schema'
// import schema = require('./src/schema/schema.graphql')
// const typeDefs = importSchema(schema)
// const typeDefs = schema

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello World',
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
