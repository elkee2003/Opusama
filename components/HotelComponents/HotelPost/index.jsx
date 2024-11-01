import { View, Text, Image, SafeAreaView, Pressable } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'
import styles from './styles'
import { FontAwesome6 } from '@expo/vector-icons';

const HotelPost = ({post}) => {

  const formattedPrice = Number(post.price).toLocaleString();

  return (
      <View style={styles.container}>
        <Link href={`/explore/hotelinfo/${post.id}`} asChild>
          <Pressable>
            <View style={styles.imageContainer}>
              {/* Image */}
              <Image source={{uri: post.media[0]}} style={styles.image}/>
            </View>
          </Pressable>
        </Link>

        {/* Username */}
        <Link href={`/realtor/hotelrealtor/hotelrealtorprofilepage/${post.realtorId}`} asChild>
          <Pressable style={styles.contact}>
            <Text style={styles.name}>{post.firstName}</Text>
          </Pressable>
        </Link>

        <View style={styles.room}>
          {/* Bed & Bedrooms */}
          <Text style={styles.bedroom}>Beds: {post.bed} </Text>

          <Text style={styles.bedroom}>Bedrooms:{post.bedrooms} </Text>
        </View>

        {/* Location */}
        <Text style={styles.location}>{post.address}</Text>

        {/* Type & Description */}
        <Text style={styles.description} numberOfLines={2}>{post.description}</Text>

        {/* Old Price & New Price */}
        {/* Rent */}
        <View style={styles.priceRow}>
          <Text style={styles.sub}></Text>
          <Text style={styles.price}> 
            ₦{formattedPrice} / Night
          </Text>
        </View>

      </View>
      
    
  )
}

export default HotelPost