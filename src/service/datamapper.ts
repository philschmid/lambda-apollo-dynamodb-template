/** @format */

import {DataMapper} from '@aws/dynamodb-data-mapper'
import DynamoDB = require('aws-sdk/clients/dynamodb')

export const mapper = new DataMapper({
  // TODO: if offline use local
  client:
    process.env.IS_OFFLINE !== 'true'
      ? new DynamoDB({region: 'eu-central-1'})
      : new DynamoDB({
          region: 'localhost',
          endpoint: 'http://localhost:8000',
          accessKeyId: 'DEFAULT_ACCESS_KEY', // needed if you don't have aws credentials at all in env
          secretAccessKey: 'DEFAULT_SECRET', // needed if you don't have aws credentials at all in env
        }),
  // tableNamePrefix: 'dev_', // optionally, you can provide a table prefix to keep your dev and prod tables separate
})
