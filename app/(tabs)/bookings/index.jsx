import { View, Text,} from 'react-native'
import React from 'react'
import BookingCom from '../../../components/BookingComs/BookingList'

const Bookings = () => {
  return (
    <View style={{flex:1}} >
     <BookingCom/>
    </View>
  )
}

export default Bookings;