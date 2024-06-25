import { View, Text } from 'react-native'
import React from 'react'
import { Stack, Slot } from 'expo-router'

const ProfileLayout = () => {
  return (
    <Stack screenOptions={{
      headerShown:false,
    }}/>
  )
}

export default ProfileLayout