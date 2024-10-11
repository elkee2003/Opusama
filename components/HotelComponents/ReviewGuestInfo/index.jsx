import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import styles from './styles'
import { router } from 'expo-router'

const ReviewGuestInfo = ({realtor}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.header}>
          Review Info
        </Text>
        <ScrollView>
          <Text style={styles.txtInputHeader}>First Name(s):</Text>
          <Text style={styles.txtInputHeader}>Last Name(s):</Text>
          <Text style={styles.txtInputHeader}>Phone Number(s):</Text>
          <Text style={styles.txtInputHeader}>Purpose of stay:</Text>
          <Text>A Night:</Text>
          <Text>Sub Total:</Text>
          <Text>Caution fee:</Text>
          <Text>Total:</Text>
        </ScrollView>

        {/* Button */}
        <TouchableOpacity style={styles.paymentBtn} onPress={()=>router.push(`/realtor/hotelrealtor/payment`)}>
          <Text style={styles.paymentTxt}>Make Payments</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ReviewGuestInfo