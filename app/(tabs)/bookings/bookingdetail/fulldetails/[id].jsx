import { View, Text, ActivityIndicator } from 'react-native'
import React, {useState, useEffect} from 'react'
import BookingFullDetails from '../../../../../components/BookingComs/BookingDetails/BookingFullDetails'
import { useLocalSearchParams } from 'expo-router'
import { DataStore } from 'aws-amplify/datastore';
import {Booking, Realtor, Post} from '@/src/models';

const DetailedBooking = () => {

  const {id} = useLocalSearchParams()
  const [booking, setBooking] = useState(null)
  const [realtor, setRealtor] = useState(null);
  const [post, setPost] = useState(null);
  const [isloading, setIsLoading] = useState(false);

  const fetchBooking = async (id) =>{
    setIsLoading(true);
    try{
      if(id){
        const foundBooking = await DataStore.query(Booking, id)

        if(foundBooking){
          // Fetch associated realtor
          const foundRealtor = await DataStore.query(Realtor, foundBooking.realtorID);

          // Fetch associated post
          const foundPost = await DataStore.query(Post, foundBooking.PostID)
          
          setBooking(foundBooking);
          setRealtor(foundRealtor);
          setPost(foundPost);

        } else {
          setBooking(null);
        }
      }
    }catch(e){
      Alert.alert('Error', 'Error fetching Booking');
    }finally{
      setIsLoading(false);
    }
  }

  const updateBookingStatus = async (newStatus) => {
    if (booking) {
      try {
        const updatedBooking = await DataStore.save(
          Booking.copyOf(booking, (updated) => {
            updated.status = newStatus;
          })
        );
        setBooking(updatedBooking); // Update local state with new status
      } catch (error) {
        Alert.alert('Error', 'Unable to update booking status');
      }
    }
  };

  useEffect(()=>{
    fetchBooking(id)
  },[id])

  useEffect(()=>{
    if(!booking){
      return;
    }

    const subscription =  DataStore.observe(Booking, booking.id).subscribe(({opType, element})=>{
      if(opType === 'UPDATE'){
        setBooking(element);
      }
    });

    return () => subscription.unsubscribe();
  },[booking])
  
  if (!booking) {
      return (
        <View style={{top:'40%', justifyContent:'center', alignItems:'center'}}>
          <Text style={{fontSize:30, fontWeight:'bold', color:'#afadad'}}>Wait for Realtor's Response</Text>
        </View>
      );
  }


  return (
    <View style={{flex:1}}>
      <BookingFullDetails 
        notification={{...booking, realtor, post}} 
        onStatusChange={updateBookingStatus}
      />
    </View>
  )
}

export default DetailedBooking;