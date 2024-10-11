import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import BookHotel from '../../../../components/HotelComponents/BookHotel'
import GuestDetails from '../../../../components/HotelComponents/GuestDetails'

const AccommodationGuestInfo = () => {


  return (
    <View style={{flex:1}}>
      {/* <BookHotel realtor={realtor}/> */}
      <GuestDetails/>
    </View>
  )
}

export default AccommodationGuestInfo;