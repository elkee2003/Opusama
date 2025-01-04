import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import RealtorRatingsReview from '../../../components/RealtorProfile/UsersReviews';
import { useLocalSearchParams } from 'expo-router'
import { DataStore } from 'aws-amplify/datastore'
import {Realtor} from '@/src/models'

const RealtorRatings = () => {
    
    const {id} = useLocalSearchParams()
    const [realtor, setRealtor] = useState('')

    const fetchRealtor = async () =>{
      try{
        if(id){
          const foundRealtor = await DataStore.query(Realtor, id);
          setRealtor(foundRealtor)
        }
      }catch(error){
        console.error('Fetching Realtor error:', error)
      }
    }

    useEffect(()=>{
      fetchRealtor()
    },[])
    

  return (
    <View style={{flex:1}}>
      <RealtorRatingsReview realtor={realtor}/>
    </View>
  )
}

export default RealtorRatings;