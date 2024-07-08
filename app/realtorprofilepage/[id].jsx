import { View, Text } from 'react-native'
import React from 'react'
import RealtorProfile from '../../components/RealtorProfile'
import { useLocalSearchParams } from 'expo-router'
import realtors from '../../assets/data/hotels'

const RealtorProfilePageScreen = () => {
    
    const {id} = useLocalSearchParams()
    
    const realtor = realtors.find(item=> item.id === id)

  return (
    <View>
      <RealtorProfile realtor={realtor}/>
    </View>
  )
}

export default RealtorProfilePageScreen