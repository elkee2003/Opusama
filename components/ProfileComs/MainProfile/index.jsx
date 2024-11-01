import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Placeholder from '../../../assets/images/placeholder.png';
import { router } from 'expo-router';
import {useProfileContext} from '@/providers/ProfileProvider';

const ProfilePage = () => {

  const {
    firstName, lastName, profilePic, address, phoneNumber, 
  } = useProfileContext()

  return (
    <View style={styles.container}>
      <View>
        {/* Profile Picture */}
        {
          <View style={styles.profilePicContainer}>
            {profilePic ? (
                <Image source={{ uri: profilePic }} style={styles.img} />
            ) : (
                <Image source={Placeholder} style={styles.img} />
            )}
        </View>
        }

        {/* Name and Surname */}
        <View style={styles.row}>
          <Ionicons name="person" size={24} color="black" />
          <Text style={styles.name}>{firstName}</Text>
        </View>

        {/* PhoneNumber */}
        <View style={styles.row}>
          <FontAwesome name="phone" size={24} color="black" />
          <Text style={styles.txt}>{phoneNumber}</Text>
        </View>
        

        {/* Address */}
        <View style={styles.row}>
          <Entypo name="location" size={24} color="black" />
          <Text style={styles.txt}>{address}</Text>
        </View>

        <View style={styles.profileSubrow}>
          <TouchableOpacity onPress={()=>router.push('/profile/editprofile')} style={styles.subHeaderContainer}>
            <Text style={styles.subHeader}>Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> router.push('/profile/reviewinfo')} style={styles.subHeaderContainer}>
            <Text style={styles.subHeader}>
              View Info
            </Text>
          </TouchableOpacity>

        </View>

      </View>
    </View>
  )
}

export default ProfilePage