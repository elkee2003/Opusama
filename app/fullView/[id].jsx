import { View, FlatList,} from 'react-native'
import React from 'react'
import SpecificPhoto from '../../components/SpecificPhoto'
import places from '../../assets/data/feed'
import { useLocalSearchParams } from 'expo-router'


const FullView = () => {

  // const house = places[3]

  const {id}= useLocalSearchParams()

  const house = places.find(item=>item.id === id)

  return (
    <View style={{flex:1,}} >
        <FlatList
        data={house.image}
        renderItem={({item})=><SpecificPhoto photo={item}/>}
        horizontal
        pagingEnabled
        />
    </View>
  )
}

export default FullView;