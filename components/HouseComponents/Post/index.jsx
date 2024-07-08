import { View, Text, Image, SafeAreaView, Pressable } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'
import styles from './styles'
import { MaterialIcons } from '@expo/vector-icons';

const Post = ({post}) => {

  return (
      <View style={styles.container}>
        <Link href={`/search/${post.id}`} asChild>
          <Pressable>
            <View style={styles.imageContainer}>
              {/* Image */}
              <Image source={{uri: post.media[0].urls?.[0]}} style={styles.image}/>
            </View>
          </Pressable>
        </Link>

        {/* Username */}
        <Link href={`/realtorprofilepage/${post.userId}`} asChild>
          <Pressable style={styles.contact}>
            <Text style={styles.name}>{post.username}</Text>
          </Pressable>
        </Link>

        {/* Bed & Bedrooms */}
        <Text style={styles.bedroom}>{post.bedroom} Bedroom Apartment</Text>

        {/* Location */}
        <Text style={styles.location}>{post.location}</Text>


        {/* Type & Description */}
        <Text style={styles.description} numberOfLines={2}>{post.description}</Text>

        {/* Old Price & New Price */}
        {/* Rent */}
        <View style={styles.priceRow}>
          <Text style={styles.price}> 
            ₦{post.price} / year
          </Text>
        </View>

      </View>
      
    
  )
}

export default Post