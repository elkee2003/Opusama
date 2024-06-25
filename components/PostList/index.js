import { View, Text, FlatList } from 'react-native'
import React from 'react'
import feed from '../../assets/data/feed'
import Post from '../Post'
import styles from './styles'

const PostList = () => {
  return (
    <View style={styles.container}>
      <FlatList 
          data={feed}
          renderItem={({item})=> <Post post={item}/>}
      />
    </View>
  )
}

export default PostList