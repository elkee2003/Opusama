/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRealtorReview = /* GraphQL */ `
  mutation CreateRealtorReview(
    $input: CreateRealtorReviewInput!
    $condition: ModelRealtorReviewConditionInput
  ) {
    createRealtorReview(input: $input, condition: $condition) {
      id
      rating
      review
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateRealtorReview = /* GraphQL */ `
  mutation UpdateRealtorReview(
    $input: UpdateRealtorReviewInput!
    $condition: ModelRealtorReviewConditionInput
  ) {
    updateRealtorReview(input: $input, condition: $condition) {
      id
      rating
      review
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteRealtorReview = /* GraphQL */ `
  mutation DeleteRealtorReview(
    $input: DeleteRealtorReviewInput!
    $condition: ModelRealtorReviewConditionInput
  ) {
    deleteRealtorReview(input: $input, condition: $condition) {
      id
      rating
      review
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createPostReview = /* GraphQL */ `
  mutation CreatePostReview(
    $input: CreatePostReviewInput!
    $condition: ModelPostReviewConditionInput
  ) {
    createPostReview(input: $input, condition: $condition) {
      id
      rating
      review
      postID
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updatePostReview = /* GraphQL */ `
  mutation UpdatePostReview(
    $input: UpdatePostReviewInput!
    $condition: ModelPostReviewConditionInput
  ) {
    updatePostReview(input: $input, condition: $condition) {
      id
      rating
      review
      postID
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deletePostReview = /* GraphQL */ `
  mutation DeletePostReview(
    $input: DeletePostReviewInput!
    $condition: ModelPostReviewConditionInput
  ) {
    deletePostReview(input: $input, condition: $condition) {
      id
      rating
      review
      postID
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createBooking = /* GraphQL */ `
  mutation CreateBooking(
    $input: CreateBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    createBooking(input: $input, condition: $condition) {
      id
      adults
      kids
      infants
      clientFirstName
      clientLastName
      clientPhoneNumber
      purpose
      duration
      checkInDate
      checkOutDate
      propertyType
      Realtor {
        id
        sub
        firstName
        lastName
        myDescription
        profilePic
        email
        address
        phoneNumber
        bankname
        accountName
        accountNumber
        push_token
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      accommodationType
      nameOfType
      totalPrice
      realtorPrice
      bookingLat
      bookingLng
      status
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      bookingRealtorId
      __typename
    }
  }
`;
export const updateBooking = /* GraphQL */ `
  mutation UpdateBooking(
    $input: UpdateBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    updateBooking(input: $input, condition: $condition) {
      id
      adults
      kids
      infants
      clientFirstName
      clientLastName
      clientPhoneNumber
      purpose
      duration
      checkInDate
      checkOutDate
      propertyType
      Realtor {
        id
        sub
        firstName
        lastName
        myDescription
        profilePic
        email
        address
        phoneNumber
        bankname
        accountName
        accountNumber
        push_token
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      accommodationType
      nameOfType
      totalPrice
      realtorPrice
      bookingLat
      bookingLng
      status
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      bookingRealtorId
      __typename
    }
  }
`;
export const deleteBooking = /* GraphQL */ `
  mutation DeleteBooking(
    $input: DeleteBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    deleteBooking(input: $input, condition: $condition) {
      id
      adults
      kids
      infants
      clientFirstName
      clientLastName
      clientPhoneNumber
      purpose
      duration
      checkInDate
      checkOutDate
      propertyType
      Realtor {
        id
        sub
        firstName
        lastName
        myDescription
        profilePic
        email
        address
        phoneNumber
        bankname
        accountName
        accountNumber
        push_token
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      accommodationType
      nameOfType
      totalPrice
      realtorPrice
      bookingLat
      bookingLng
      status
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      bookingRealtorId
      __typename
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      sub
      firstName
      lastName
      profilePic
      phoneNumber
      Bookings {
        nextToken
        startedAt
        __typename
      }
      address
      PostReviews {
        nextToken
        startedAt
        __typename
      }
      RealtorReviews {
        nextToken
        startedAt
        __typename
      }
      push_token
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      sub
      firstName
      lastName
      profilePic
      phoneNumber
      Bookings {
        nextToken
        startedAt
        __typename
      }
      address
      PostReviews {
        nextToken
        startedAt
        __typename
      }
      RealtorReviews {
        nextToken
        startedAt
        __typename
      }
      push_token
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      sub
      firstName
      lastName
      profilePic
      phoneNumber
      Bookings {
        nextToken
        startedAt
        __typename
      }
      address
      PostReviews {
        nextToken
        startedAt
        __typename
      }
      RealtorReviews {
        nextToken
        startedAt
        __typename
      }
      push_token
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createRealtor = /* GraphQL */ `
  mutation CreateRealtor(
    $input: CreateRealtorInput!
    $condition: ModelRealtorConditionInput
  ) {
    createRealtor(input: $input, condition: $condition) {
      id
      sub
      firstName
      lastName
      myDescription
      profilePic
      email
      address
      phoneNumber
      bankname
      accountName
      accountNumber
      Post {
        nextToken
        startedAt
        __typename
      }
      push_token
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateRealtor = /* GraphQL */ `
  mutation UpdateRealtor(
    $input: UpdateRealtorInput!
    $condition: ModelRealtorConditionInput
  ) {
    updateRealtor(input: $input, condition: $condition) {
      id
      sub
      firstName
      lastName
      myDescription
      profilePic
      email
      address
      phoneNumber
      bankname
      accountName
      accountNumber
      Post {
        nextToken
        startedAt
        __typename
      }
      push_token
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteRealtor = /* GraphQL */ `
  mutation DeleteRealtor(
    $input: DeleteRealtorInput!
    $condition: ModelRealtorConditionInput
  ) {
    deleteRealtor(input: $input, condition: $condition) {
      id
      sub
      firstName
      lastName
      myDescription
      profilePic
      email
      address
      phoneNumber
      bankname
      accountName
      accountNumber
      Post {
        nextToken
        startedAt
        __typename
      }
      push_token
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      propertyType
      type
      nameOfType
      availableDocs
      accommodationParts
      media
      description
      available
      address
      lat
      lng
      price
      totalPrice
      bed
      bedrooms
      amenities
      policies
      country
      PostReviews {
        nextToken
        startedAt
        __typename
      }
      state
      city
      realtorID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      propertyType
      type
      nameOfType
      availableDocs
      accommodationParts
      media
      description
      available
      address
      lat
      lng
      price
      totalPrice
      bed
      bedrooms
      amenities
      policies
      country
      PostReviews {
        nextToken
        startedAt
        __typename
      }
      state
      city
      realtorID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      propertyType
      type
      nameOfType
      availableDocs
      accommodationParts
      media
      description
      available
      address
      lat
      lng
      price
      totalPrice
      bed
      bedrooms
      amenities
      policies
      country
      PostReviews {
        nextToken
        startedAt
        __typename
      }
      state
      city
      realtorID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
