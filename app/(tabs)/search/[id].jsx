import { View, Text, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import DetailedPost from '../../../components/HouseComponents/DetailedPost'
import { useLocalSearchParams } from 'expo-router'
import feed from '../../../assets/data/feed'

const Accommodation = () => {

  const {id}= useLocalSearchParams()

  // Access the clicked accomodation
  const post = feed.find(item => item.id === id)


  return (
    <SafeAreaView>
      <View style={{top:50, alignItems:'center', justifyContent:"center"}}>
        <DetailedPost post={post}/>
      </View>
    </SafeAreaView>
  )
}

export default Accommodation