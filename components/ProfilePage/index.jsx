import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Link } from 'expo-router';

const ProfilePage = ({name, surname,phoneNumeber}) => {
  return (
    <View style={styles.container}>
      <View>
        {/* Profile Picture */}
        <View style={styles.profilePicContainer}>
        </View>

        {/* Name and Surname */}
        <View style={styles.row}>
          <Ionicons name="person" size={24} color="black" />
          <Text style={styles.name}>Opara Horsfal</Text>
        </View>

        {/* PhoneNumber */}
        <View style={styles.row}>
          <FontAwesome name="phone" size={24} color="black" />
          <Text style={styles.txt}>+2348043355466</Text>
        </View>
        

        {/* Address */}
        <View style={styles.row}>
          <Entypo name="location" size={24} color="black" />
          <Text style={styles.txt}>No. 10B Presdential Esatate</Text>
        </View>

        <View style={styles.profileSubrow}>

          <Link href={'/profile/writeProfile'} asChild>
            <Pressable onPress={()=>console.warn('Edit Profile')} style={styles.subHeaderContainer}>
              <Text style={styles.subHeader}>Edit Profile</Text>
            </Pressable>
          </Link>

          <Pressable onPress={()=>console.warn('View Sub')} style={styles.subHeaderContainer}>
            <Text style={styles.subHeader}>
              View Subscription
            </Text>
          </Pressable>

        </View>

      </View>
    </View>
  )
}

export default ProfilePage