import { View, Text, Image, SafeAreaView, Pressable } from 'react-native'
import { Link } from 'expo-router'
import React, {useState, useEffect} from 'react'
import styles from './styles'
import { MaterialIcons } from '@expo/vector-icons';
import { getUrl } from 'aws-amplify/storage';

const OfficeSpacePost = ({post}) => {

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
        <Link href={`/explore/houseinfo/${post.id}`} asChild>
          <Pressable>
            <View style={styles.imageContainer}>
              {/* Image */}
              <Image source={{uri: imageUris[0]}} style={styles.image}/>
            </View>
          </Pressable>
        </Link>

        {/* Username */}
        <Link href={`/realtor/houserealtorprofilepage/${post.realtorId}`} asChild>
          <Pressable style={styles.contact}>
            <Text style={styles.name}>{post.firstName}</Text>
          </Pressable>
        </Link>

        {/* Bed & Bedrooms */}
        <Text style={styles.bedroom}>{post.bedrooms} Bedroom Apartment</Text>

        {/* Location */}
        <Text style={styles.location}>{post.address}</Text>


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

export default OfficeSpacePost;