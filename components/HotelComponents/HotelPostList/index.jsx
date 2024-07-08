import { View, Text, FlatList } from 'react-native'
import React from 'react'
import hotels from '../../../assets/data/hotels'
import HotelPost from '../HotelPost'
import styles from './styles'

const HotelPostList = () => {

  // Use flatMap to flatten the posts array and include parent information
  const hotelData = hotels.flatMap(hotel => 
    hotel.posts.map(post => ({
      ...post, // Include all properties of the post
      userId: hotel.id,
      username: hotel.username, // Add parent hotel information
      phoneNumber: hotel.phoneNumber,
      email: hotel.email,
      mydescription: hotel.mydescription
    }))
  );

  return (
    <View style={styles.container}>
      {
        hotels && hotels.length > 0 ?
        <FlatList 
          data={hotelData}
          renderItem={({item})=> <HotelPost post={item}/>}
      />
      :
          <Text style={styles.noListings}>No Hotel listings</Text>
      }
    </View>
  )
}

export default HotelPostList