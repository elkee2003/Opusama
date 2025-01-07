import { View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import BookingList from '../../../components/BookingComs/BookingList';
import { router } from 'expo-router';
import { useAuthContext } from '@/providers/AuthProvider';

const Bookings = () => {

  const {dbUser, authUser} = useAuthContext()

  useEffect(()=>{
    if(!dbUser){
      router.replace('/profile')
    }
  },[dbUser])

  if(!authUser){
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize:25, fontWeight:'bold', color:'#afadad'}}>Sign In to access Bookings</Text>

        <TouchableOpacity
          style={{width:100,marginTop:10,  padding:10, alignItems:'center', justifyContent:'center', borderRadius:10, backgroundColor:"#060b38"}} 
          onPress={()=>{router.push('/login')}}
        >
          <Text style={{fontSize:20,  fontWeight:'bold', color:'white', textAlign:'center'}}>
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    )
  };

  if(!dbUser){
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize:20, fontWeight:'bold', color:'#afadad'}}>Kindly Fill in Your Data in Profile screen</Text>
      </View>
    )
  };

  return (
    <View style={{flex:1}} >
     <BookingList/>
    </View>
  )
}

export default Bookings;