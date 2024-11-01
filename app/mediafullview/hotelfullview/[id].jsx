import { View, FlatList,} from 'react-native'
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
    </View>
  )
}

export default HotelFullView;