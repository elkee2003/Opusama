import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const AllReviewsLayout = () => {
  return (
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name='[id]' 
      // options={{presentation:'modal'}}
      />
    </Stack>
  )
}

export default AllReviewsLayout