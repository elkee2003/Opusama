import { View, Text, Image, Pressable,ScrollView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import styles from './styles'
import { FontAwesome6 } from '@expo/vector-icons';

const DetailedPost = ({post}) => {

  return (
      <ScrollView style={styles.container}>
        <Link href={`/fullView/${post.id}`} asChild>
          <Pressable onPress={()=>console.log(post.image)}>
            <View style={styles.imageContainer}>
              {/* Image */}
              <Image source={{uri: post.image[0]}} style={styles.image}/>
            </View>
          </Pressable>
        </Link>
      

        {/* Bed & Bedrooms */}
        <Text style={styles.bedroom}>A {post.bed} Bedroom Apartment</Text>

        {/* Location */}
        <Text style={styles.location}>{post.location}</Text>

        {/* User */}
        <View style={styles.user}>
          <FontAwesome6 name="person" size={24} color="black" />
          <Text style={styles.name}>:{post.username}</Text>
        </View>

        {/* Type & Description */}
        <Text style={styles.description}>{post.description}</Text>

        {/* Old Price & New Price */}
        <Text style={styles.prices}>
          <Text style={styles.oldPrice}>₦{post.oldPrice} </Text>
          <Text style={styles.newPrice}>  ₦{post.newPrice}{' '}</Text>
          / year 
        </Text>

        {/* Total Price */}
        <Text style={styles.totalPrice}>
          ₦{post.totalPrice} 
        </Text>
      </ScrollView>
  )
}

export default DetailedPost;