import { View, Text, FlatList } from 'react-native'
import React from 'react'
import feed from '../../../assets/data/feed'
import Post from '../../../components/HouseComponents/Post'

const SearchResultScreen = () => {
  return (
    <View>
      <FlatList 
        data={feed}
        renderItem={({item})=> <Post post={item}/>}
      />
    </View>
  )
}

export default SearchResultScreen