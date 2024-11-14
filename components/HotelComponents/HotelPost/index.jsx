import { View, Text, SafeAreaView, Pressable } from 'react-native'
import { router } from 'expo-router'
import React, {useState, useEffect} from 'react';
import styles from './styles';
import DefaultImage from '../../../assets/images/defaultImage.png';
import { FontAwesome6 } from '@expo/vector-icons';
import { getUrl } from 'aws-amplify/storage';
import SmartImage from '../../SmartImage/SmartImage';

const Image = SmartImage;

const HotelPost = ({post}) => {

  const [imageUris, setImageUris] = useState([]);
  const formattedPrice = Number(post.price)?.toLocaleString();

  // Fetch signed URLs for each image in post.media
  const fetchImageUrls = async () => {
    try {
      const urls = await Promise.all(
        post.media.map(async (path) => {
          const result = await getUrl({
            path,
            options: {
              validateObjectExistence: true, 
              expiresIn: null, // No expiration limit
            },
          });
  
          // Use `result.url` 
          return result.url.toString(); 

        })
      );
  
      const validUrls = urls.filter(url => url !== null);
      setImageUris(validUrls);
    } catch (error) {
      console.error('Error fetching image URLs:', error);
    }
  };

  useEffect(()=>{
    if (post.media?.length > 0) {
      fetchImageUrls();
    }
  }, [post.media])

  return (
      <View style={styles.container}>
        <Pressable onPress={()=> router.push(`/search/hotelsearch/hotelinfo/${post.id}`)}>
          <View style={styles.imageContainer}>
            {/* Image */}
            {imageUris[0] ? ( 
              <Image 
                source={{uri: imageUris[0]}} 
                style={styles.image}
                width={50}
                height={50}
              />
            ) : (
              <Image source={DefaultImage} style={styles.image} />
            )}
          </View>
        </Pressable>


        {/* Username */}

        <Pressable style={styles.contact} onPress={()=>router.push(`/realtor/hotelrealtor/hotelrealtorprofilepage/${post.realtorId}`)}>
          <Text style={styles.name}>{post.firstName}</Text>
        </Pressable>

        {post.type && (
          <Text style={styles.bedroom}>{post.type}</Text>
        )}

        <View style={styles.room}>
          {/* Bed & Bedrooms */}
          {post.bed && (
            <Text style={styles.bedroom}>Beds: {post.bed} </Text>
          )}

          {post.bedrooms && (
            <Text style={styles.bedroom}>Bedroom(s):{post.bedrooms} </Text>
          )}
        </View>

        {/* Location */}
        {post.address && (
          <Text style={styles.location}>
            {`...${post.address.substring(8, 17)}...`}
          </Text>
        )}

        {/* Type & Description */}
        {post.description && (
          <Text style={styles.description} numberOfLines={2}>{post.description}</Text>
        )}

        {/* Old Price & New Price */}
        {/* Price */}
        {post.price && (
          <View style={styles.priceRow}>
            <Text style={styles.sub}></Text>
            <Text style={styles.price}> 
              ₦{formattedPrice} / Night
            </Text>
          </View>
        )}

      </View>
      
    
  )
}

export default HotelPost