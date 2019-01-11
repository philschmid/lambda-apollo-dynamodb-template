/** @format */

import {attribute, rangeKey, table, autoGeneratedHashKey, hashKey} from '@aws/dynamodb-data-mapper-annotations'
import {embed} from '@aws/dynamodb-data-mapper'

@table('items')
class Item {
  @hashKey({
    // <-- this is your normal hash key (shared by table and of LSI)
    indexKeyConfigurations: {
      ItemIdIndex: 'HASH', // The key (ItemIdIndex) is the name of the index; the value is the key type ('HASH' or 'RANGE')
    },
  })
  itemId: string

  @rangeKey() // <-- this is your normal range key (not part of LSI)
  displayName: string

  @attribute({
    // And this other attribute acts as the LSI's RangeKey
    indexKeyConfigurations: {
      ItemIdIndex: 'RANGE',
    },
  })
  foo: string

  @attribute()
  bar: string
}