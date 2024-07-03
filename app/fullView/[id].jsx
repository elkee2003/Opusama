import { View, FlatList, Pressable, StyleSheet} from 'react-native'
import React from 'react'
import SpecificPhoto from '../../components/HouseComponents/SpecificPhoto'
import ShowPhotos from '../../components/HouseComponents/ShowPhotos'
import places from '../../assets/data/feed'
import { useLocalSearchParams } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router'



const FullView = () => {

  // const house = places[3]

  const {id}= useLocalSearchParams()

  const house = places.find(item=>item.id === id)

  return (
    <View style={{flex:1, position:'relative' }} >
        <FlatList
        data={house.image}
        renderItem={({item})=><SpecificPhoto photo={item}/>}
        horizontal
        pagingEnabled
        />
        {/* <Pressable onPress={()=>router.back()} style={{
          position:'absolute',
          top:20,
          left:15,
          zIndex:4,
        }}>
            <Ionicons name="arrow-back-circle-sharp" style={styles.backIcon} />
        </Pressable>
        <FlatList
        showsVerticalScrollIndicator={false}
        data={house.image}
        contentContainerStyle={{gap:5}}
        renderItem={({item})=><ShowPhotos photo={item}/>}
        /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  backIcon:{
    fontSize:50,
    color:'red'
  }
})

export default FullView;