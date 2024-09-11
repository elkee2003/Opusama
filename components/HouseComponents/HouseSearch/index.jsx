import { View, Text, TextInput, FlatList, ActivityIndicator } from 'react-native'
import React, {useState, useEffect} from 'react';
import styles from './styles';
import feeds from '../../../assets/data/feed';
import SearchResults from './searchResultsCom'

const HouseSearch = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [house, setHouse] = useState([])

    const feedData = feeds.flatMap(feed => feed.posts);

    const handleSearch = (query) =>{
        setSearchQuery(query)
    }

    useEffect (()=>{
        console.log(feedData)
    }, [])

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.searchInput}
        placeholder='Search House'
        value={searchQuery}
        onChangeText={(query)=>handleSearch(query)}
      />
      <FlatList 
        data={feedData}
        keyExtractor={(item) => item.id}
        renderItem={({item})=><View></View>}
      />
    </View>
  )
}

export default HouseSearch