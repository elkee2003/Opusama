import { View, Text, Image, SafeAreaView, Pressable } from 'react-native';
import { Link } from 'expo-router';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import DefaultImage from '../../../assets/images/defaultImage.png';
import { MaterialIcons } from '@expo/vector-icons';
import { getUrl } from 'aws-amplify/storage';

const Post = ({post}) => {

  const [imageUris, setImageUris] = useState([]);
  const formattedPrice = Number(post.price).toLocaleString();

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
        <Link href={`/search/housesearch/houseinfo/${post.id}`} asChild>
          <Pressable>
            <View style={styles.imageContainer}>
              {/* Image */}
              {imageUris[0] ? ( 
                <Image source={{uri: imageUris[0]}} style={styles.image}/>
              ) : (
                <Image source={DefaultImage} style={styles.image} />
              )}
            </View>
          </Pressable>
        </Link>

        {/* Username */}
        <Link href={`/realtor/houserealtor/houserealtorprofilepage/${post.realtorId}`} asChild>
          <Pressable style={styles.contact}>
            <Text style={styles.name}>{post.firstName}</Text>
          </Pressable>
        </Link>

        {post.type && (
          <Text style={styles.bedroom}>{post.type}</Text>
        )}

        {/* Bed & Bedrooms */}
        {post.bed && (
            <Text style={styles.bedroom}>Beds: {post.bed} </Text>
        )}

        {post.bedrooms && (
          <Text style={styles.bedroom}>Bedroom(s):{post.bedrooms} </Text>
        )}

        {/* Location */}
        {post.address && (
          <Text style={styles.location}>
            {`...${post.address.substring(8, 17)}...`}
          </Text>
        )}


        {/* Type & Description */}
        <Text style={styles.description} numberOfLines={2}>{post.description}</Text>

        {/* Old Price & New Price */}
        {/* Rent */}
        <View style={styles.priceRow}>
          <Text style={styles.price}> 
            ₦{formattedPrice} / year
          </Text>
        </View>

      </View>
      
    
  )
}

export default Post