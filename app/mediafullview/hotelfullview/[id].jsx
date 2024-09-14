import { View, FlatList, Pressable, StyleSheet} from 'react-native'
import React, {useState, useEffect} from 'react'
import SpecificHotelPhoto from '../../../components/HotelComponents/SpecificHotelPhoto'
import { useLocalSearchParams } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router'
import { DataStore } from 'aws-amplify/datastore'
import { Post } from '../../../src/models'

const HotelFullView = () => {

  const {id}= useLocalSearchParams()
  const [media, setMedia] = useState(null);

  const fetchPostMedia = async () =>{
    try{
      if(id){
        const foundPost = await DataStore.query(Post, id)
        
        if(foundPost && foundPost.media){
          setMedia(foundPost.media);
        }
      }
    }catch(error){
      console.error('this is error for full view images', error)
    }
  }

  useEffect(() => {
    fetchPostMedia();
  }, [id]);

  return (
    <View style={{flex:1, position:'relative' }} >
        <FlatList
        data={media}
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