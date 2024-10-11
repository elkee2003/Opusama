// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { RealtorReview, PostReview, Booking, User, Realtor, Post } = initSchema(schema);

export {
  RealtorReview,
  PostReview,
  Booking,
  User,
  Realtor,
  Post
};