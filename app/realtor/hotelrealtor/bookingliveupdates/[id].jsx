import { View, Text, SafeAreaView, ActivityIndicator } from 'react-native';
import React, {useState, useEffect} from 'react';
import { useLocalSearchParams } from 'expo-router';
import LocationLiveUpdate from '../../../../components/HotelComponents/LocationLiveUpdate';
import { DataStore } from 'aws-amplify/datastore';
import {Booking} from '@/src/models';

const OrderLiveUpdate = () => {

    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    const {id}= useLocalSearchParams();

    const fetchTrackedBooking = async (id) =>{
      
      setLoading(true);
      try{
          if(id){
              const trackedPostLocation = await DataStore.query(Booking, id);
              setPost(trackedPostLocation);
          }
      }catch(e){
          console.error('Error Fetching Order', e.message);
      }finally{
          setLoading(false);
      }
    }

    useEffect(()=>{
      fetchTrackedBooking(id);
    },[id])

    // useEffect to update Order
    useEffect(()=>{
      if(!post){
        return;
      }

      const subscription =  DataStore.observe(Booking, post.id).subscribe(({opType, element})=>{
        if(opType === 'UPDATE'){
          setPost(element);
        }
      });

      return () => subscription.unsubscribe();
    },[post])


    // if(!post){
    //   return(
    //     <View style={{top:'50%', justifyContent:'center', alignItems:'center'}}>
    //       <ActivityIndicator size="large" color='#020218'/>
    //     </View>
    //   )
    // }

    if (loading) {
      return (
        <View style={{top:'10%', justifyContent:'center', alignItems:'center'}}>
          <ActivityIndicator size="large" color='#020218'/>
        </View>
      );
    }

  return (
    <View style={{flex:1}}>
      <LocationLiveUpdate post={post}/>
    </View>
  )
}

export default OrderLiveUpdate;