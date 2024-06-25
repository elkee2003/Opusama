import { View, FlatList,} from 'react-native'
import React from 'react'
import SpecificPhoto from '../../../components/SpecificPhoto'
import places from '../../../assets/data/feed'

const house = places[1]


const FullView = () => {
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