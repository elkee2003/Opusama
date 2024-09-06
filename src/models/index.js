// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Post, Realtor } = initSchema(schema);

export {
  User,
  Post,
  Realtor
};