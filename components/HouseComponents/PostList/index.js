import { View, Text, FlatList } from 'react-native'
import React from 'react'
import feed from '../../../assets/data/feed'
import Post from '../Post'
import styles from './styles'

const PostList = () => {
  return (
    <View style={styles.container}>
      {
        feed && feed.length > 0 ?
        <FlatList 
            data={feed}
            renderItem={({item})=> <Post post={item}/>}
        />
        :
        <Text style={styles.noListings}>There are no House listings</Text>
      }
    </View>
  )
}

export default PostList