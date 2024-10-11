/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRealtorReview = /* GraphQL */ `
  subscription OnCreateRealtorReview(
    $filter: ModelSubscriptionRealtorReviewFilterInput
  ) {
    onCreateRealtorReview(filter: $filter) {
      id
      rating
      review
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateRealtorReview = /* GraphQL */ `
  subscription OnUpdateRealtorReview(
    $filter: ModelSubscriptionRealtorReviewFilterInput
  ) {
    onUpdateRealtorReview(filter: $filter) {
      id
      rating
      review
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteRealtorReview = /* GraphQL */ `
  subscription OnDeleteRealtorReview(
    $filter: ModelSubscriptionRealtorReviewFilterInput
  ) {
    onDeleteRealtorReview(filter: $filter) {
      id
      rating
      review
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreatePostReview = /* GraphQL */ `
  subscription OnCreatePostReview(
    $filter: ModelSubscriptionPostReviewFilterInput
  ) {
    onCreatePostReview(filter: $filter) {
      id
      rating
      review
      postID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdatePostReview = /* GraphQL */ `
  subscription OnUpdatePostReview(
    $filter: ModelSubscriptionPostReviewFilterInput
  ) {
    onUpdatePostReview(filter: $filter) {
      id
      rating
      review
      postID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeletePostReview = /* GraphQL */ `
  subscription OnDeletePostReview(
    $filter: ModelSubscriptionPostReviewFilterInput
  ) {
    onDeletePostReview(filter: $filter) {
      id
      rating
      review
      postID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateBooking = /* GraphQL */ `
  subscription OnCreateBooking($filter: ModelSubscriptionBookingFilterInput) {
    onCreateBooking(filter: $filter) {
      id
      adults
      children
      infants
      guestFirstName
      gusetLastName
      guestPhoneNumber
      purposeOfStay
      duration
      accomodationType
      price
      userID
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
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
export const onUpdateBooking = /* GraphQL */ `
  subscription OnUpdateBooking($filter: ModelSubscriptionBookingFilterInput) {
    onUpdateBooking(filter: $filter) {
      id
      adults
      children
      infants
      guestFirstName
      gusetLastName
      guestPhoneNumber
      purposeOfStay
      duration
      accomodationType
      price
      userID
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
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
export const onDeleteBooking = /* GraphQL */ `
  subscription OnDeleteBooking($filter: ModelSubscriptionBookingFilterInput) {
    onDeleteBooking(filter: $filter) {
      id
      adults
      children
      infants
      guestFirstName
      gusetLastName
      guestPhoneNumber
      purposeOfStay
      duration
      accomodationType
      price
      userID
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      sub
      firstName
      lastName
      profilePic
      comment
      RealtorReview {
        id
        rating
        review
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      PostReview {
        id
        rating
        review
        postID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      Bookings {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userRealtorReviewId
      userPostReviewId
      __typename
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      sub
      firstName
      lastName
      profilePic
      comment
      RealtorReview {
        id
        rating
        review
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      PostReview {
        id
        rating
        review
        postID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      Bookings {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userRealtorReviewId
      userPostReviewId
      __typename
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      sub
      firstName
      lastName
      profilePic
      comment
      RealtorReview {
        id
        rating
        review
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      PostReview {
        id
        rating
        review
        postID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      Bookings {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userRealtorReviewId
      userPostReviewId
      __typename
    }
  }
`;
export const onCreateRealtor = /* GraphQL */ `
  subscription OnCreateRealtor($filter: ModelSubscriptionRealtorFilterInput) {
    onCreateRealtor(filter: $filter) {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateRealtor = /* GraphQL */ `
  subscription OnUpdateRealtor($filter: ModelSubscriptionRealtorFilterInput) {
    onUpdateRealtor(filter: $filter) {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteRealtor = /* GraphQL */ `
  subscription OnDeleteRealtor($filter: ModelSubscriptionRealtorFilterInput) {
    onDeleteRealtor(filter: $filter) {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
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
