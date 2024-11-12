import { View, Text, TouchableOpacity , Image} from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import styles from './styles';
import { router } from 'expo-router';

const SearchResultCom = ({post}) => {

  // Format the price with commas
  const formattedPrice = Number(post.price).toLocaleString();
  
  return (
    <TouchableOpacity onPress={() => router.push(`/search/officespacesearch/officespaceinfo/${post.id}`)} style={styles.locationRow}>

      {/* Icon Container */}
      <View style={styles.iconContainer}>
        <Entypo name="location-pin" style={styles.icon}/>
      </View>

      {/* Image */}
      {/* <View style={styles.imgContainer}>
        <Image source={{uri:post?.media[0]}} style={styles.img}/>
      </View> */}

      {/* Info */}
      <View>
        <Text style={styles.realtorName}>
          {post.realtorFirstName}
        </Text>

        <View style={styles.subContainer}>
          <Text style={styles.subLocation}>{`...${post.address.substring(8,17)}...`}</Text>
          <Text style={styles.subPrice}>
          ₦{formattedPrice}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default SearchResultCom;