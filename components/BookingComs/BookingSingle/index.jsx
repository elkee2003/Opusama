import { View, Text, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import styles from './styles';
import * as Clipboard from 'expo-clipboard';
import { router } from 'expo-router';

const BookingSingle = ({booking, onDelete}) => {

  const handleCopyPhoneNumber = async () => {
    if (booking.realtor.phoneNumber) {
      await Clipboard.setStringAsync(booking.phoneNumber);
      Alert.alert('Phone Number Copied', 'You can paste it into the dialer to make a call.');
    }
  };

  const getStatusText = (status) => {
    if (status === 'PENDING') return 'Pending';
    if (status === 'ACCEPTED') return 'Accepted';
    if (status === 'DENIED') return 'Denied';
    return 'Pending';
  };

  const goToBookingLiveUpdate = () =>{
    // router.push(`realtor/hotelrealtor/bookingliveupdates/${booking.id}`)
    Alert.alert('Patience', 'Kindly wait for Realtor to accepts')
    // This is meant to show the map of the location of booking
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goToBookingLiveUpdate}>
        <Text style={styles.subHeading}>Realtor:</Text>
        <Text style={styles.detail}>{booking?.realtor?.firstName}</Text>

        <Text style={styles.subHeading}>Accomodation Type:</Text>
        <Text style={styles.detail}>{booking?.propertyType}</Text>

        {booking.nameOfType && (
          <>
            <Text style={styles.subHeading}>Accomodation Name:</Text>
            <Text style={styles.detail}>{booking?.nameOfType}</Text>
          </>
        )}

        {booking.checkInDate && (
          <>
            <Text style={styles.subHeading}>Check-in:</Text>
            <Text style={styles.detail}>{booking?.checkInDate.substring(0,17)}</Text>
          </>
        )}

        {booking.checkOutDate && (
          <>
            <Text style={styles.subHeading}>Check-out:</Text>
            <Text style={styles.detail}>{booking?.checkOutDate.substring(0,17)}</Text>
          </>
        )}

        {(booking.status === 'ACCEPTED') && (
          <>
            
            <Text style={styles.subHeading}>Realtor Phone Number:</Text>
            <TouchableOpacity onPress={handleCopyPhoneNumber}>
              <Text style={styles.detail}>{booking?.realtor?.phoneNumber}</Text>
            </TouchableOpacity>
          </>
        )}

        <Text style={styles.subHeading}>Status:</Text>
        <View style={styles.statusRow}>
          <Text style={styles.detail}>{getStatusText(booking.status)}</Text>
          {(booking.status === 'ACCEPTED') ? (
              <View style={styles.greenIcon}/>
            ):(
              <View style={styles.redIcon}/>
          )}
        </View>

        {booking.status === 'PENDING' && (
          <TouchableOpacity style={styles.deleteButtonCon} onPress={()=>{
            Alert.alert(
              'Delete Order',
              'Are you sure you want to delete this order',
              [
                {text:'Cancel', style:'cancel'},
                {text: 'Delete', style:'destructive', onPress:onDelete}
              ]
            );
          }} >
            <Text style={styles.deleteButtonTxt} >{booking.propertyType === 'Hotel / Shorlet' ? 'Delete Booking' : 'Delete Showing'}</Text>
          </TouchableOpacity>
        )}

      </TouchableOpacity>
    </View>
  )
}

export default BookingSingle;