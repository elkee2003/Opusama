import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles'
import { router } from 'expo-router';
import {useAuthContext} from '@/providers/AuthProvider';
import { useShowingContext } from '@/providers/ShowingProvider';
import { DataStore } from 'aws-amplify/datastore';
import {Booking} from '@/src/models';

const ReviewShowingInfo = () => {

    const {dbUser} = useAuthContext();

    const {setShowing, clientFirstName, setClientFirstName, clientLastName, setClientLastName, clientPhoneNumber, note, setNote, propertyDetails, setPropertyDetails, PostID, setPostID, propertyType, setPropertyType, accommodationType, setAccommodationType, setClientPhoneNumber, bookingLat, setBookingLat, bookingLng, setBookingLng, realtorContext, setRealtorContext} = useShowingContext()

    const [loading, setLoading] = useState(false);

    const handleGetInTouch = async () =>{
      if(loading) return;
      setLoading(true)
      try{
        const getInTouch = await DataStore.save(new Booking({
          clientFirstName,
          clientLastName,
          clientPhoneNumber,
          purpose: note,
          propertyType,
          accommodationType,
          bookingLat,
          bookingLng,
          userID: dbUser.id,
          realtorID: realtorContext.id,
          PostID,
          status:'PENDING'
        }))
        setShowing(getInTouch);
        Alert.alert('Successful', "Booking was a success");
  
        setClientFirstName('') 
        setClientLastName('') 
        setClientPhoneNumber('') 
        setNote('')
        setPostID('')
        setPropertyDetails(null) 
        setPropertyType('')  
        setAccommodationType('') 
        setBookingLat(null) 
        setBookingLng(null) 
        setRealtorContext('') 
  
        router.push('/home')
  
      }catch(e){
        Alert.alert('Error', e.message);
      }finally{
        setLoading(false);
      }
    };

    useEffect(() => {
    if (propertyDetails) {
      setPropertyType(propertyDetails.propertyType);
      setPostID(propertyDetails.id);
      setAccommodationType(propertyDetails.type);
      setBookingLat(propertyDetails.lat);
      setBookingLng(propertyDetails.lng);
    //   setRealtorPrice(overAllPrice * 0.85);
    }
  }, [propertyDetails]);

  console.log('postid:',PostID)
    console.log('acc:',propertyType)


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Review Showing Info</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.txtInputHeader}>First Name:</Text>
            <Text style={styles.txtInput}>{clientFirstName?.trim()}</Text>

            <Text style={styles.txtInputHeader}>Last Name:</Text>
            <Text style={styles.txtInput}>{clientLastName?.trim()}</Text>

            <Text style={styles.txtInputHeader}>Phone Number:</Text>
            <Text style={styles.txtInput}>{clientPhoneNumber}</Text>

            <Text style={styles.txtInputHeader}>Short Note:</Text>
            <Text style={styles.txtInputNote}>{note?.trim()}</Text>

            <Text style={styles.txtInputHeader}>Property Type:</Text>
            <Text style={styles.txtInput}>{propertyDetails?.propertyType}</Text>


            <Text style={styles.txtInputHeader}>Accommodation Type:</Text>
            <Text style={styles.txtInput}>{propertyDetails?.type}</Text>
        </ScrollView>

        {/* Button */}
        <TouchableOpacity 
          style={styles.getInTouchBtn} 
          onPress={handleGetInTouch}
          disabled={loading}
        >
          <Text style={styles.getInTouchTxt}>Get In Touch</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ReviewShowingInfo;