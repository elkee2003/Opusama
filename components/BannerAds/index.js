import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

const Banner = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.bannerTxt}>Place Your Adverts Here</Text>
    </View>
  )
}

export default Banner