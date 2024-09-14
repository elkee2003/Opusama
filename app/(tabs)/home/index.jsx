import { View, Text, ImageBackground, Pressable, StyleSheet, Dimensions, FlatList, ScrollView } from 'react-native'
import React from 'react'
import PostList from '../../../components/HouseComponents/PostList'

const HomeScreen = () => {

  return (
    <View style={{flex:1}}>
        <PostList/>   
    </View>
  )
}
export default HomeScreen