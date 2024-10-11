import { View, Text, Image, SafeAreaView, Pressable } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'
import styles from './styles'
import { MaterialIcons } from '@expo/vector-icons';

const Post = ({post}) => {
  const formattedPrice = Number(post.price).toLocaleString();

  return (
      <View style={styles.container}>
        <Link href={`/explore/houseinfo/${post.id}`} asChild>
          <Pressable>
            <View style={styles.imageContainer}>
              {/* Image */}
              <Image source={{uri: post.media[0]}} style={styles.image}/>
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

export default Post