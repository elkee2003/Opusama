import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import DetailedHotelPost from '../../components/HotelComponents/DetailedHotelPost'
import hotels from '../../assets/data/hotels'

const HotelSpecificSearch = () => {

    const {id} = useLocalSearchParams() 

    // Ensure id is retrieved correctly
    if (!id) {
      return (
        <View style={{ top: 50, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Error: No ID provided</Text>
        </View>
      );
    }
    
    const flattenedHotel = hotels.flatMap(hotel => hotel.posts.map(post=>({
      ...post,
      userId:hotel.id,
      username: hotel.username, // Add parent hotel information
      phoneNumber: hotel.phoneNumber,
      email: hotel.email,
      mydescription: hotel.myDescription
    })))

    const hotel = flattenedHotel.find(item => item.id === id)

  return (
    <View style={{top:50, alignItems:'center', justifyContent:"center"}}>
      <DetailedHotelPost post={hotel}/>
    </View>
  )
}

export default HotelSpecificSearch