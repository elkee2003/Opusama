import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React, {useEffect, useState} from 'react'
import styles from './styles'
import { router } from 'expo-router';
import {useAuthContext} from '@/providers/AuthProvider';
import { useBookingContext } from '@/providers/BookingProvider';
import { DataStore } from 'aws-amplify/datastore';
import {Booking} from '@/src/models';

const ReviewGuestInfo = () => {

  const {dbUser} = useAuthContext();

  const { setBookings, adults, setAdults, kids, setKids, infants, setInfants, guestFirstName, setGuestFirstName, guestLastName, setGuestLastName, guestPhoneNumber, setGuestPhoneNumber, purpose, setPurpose, propertyDetails, setPropertyDetails, propertyType, setPropertyType, nameOfType, setNameOfType, accommodationType, setAccommodationType, realtorContext, bookingLat, setBookingLat, bookingLng, setBookingLng, setRealtorContext, checkInDate, setCheckInDate, checkOutDate, setCheckOutDate,  duration, setDuration, postPrice, setPostPrice, postCautionFee, setPostCautionFee, postTotalPrice, setPostTotalPrice, overAllPrice, setOverAllPrice, realtorPrice, setRealtorPrice} = useBookingContext();

  const [loading, setLoading] = useState(false);
  
  // Use useEffect to set the initial property details only once on mount
  useEffect(() => {
    if (propertyDetails) {
      setPropertyType(propertyDetails.propertyType);
      setAccommodationType(propertyDetails.type);
      setNameOfType(propertyDetails.nameOfType);
      setBookingLat(propertyDetails.lat);
      setBookingLng(propertyDetails.lng);
      setRealtorPrice(overAllPrice * 0.85);
    }
  }, [propertyDetails, overAllPrice]);
  
  const handleBooking = async () =>{
    if(loading) return;
    setLoading(true);

    try{
      const booking = await DataStore.save (new Booking({
        adults: String(adults),
        kids: String(kids),
        infants: String(infants),
        clientFirstName: guestFirstName,
        clientLastName: guestLastName,
        clientPhoneNumber: guestPhoneNumber,
        purpose,
        duration: String(duration),
        checkInDate: String(checkInDate),
        checkOutDate: String(checkOutDate),
        propertyType,
        nameOfType,
        accommodationType,
        bookingLat,
        bookingLng,
        totalPrice: parseFloat(overAllPrice),
        realtorPrice,
        // overAllPrice: parseFloat(overAllPrice),
        userID: dbUser.id,
        realtorID: realtorContext.id,
        status:'PENDING'
      }))
      setBookings(booking);
      Alert.alert('Successful', "Booking was a success");

      setAdults(0)
      setKids(0)
      setInfants(0)
      setGuestFirstName('')
      setGuestLastName('')
      setGuestPhoneNumber('')
      setPurpose('')
      setDuration('')
      setCheckInDate('')
      setCheckOutDate('')
      setPostTotalPrice('')
      setPostCautionFee('')
      setOverAllPrice('')
      setRealtorPrice(null)
      setPropertyDetails('')
      setPropertyType('')
      setNameOfType('')
      setAccommodationType('')
      setBookingLat('')
      setBookingLng('')
      setRealtorContext('')
      router.push('/home/hotels')
    }catch(e){
      Alert.alert('Error', e.message)
    }finally{
      setLoading(false);
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
          <Text style={styles.txtInput}>{guestFirstName?.trim()}</Text>

          <Text style={styles.txtInputHeader}>Last Name(s):</Text>
          <Text style={styles.txtInput}>{guestLastName?.trim()}</Text>

          <Text style={styles.txtInputHeader}>Phone Number(s):</Text>
          <Text style={styles.txtInput}>{guestPhoneNumber}</Text>

          <Text style={styles.txtInputHeader}>Purpose of stay:</Text>
          <Text style={styles.txtInput}>{purpose?.trim()}</Text>

          <Text style={styles.txtInputHeader}>Caution Fee:</Text>
          <Text style={styles.txtInput}>₦{postCautionFee?.toLocaleString()}{" "} 
            <Text style={styles.addedAlready}>(already added)</Text>
          </Text>

          <Text style={styles.txtInputHeader}>Sub Total:</Text>
          <Text style={styles.txtInput}>₦{postTotalPrice?.toLocaleString()}</Text>

          {/* <Text style={styles.txtInputHeader}>Caution fee:</Text>
          <Text style={styles.txtInput}>{cautionFee}</Text> */}

          <Text style={styles.txtInputHeader}>Total:</Text>
          <Text style={styles.txtInput}>₦{overAllPrice?.toLocaleString()}</Text>
        </ScrollView>

        {/* Button */}
        <TouchableOpacity 
          style={styles.paymentBtn} 
          onPress={handleBooking}
          disabled={loading}
          // onPress={()=>router.push(`/realtor/hotelrealtor/payment`)}
        >
          <Text style={styles.paymentTxt}>Book</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ReviewGuestInfo