import { View, Text, Pressable } from 'react-native'
import React, {useState, useEffect} from 'react'
import styles from './styles'
import DefaultImage from '../../../../assets/images/defaultImage.png';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { getUrl } from 'aws-amplify/storage';
import SmartImage from '../../../SmartImage/SmartImage';

const Image = SmartImage;

const BookedPropGallery = ({media}) => {

  const [mediaUri, setMediaUri] = useState();

  const fetchMediaUrl = async () => {
    try {
      const result = await getUrl({
        path: media,
        options: {
          validateObjectExistence: true, 
          expiresIn: null, // No expiration limit
        },
      });

      if (result.url) {
        setMediaUri(result.url.toString());
      }
    } catch (error) {
      console.error('Error fetching profile pic URL:', error);
    }
  };

  useEffect(()=>{
    if (media) {
      fetchMediaUrl();
    }
  }, [media])

  return (
    <View style={styles.container}>
      <Pressable onPress={()=>router.back()} style={styles.backIconContainer}>
        <Ionicons style={styles.backIcon} name="arrow-back-sharp" size={24} color="black" />
      </Pressable>
      {mediaUri && (
        <Image source={{uri: mediaUri}} style={styles.image}/>
      )}
    </View>
  )
}

export default BookedPropGallery;