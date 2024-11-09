import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { getUrl } from 'aws-amplify/storage';

const PostGallery = ({photo}) => {

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
      <Image source={{uri: mediaUri}} style={styles.image}/>
    </View>
  )
}

export default PostGallery;