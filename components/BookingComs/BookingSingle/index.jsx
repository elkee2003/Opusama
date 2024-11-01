import { View, Text, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import styles from './styles';
import * as Clipboard from 'expo-clipboard';
import { router } from 'expo-router';

const BookingSingle = ({booking, onDelete}) => {

  const getStatusText = (status) => {
    if (status === 'PENDING') return 'Pending';
    if (status === 'ACCEPTED') return 'Accepted';
    if (status === 'DENIED') return 'Denied';
    return 'Pending';
  };

  const goToBookingLiveUpdate = () =>{
    router.push(`realtor/hotelrealtor/bookingliveupdates/${booking.id}`)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goToBookingLiveUpdate}>
        <Text style={styles.subHeading}>Hotel/Shortlet:</Text>
        <Text style={styles.detail}>{booking.realtor.firstName}</Text>

        <Text style={styles.subHeading}>Accomodation Type:</Text>
        <Text style={styles.detail}>{booking.propertyType}</Text>

        <Text style={styles.subHeading}>Accomodation Name:</Text>
        <Text style={styles.detail}>{booking.nameOfType}</Text>

        <Text style={styles.subHeading}>Check-in:</Text>
        <Text style={styles.detail}>{booking.checkInDate.substring(0,17)}</Text>

        <Text style={styles.subHeading}>Check-out:</Text>
        <Text style={styles.detail}>{booking.checkOutDate.substring(0,17)}</Text>

        <Text style={styles.subHeading}>Status:</Text>
        <View style={styles.statusRow}>
          <Text style={styles.detail}>{getStatusText(booking.status)}</Text>
          {(booking.status === 'ACCEPTED') ? (
              <View style={styles.greenIcon}/>
            ):(
              <View style={styles.redIcon}/>
          )}
        </View>

      </TouchableOpacity>
    </View>
  )
}

export default BookingSingle;