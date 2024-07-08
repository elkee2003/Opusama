import { View, Text, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import DetailedPost from '../../../components/HouseComponents/DetailedPost'
import { useLocalSearchParams } from 'expo-router'
import feeds from '../../../assets/data/feed'

const Accommodation = () => {

  const {id}= useLocalSearchParams()

  const flattendPost = feeds.flatMap(feed => feed.posts.map(post => ({
    ...post,
    userId:feed.id,
    username: feed.username, // Add parent hotel information
    phoneNumber: feed.phoneNumber,
    email: feed.email,
    mydescription: feed.myDescription
  })))

  // Access the clicked accomodation
  const post = flattendPost.find(item => item.id === id)


  return (
    <SafeAreaView>
      <View style={{top:50, alignItems:'center', justifyContent:"center"}}>
        <DetailedPost post={post}/>
      </View>
    </SafeAreaView>
  )
}

export default Accommodation