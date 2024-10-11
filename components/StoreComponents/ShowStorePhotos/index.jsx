import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router'

const ShowStorePhotos = ({photo}) => {
  return (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image source={{uri: photo}} style={styles.image}/>
        </View>
    </View>
  )
}

export default ShowStorePhotos;