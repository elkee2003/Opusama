import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import styles from './styles';

const SearchResultCom = ({data}) => {
  return (
    <View style={styles.locationRow}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{data.username}</Text>
      <Text>{data.location}</Text>
      <Text style={{ marginLeft: 5 }}>
        {data.price}
      </Text>
    </View>
  )
}

export default SearchResultCom