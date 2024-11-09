import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import PropSaleContactCard from '../../../../components/PropertySaleComponents/PropSaleContactCard'
import { useLocalSearchParams } from 'expo-router'
import { DataStore } from 'aws-amplify/datastore'
import {Realtor,} from '../../../../src/models'


const PropertyRealtorContact = () => {

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
      <PropSaleContactCard realtor={realtor}/>
    </View>
  )
}

export default PropertyRealtorContact