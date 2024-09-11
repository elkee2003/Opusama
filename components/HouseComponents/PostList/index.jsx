import { View, Text, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import feeds from '../../../assets/data/feed'
import PostFeed from '../Post'
import styles from './styles'
import { DataStore } from 'aws-amplify/datastore'
import {Post} from '../../../src/models'

const PostList = () => {

  const feedData = feeds.flatMap(feed=>feed.posts.map(post=>({
      ...post, // Include all properties of the post
      postId: feed.id,
      username: feed.username, // Add parent hotel information
      phoneNumber: feed.phoneNumber,
      email: feed.email,
      mydescription: feed.myDescription
  })))

  const [house, setHouse] = useState([])

  const fetchHouse = async () =>{
    const results = await DataStore.query(Post)
    console.log(JSON.stringify(results, null, 2))
  }

  useEffect(()=>{
    // fetchHouse();
  },[])

  return (
    <View style={styles.container}>
      {
        feedData && feedData.length > 0 ?
        <FlatList 
            data={feedData}
            renderItem={({item})=> <PostFeed post={item}/>}
        />
        :
        <Text style={styles.noListings}>No House listings</Text>
      }
    </View>
  )
}

export default PostList