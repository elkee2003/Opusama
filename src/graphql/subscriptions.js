/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      firstName
      lastName
      profilePic
      comment
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      firstName
      lastName
      profilePic
      comment
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      firstName
      lastName
      profilePic
      comment
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateRealtor = /* GraphQL */ `
  subscription OnCreateRealtor($filter: ModelSubscriptionRealtorFilterInput) {
    onCreateRealtor(filter: $filter) {
      id
      firstName
      lastName
      myDescription
      profilePic
      email
      address
      phoneNumber
      bankName
      accountName
      accountNumber
      rating
      Posts {
        nextToken
        startedAt
        __typename
      }
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
export const onUpdateRealtor = /* GraphQL */ `
  subscription OnUpdateRealtor($filter: ModelSubscriptionRealtorFilterInput) {
    onUpdateRealtor(filter: $filter) {
      id
      firstName
      lastName
      myDescription
      profilePic
      email
      address
      phoneNumber
      bankName
      accountName
      accountNumber
      rating
      Posts {
        nextToken
        startedAt
        __typename
      }
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
export const onDeleteRealtor = /* GraphQL */ `
  subscription OnDeleteRealtor($filter: ModelSubscriptionRealtorFilterInput) {
    onDeleteRealtor(filter: $filter) {
      id
      firstName
      lastName
      myDescription
      profilePic
      email
      address
      phoneNumber
      bankName
      accountName
      accountNumber
      rating
      Posts {
        nextToken
        startedAt
        __typename
      }
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
      id
      propertyType
      type
      availableDocs
      accommodationParts
      media
      description
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
      state
      city
      rating
      review
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
      availableDocs
      accommodationParts
      media
      description
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
      state
      city
      rating
      review
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
      availableDocs
      accommodationParts
      media
      description
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
      state
      city
      rating
      review
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
