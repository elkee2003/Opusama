import { View, Text, FlatList } from 'react-native'
import React from 'react'
import hotels from '../../../assets/data/hotels'
import HotelPost from '../HotelPost'
import styles from './styles'

const HotelPostList = () => {
  return (
    <View style={styles.container}>
      {
        hotels && hotels.length > 0 ?
        <FlatList 
          data={hotels}
          renderItem={({item})=> <HotelPost post={item}/>}
      />
      :
          <Text style={styles.noListings}>There are no Hotel listings</Text>
      }
    </View>
  )
}

export default HotelPostList