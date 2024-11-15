/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRealtorReview = /* GraphQL */ `
  query GetRealtorReview($id: ID!) {
    getRealtorReview(id: $id) {
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
export const listRealtorReviews = /* GraphQL */ `
  query ListRealtorReviews(
    $filter: ModelRealtorReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRealtorReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncRealtorReviews = /* GraphQL */ `
  query SyncRealtorReviews(
    $filter: ModelRealtorReviewFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRealtorReviews(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const realtorReviewsByUserID = /* GraphQL */ `
  query RealtorReviewsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRealtorReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    realtorReviewsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getPostReview = /* GraphQL */ `
  query GetPostReview($id: ID!) {
    getPostReview(id: $id) {
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
export const listPostReviews = /* GraphQL */ `
  query ListPostReviews(
    $filter: ModelPostReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncPostReviews = /* GraphQL */ `
  query SyncPostReviews(
    $filter: ModelPostReviewFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPostReviews(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const postReviewsByPostID = /* GraphQL */ `
  query PostReviewsByPostID(
    $postID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPostReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postReviewsByPostID(
      postID: $postID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const postReviewsByUserID = /* GraphQL */ `
  query PostReviewsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPostReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postReviewsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getBooking = /* GraphQL */ `
  query GetBooking($id: ID!) {
    getBooking(id: $id) {
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
      accommodationType
      nameOfType
      totalPrice
      realtorPrice
      bookingLat
      bookingLng
      status
      userID
      realtorID
      PostID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listBookings = /* GraphQL */ `
  query ListBookings(
    $filter: ModelBookingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        accommodationType
        nameOfType
        totalPrice
        realtorPrice
        bookingLat
        bookingLng
        status
        userID
        realtorID
        PostID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncBookings = /* GraphQL */ `
  query SyncBookings(
    $filter: ModelBookingFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBookings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
        accommodationType
        nameOfType
        totalPrice
        realtorPrice
        bookingLat
        bookingLng
        status
        userID
        realtorID
        PostID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const bookingsByUserID = /* GraphQL */ `
  query BookingsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBookingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bookingsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        accommodationType
        nameOfType
        totalPrice
        realtorPrice
        bookingLat
        bookingLng
        status
        userID
        realtorID
        PostID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const bookingsByRealtorID = /* GraphQL */ `
  query BookingsByRealtorID(
    $realtorID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBookingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bookingsByRealtorID(
      realtorID: $realtorID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        accommodationType
        nameOfType
        totalPrice
        realtorPrice
        bookingLat
        bookingLng
        status
        userID
        realtorID
        PostID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      sub
      firstName
      lastName
      profilePic
      phoneNumber
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
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sub
        firstName
        lastName
        profilePic
        phoneNumber
        address
        push_token
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        sub
        firstName
        lastName
        profilePic
        phoneNumber
        address
        push_token
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getRealtor = /* GraphQL */ `
  query GetRealtor($id: ID!) {
    getRealtor(id: $id) {
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
      __typename
    }
  }
`;
export const listRealtors = /* GraphQL */ `
  query ListRealtors(
    $filter: ModelRealtorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRealtors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncRealtors = /* GraphQL */ `
  query SyncRealtors(
    $filter: ModelRealtorFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRealtors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
      cautionFee
      totalPrice
      bed
      bedrooms
      amenities
      policies
      PostReviews {
        nextToken
        startedAt
        __typename
      }
      country
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        cautionFee
        totalPrice
        bed
        bedrooms
        amenities
        policies
        country
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncPosts = /* GraphQL */ `
  query SyncPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
        cautionFee
        totalPrice
        bed
        bedrooms
        amenities
        policies
        country
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const postsByRealtorID = /* GraphQL */ `
  query PostsByRealtorID(
    $realtorID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByRealtorID(
      realtorID: $realtorID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        cautionFee
        totalPrice
        bed
        bedrooms
        amenities
        policies
        country
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
      nextToken
      startedAt
      __typename
    }
  }
`;
