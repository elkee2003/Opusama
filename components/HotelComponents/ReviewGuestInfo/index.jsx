import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import styles from './styles'
import { router } from 'expo-router';
import { useBookingContext } from '@/providers/BookingProvider';

const ReviewGuestInfo = () => {

  const {adults, children, infants, guestFirstName, guestLastName, guestPhoneNumber, purpose, overAllPrice, postTotalPrice} = useBookingContext();
  console.log(overAllPrice)
  return (
    <View style={styles.container}>
        <Text style={styles.header}>
          Review Info
        </Text>
        <ScrollView>
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
        <TouchableOpacity style={styles.paymentBtn} onPress={()=>router.push(`/realtor/hotelrealtor/payment`)}>
          <Text style={styles.paymentTxt}>Make Payments</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ReviewGuestInfo