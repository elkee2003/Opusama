import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import ReviewGuestInfo from '../../../../components/HotelComponents/ReviewGuestInfo'


const ReviewInfoScreen = () => {

  return (
    <View style={{flex:1}}>
      <ReviewGuestInfo/>
    </View>
  )
}

export default ReviewInfoScreen;