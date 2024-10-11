import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import LandContactCard from '../../../../components/LandComponents/LandContactCard'
import { useLocalSearchParams } from 'expo-router'
import { DataStore } from 'aws-amplify/datastore'
import {Realtor,} from '../../../../src/models'


const LandRealtorContact = () => {

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
      <LandContactCard realtor={realtor}/>
    </View>
  )
}

export default LandRealtorContact