import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const ExploreLayout = () => {
  return (
    <Stack screenOptions={{
      headerShown:false
    }}>
        {/* <Stack.Screen name='index'/> */}
        {/* <Stack.Screen name='[id]'/> */}
    </Stack>
  )
}

export default ExploreLayout