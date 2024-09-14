// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Realtor, Post } = initSchema(schema);

export {
  User,
  Realtor,
  Post
};