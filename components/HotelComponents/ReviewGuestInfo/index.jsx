import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React from 'react'
import styles from './styles'
import { router } from 'expo-router';
import {useAuthContext} from '@/providers/AuthProvider';
import { useBookingContext } from '@/providers/BookingProvider';
import { DataStore } from 'aws-amplify/datastore';
import {Booking} from '../../../src/models';

const ReviewGuestInfo = () => {

  const {dbUser} = useAuthContext();

  const { setBookings, adults, setAdults, kids, setKids, infants, setInfants, guestFirstName, setGuestFirstName, guestLastName, setGuestLastName, guestPhoneNumber, setGuestPhoneNumber, purpose, setPurpose, accommodationType, setAccommodationType, realtorContext, setRealtorContext, checkInDate, setCheckInDate, checkOutDate, setCheckOutDate,  duration, setDuration, postPrice, setPostPrice, postTotalPrice, setPostTotalPrice, overAllPrice, setOverAllPrice} = useBookingContext();

  const handleBooking = async () =>{
    try{
      const booking = await DataStore.save (new Booking({
        adults: String(adults),
        kids: String(kids),
        infants: String(infants),
        guestFirstName,
        guestLastName,
        guestPhoneNumber,
        purpose,
        duration: String(duration),
        checkInDate: String(checkInDate),
        checkOutDate: String(checkOutDate),
        propertyType:'hello',
        accommodationType:'',
        totalPrice: parseFloat(postTotalPrice),
        overAllPrice: parseFloat(overAllPrice),
        userID: dbUser.id,
        bookingRealtorId: realtorContext.id
      }))
      setBookings(booking);
      Alert.alert('Successful', "Booking was a success")

      setAdults('')
      setKids('')
      setInfants('')
      setGuestFirstName('')
      setGuestLastName('')
      setGuestPhoneNumber('')
      setPurpose('')
      setDuration('')
      setCheckInDate('')
      setCheckOutDate('')
      setPostTotalPrice('')
      setOverAllPrice('')
      setAccommodationType('')
      setRealtorContext('')
      router.push('/home/hotels')
    }catch(e){
      Alert.alert('Error', e.message)
    }
  }

  return (
    <View style={styles.container}>
        <Text style={styles.header}>
          Review Info
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>

          <View style={styles.guestUnit}>

            {/* Adults */}
            <View>
              <Text style={styles.txtInputHeader}>Adults:</Text>
              <Text style={styles.unitTxt}>{adults}</Text>
            </View>

            {/* Children */}
            <View>
              <Text style={styles.txtInputHeader}>Children:</Text>
              <Text style={styles.unitTxt}>{kids}</Text>
            </View>

            {/* Infants */}
            <View>
              <Text style={styles.txtInputHeader}>Infants:</Text>
              <Text style={styles.unitTxt}>{infants}</Text>
            </View>

          </View>

          <Text style={styles.txtInputHeader}>First Name(s):</Text>
          <Text style={styles.txtInput}>{guestFirstName}</Text>

          <Text style={styles.txtInputHeader}>Last Name(s):</Text>
          <Text style={styles.txtInput}>{guestLastName}</Text>

          <Text style={styles.txtInputHeader}>Phone Number(s):</Text>
          <Text style={styles.txtInput}>{guestPhoneNumber}</Text>

          <Text style={styles.txtInputHeader}>Purpose of stay:</Text>
          <Text style={styles.txtInput}>{purpose}</Text>

          <Text style={styles.txtInputHeader}>Sub Total:</Text>
          <Text style={styles.txtInput}>₦{postTotalPrice.toLocaleString()}</Text>

          {/* <Text style={styles.txtInputHeader}>Caution fee:</Text>
          <Text style={styles.txtInput}>{cautionFee}</Text> */}

          <Text style={styles.txtInputHeader}>Total:</Text>
          <Text style={styles.txtInput}>₦{overAllPrice.toLocaleString()}</Text>
        </ScrollView>

        {/* Button */}
        <TouchableOpacity 
          style={styles.paymentBtn} 
          onPress={handleBooking}
          // onPress={()=>router.push(`/realtor/hotelrealtor/payment`)}
        >
          <Text style={styles.paymentTxt}>Book</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ReviewGuestInfo