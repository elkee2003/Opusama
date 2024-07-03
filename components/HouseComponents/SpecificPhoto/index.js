import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const SpecificPhoto = ({photo}) => {

  return (
    <View style={styles.container}>
      <Pressable onPress={()=>router.back()} style={styles.backIconContainer}>
        <Ionicons style={styles.backIcon} name="arrow-back-sharp" size={24} color="black" />
      </Pressable>
      <Image source={{uri: photo}} style={styles.image}/>
    </View>
  )
}

export default SpecificPhoto;