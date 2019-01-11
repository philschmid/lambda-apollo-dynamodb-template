/** @format */

import {User} from '../../models/user'
import {mapper} from '../../service/datamapper'
import {FunctionExpression, AttributePath, beginsWith} from '@aws/dynamodb-expressions'

// querys user by PK
export const getUserByPK = async args => {
  const toFetch = new User()
  toFetch.userid = args.userid
  toFetch.username = args.username
  return await mapper.get({item: toFetch})
}

// querys user by userid
export const getAllUserById = async (args, params) => {
  const res: any = []
  for await (const foo of mapper.query(User, {userid: args.userid})) {
    res.push(foo)
    // individual items with a hash key of "foo" will be yielded as the query is performed
  }
  return res
}

// export const getAllUserByAge = async (args, params) => {
//   const res: any = []
//   for await (const foo of mapper.query(User, {userid: args.userid})) {
//     res.push(foo)
//     // individual items with a hash key of "foo" will be yielded as the query is performed
//   }
//   return res
// }

// gets all User with Username beginswith ....
export const getAllUserByIdWithUsernameBW = async (args, params) => {
  const res: any = []
  for await (const foo of mapper.query(User, {
    type: 'And',
    conditions: [
      {type: 'Equals', subject: 'userid', object: args.userid},
      new FunctionExpression('begins_with', new AttributePath('username'), args.username),
    ],
  })) {
    res.push(foo)
    // individual items with a hash key of "foo" will be yielded as the query is performed
  }
  return res
}
