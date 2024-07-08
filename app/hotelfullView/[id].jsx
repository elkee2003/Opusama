import { View, FlatList, Pressable, StyleSheet} from 'react-native'
import React from 'react'
import SpecificHotelPhoto from '../../components/HotelComponents/SpecificHotelPhoto'

import hotels from '../../assets/data/hotels'
import { useLocalSearchParams } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router'



const HotelFullView = () => {


  const {id}= useLocalSearchParams()

  const flattenHotelPosts = hotels.flatMap(hotel => hotel.posts.map(post => post))

  const hotel = flattenHotelPosts.find(item=>item.id === id)

  return (
    <View style={{flex:1, position:'relative' }} >
        <FlatList
        data={hotel.media[0].urls}
        renderItem={({item})=><SpecificHotelPhoto photo={item}/>}
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

export default HotelFullView;