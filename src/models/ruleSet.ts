import {
    attribute, 
    hashKey,
    table,
} from '@aws/dynamodb-data-mapper-annotations';

export class RuleSet {
    @attribute()
    author?: string;
 
    @attribute()
    postedAt?: Date;
 
    @attribute()
    text?: string;
}