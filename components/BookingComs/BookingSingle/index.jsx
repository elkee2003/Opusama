import { View, Text, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import styles from './styles';
import * as Clipboard from 'expo-clipboard';
import { router } from 'expo-router';

const BookingSingle = ({booking}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subHeading}>Guest First Name:</Text>
      <Text style={styles.detail}>work later</Text>
    </View>
  )
}

export default BookingSingle;