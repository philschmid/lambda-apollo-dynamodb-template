/** @format */

import {User} from '../../models/user'
import {mapper} from '../../service/datamapper'
import {equals, between} from '@aws/dynamodb-expressions'

export const createUser = args => {
  const toSave = Object.assign(new User(), args)
  return mapper
    .put(toSave)
    .then(objectSaved => {
      return objectSaved
    })
    .catch(err => {
      return err
    })
}
