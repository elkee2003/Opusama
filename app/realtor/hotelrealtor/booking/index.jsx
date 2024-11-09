import { View, Text, SafeAreaView, ActivityIndicator } from 'react-native'
import React, {useState, useEffect} from 'react'
import BookingCom from '../../../../components/HotelComponents/BookingProcess/Booking';
import { useLocalSearchParams } from 'expo-router'

const AccommodationBooking = () => {

  const {postPrice} = useLocalSearchParams()

  return (
    <View style={{flex:1}}>
      <BookingCom postPrice={postPrice} />
    </View>
  )
}

export default AccommodationBooking;