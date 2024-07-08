import { View, Text, FlatList } from 'react-native'
import React from 'react'
import feeds from '../../../assets/data/feed'
import Post from '../Post'
import styles from './styles'

const PostList = () => {

  const feedData = feeds.flatMap(feed=>feed.posts.map(post=>({
      ...post, // Include all properties of the post
      postId: feed.id,
      username: feed.username, // Add parent hotel information
      phoneNumber: feed.phoneNumber,
      email: feed.email,
      mydescription: feed.myDescription
  })))

  return (
    <View style={styles.container}>
      {
        feedData && feedData.length > 0 ?
        <FlatList 
            data={feedData}
            renderItem={({item})=> <Post post={item}/>}
        />
        :
        <Text style={styles.noListings}>There are no House listings</Text>
      }
    </View>
  )
}

export default PostList