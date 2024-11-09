import { View, Text } from 'react-native';
import React, {useState, useEffect} from 'react';
import GuestDetailsForm from '../../../../components/HotelComponents/BookingProcess/GuestDetails';

const AccommodationGuestInfo = () => {


  return (
    <View style={{flex:1}}>
      <GuestDetailsForm/>
    </View>
  )
}

export default AccommodationGuestInfo;