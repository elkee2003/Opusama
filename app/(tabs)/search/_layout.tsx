import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const SearchLayout = () => {
  return (
    <Stack screenOptions={{
      headerShown:false
    }}>
        <Stack.Screen name='index'/>
        <Stack.Screen name='searchResults'/>
        <Stack.Screen name='[id]'/>
        <Stack.Screen name='fullView'/>
    </Stack>
  )
}

export default SearchLayout