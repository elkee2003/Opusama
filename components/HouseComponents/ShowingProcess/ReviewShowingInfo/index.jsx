import { View, Text, ScrollView } from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles'
import { router } from 'expo-router';
import {useAuthContext} from '@/providers/AuthProvider';
import { useShowingContext } from '@/providers/ShowingProvider';
import { DataStore } from 'aws-amplify/datastore';
import {Booking} from '@/src/models';

const ReviewShowingInfo = () => {

    const {setBookings, clientFirstName, setClientFirstName, clientLastName, setClientLastName, clientPhoneNumber, note, setNote, propertyDetails, setPropertyDetails, propertyType, setPropertyType, accommodationType, setAccommodationType, setClientPhoneNumber, bookingLat, setBookingLat, bookingLng, setBookingLng, realtorContext, setRealtorContext, postPrice, setPostPrice, postTotalPrice, setPostTotalPrice, overAllPrice, setOverAllPrice, realtorPrice, setRealtorPrice} = useShowingContext()

    useEffect(() => {
    if (propertyDetails) {
      setPropertyType(propertyDetails.propertyType);
      setAccommodationType(propertyDetails.type);
      setBookingLat(propertyDetails.lat);
      setBookingLng(propertyDetails.lng);
    //   setRealtorPrice(overAllPrice * 0.85);
    }
  }, [propertyDetails, overAllPrice]);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Review Showing Info</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.txtInputHeader}>First Name:</Text>
            <Text style={styles.txtInput}>{clientFirstName}</Text>

            <Text style={styles.txtInputHeader}>Last Name:</Text>
            <Text style={styles.txtInput}>{clientLastName}</Text>

            <Text style={styles.txtInputHeader}>Phone Number:</Text>
            <Text style={styles.txtInput}>{clientPhoneNumber}</Text>

            <Text style={styles.txtInputHeader}>Short Note:</Text>
            <Text style={styles.txtInputNote}>{note}</Text>
        </ScrollView>
    </View>
  )
}

export default ReviewShowingInfo;