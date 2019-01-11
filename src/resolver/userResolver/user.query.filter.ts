/** @format */

import {User} from '../../models/user'
import {mapper} from '../../service/datamapper'
import {FunctionExpression, AttributePath, beginsWith, equals} from '@aws/dynamodb-expressions'

// Query on userid and Filters name
export const getUserByFilterName = async args => {
  const res: any = []
  const keyCondition = {
    userid: args.userid,
  }
  const predicate = equals(args.name)
  const filterCondition = {
    ...predicate,
    subject: 'name',
  }
  const queryOptions = {
    filter: filterCondition,
  }

  for await (const foo of mapper.query(User, keyCondition, queryOptions)) {
    res.push(foo)
  }
  return res
}


// Gets Query with Secondary Index
export const getUserByFilterLSI = async args => {
  const res: any = []
  for await (const foo of mapper.query(User, {userid: args.userid, age: args.age}, {indexName: 'lsiAgeIndex'})) {
    res.push(foo)
  }
  return res
}


//TODO: Query with SecondaryIndex filterd
export const getUserByFilterLSICON = async args => {
  const res: any = []
  for await (const foo of mapper.query(
    User,
    {
      type: 'And',
      conditions: [
        {type: 'Equals', subject: 'userid', object: args.userid},
        {type: 'GreaterThan', subject: 'age', object: args.age},
      ],
    },
    {indexName: 'lsiAgeIndex'},
  )) {
    res.push(foo)
  }
  return res
}
