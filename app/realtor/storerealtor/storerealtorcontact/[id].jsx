import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import StoreContactCard from '../../../../components/StoreComponents/StoreContactCard'
import { useLocalSearchParams } from 'expo-router'
import { DataStore } from 'aws-amplify/datastore'
import {Realtor, Post} from '../../../../src/models'



const StoreRealtorContact = () => {

  const {id} = useLocalSearchParams()
  const [realtor, setRealtor] = useState('')

  const fetchRealtor = async () =>{
    try{
      if(id){
          const foundRealtor = await DataStore.query(Realtor, id);
          setRealtor(foundRealtor)
      }
    }catch(error){
      console.error('Error from fetching Realtor contact:', error)
    }
  }

  useEffect(()=>{
    fetchRealtor()
  },[])

  return (
    <View style={{flex:1}}>
      <StoreContactCard realtor={realtor}/>
    </View>
  )
}

export default StoreRealtorContact;