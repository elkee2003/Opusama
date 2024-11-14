import { View, Text, Image, TouchableOpacity, } from 'react-native'
import React, {useState, useEffect} from 'react'
import styles from './styles'
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Placeholder from '../../../assets/images/placeholder.png';
import { router } from 'expo-router';
import {useProfileContext} from '@/providers/ProfileProvider';
import {useAuthContext} from '@/providers/AuthProvider';
import { DataStore } from 'aws-amplify/datastore';
import {User} from '@/src/models';
import { getUrl } from 'aws-amplify/storage';
import SmartImage from '../../SmartImage/SmartImage';


const ProfilePage = () => {

  const {
    firstName, lastName, profilePic, setProfilePic, address, phoneNumber, 
  } = useProfileContext();

  const {dbUser} = useAuthContext();

  const [loading, setLoading]= useState(true);

  // Fetch signed URL for profile picture
  const fetchImageUrl = async () => {
    setLoading(true);
    try {
      const result = await getUrl({
        path: dbUser.profilePic,
        options: {
          validateObjectExistence: true, 
          expiresIn: null, // No expiration limit
        },
      });

      if (result.url) {
        setProfilePic(result.url.toString());
      }
    } catch (error) {
      console.error('Error fetching profile pic URL:', error);
    }finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (dbUser.profilePic) {
      fetchImageUrl();
    }

    const subscription = DataStore.observe(User).subscribe(({opType})=>{
      if(opType === 'INSERT' || opType === 'UPDATE' || opType === 'DELETE'){
        fetchImageUrl();
      }
    });

    return () => subscription.unsubscribe();
  }, [dbUser.profilePic]);

  return (
    <View style={styles.container}>
      <View>
        {/* Profile Picture */}
        {
          <TouchableOpacity 
            style={styles.profilePicContainer}
            onPress={()=>router.push('/profile/editprofile')}
          >
          {loading ? (
            <Image 
              source={Placeholder} 
              style={styles.img}
            /> // Show placeholder while loading
          ) : (
            <SmartImage 
              source={{ uri: profilePic }} 
              style={styles.img} 
              onError={() => setProfilePic(null)}
              width={50}
              height={50} 
            />
          )}
        </TouchableOpacity>
        }

        {/* Ill delete this view when I have things to populate the profile page with */}
        <View style={styles.centerDetails}>
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