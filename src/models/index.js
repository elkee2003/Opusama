// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const BookingStatus = {
  "PENDING": "PENDING",
  "ACCEPTED": "ACCEPTED",
  "CANCELLED": "CANCELLED",
  "DENIED": "DENIED"
};

const { RealtorReview, PostReview, Booking, User, Realtor, Post } = initSchema(schema);

export {
  RealtorReview,
  PostReview,
  Booking,
  User,
  Realtor,
  Post,
  BookingStatus
};