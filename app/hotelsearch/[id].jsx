import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import DetailedHotelPost from '../../components/HotelComponents/DetailedHotelPost'
import hotels from '../../assets/data/hotels'

const HotelSpecificSearch = () => {

    const {id} = useLocalSearchParams()   
    const hotel = hotels.find(item => item.id === id)

  return (
    <View style={{top:50, alignItems:'center', justifyContent:"center"}}>
      <DetailedHotelPost post={hotel}/>
    </View>
  )
}

export default HotelSpecificSearch