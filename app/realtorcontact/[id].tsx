import { View, Text } from 'react-native'
import React from 'react'
import ContactCard from '../../components/ContactCard'
import { useLocalSearchParams } from 'expo-router'
import realtors from '../../assets/data/hotels'


const RealtorContact = () => {

  const {id} = useLocalSearchParams()

  const realtor = realtors.find(item=> item.id === id)

  return (
    <View style={{flex:1}}>
      <ContactCard realtor={realtor}/>
    </View>
  )
}

export default RealtorContact