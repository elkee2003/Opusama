import { View, Text, Image, SafeAreaView, Pressable } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'
import styles from './styles'
import { FontAwesome6 } from '@expo/vector-icons';

const Post = ({post}) => {

  return (
      <View style={styles.container}>
        <Link href={`/search/${post.id}`} asChild>
          <Pressable onPress={()=>console.warn('Check Post')}>
            <View style={styles.imageContainer}>
              {/* Image */}
              <Image source={{uri: post.image[0]}} style={styles.image}/>
            </View>
          </Pressable>
        </Link>

        <View style={styles.sub}>
          {/* Bed & Bedrooms */}
          <Text style={styles.bedroom}>{post.bedroom} Bedroom Apartment</Text>

          {/* Location */}
          <Text style={styles.location}>{post.location}</Text>
        </View>

        {/* Username */}
        <View style={styles.contact}>
          <FontAwesome6 name="person" size={24} color="black" />
          <Text style={styles.name}>{post.username}</Text>
        </View>

        {/* Type & Description */}
        <Text style={styles.description} numberOfLines={2}>{post.description}</Text>

        {/* Old Price & New Price */}
        {/* Rent */}
        <View style={styles.priceRow}>
          <Text style={styles.sub}>Rent: </Text>
          <Text style={styles.price}> 
            ₦{post.rent} / year
          </Text>
        </View>

        {/* Total Price */}
        <View style={styles.priceRowTotal}>
          <Text style={styles.sub}>Total:</Text>
          <Text style={styles.totalPrice}>
             {''}₦{post.totalRent}
          </Text>
        </View>
      </View>
      
    
  )
}

export default Post