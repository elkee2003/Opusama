import { View, Text, Image, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React, {useState, useEffect} from 'react'
import styles from './styles'
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Placeholder from '../../../assets/images/placeholder.png';
import { router } from 'expo-router';
import {useProfileContext} from '@/providers/ProfileProvider';
import {useAuthContext} from '@/providers/AuthProvider';
import { signOut } from 'aws-amplify/auth';
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

    if (!dbUser?.profilePic) {
      // If profilePic is not available, use the placeholder
      setProfilePic(null);
      setLoading(false);
      return;
    }
    
    try {
      const result = await getUrl({
        path: dbUser.profilePic,
        options: {
          validateObjectExistence: true, 
          expiresIn: null, // No expiration limit
        },
      });

      if (result.url) {
        setProfilePic(result?.url.toString());
      }else {
        setProfilePic(null); // Fallback to null if no URL is returned
      }
    } catch (error) {
      console.log('Error fetching profile pic URL:', error);
      setProfilePic(null); 
    }finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!dbUser?.profilePic || dbUser.profilePic.trim() === "") {
      return;
    }

    fetchImageUrl();

    const subscription = DataStore.observe(User).subscribe(({opType})=>{
      if(opType === 'INSERT' || opType === 'UPDATE' || opType === 'DELETE'){
        fetchImageUrl();
      }
    });

    return () => subscription.unsubscribe();
  }, [dbUser.profilePic]);
  
  // Signout function
  async function handleSignOut() {
      try {
        const res = await signOut();
        console.log(res)
      } catch (error) {
        console.log('error signing out: ', error);
      }
  };
  
  // Signout function from amplify
  const onSignout = ()=>{
      Alert.alert(
        'Sign Out',
        'Are you sure you want to sign out? Click on YES, then refresh the App',
        [
          {
            text: "Cancel",
            style: "cancel",
            
          },
          {
            text: "Yes",
            onPress: () => handleSignOut(),
          },
        ],
        { cancelable: true }
      )
    };

  return (
    <View style={styles.container}>
      {/* Profile Picture */}
      {
        <TouchableOpacity 
          style={styles.profilePicContainer}
          onPress={()=>router.push('/profile/editprofile')}
        >
        {loading || !profilePic  ? (
          <Image 
            source={Placeholder} 
            style={styles.img}
          /> // Show placeholder while loading
        ) : (
          <Image 
            source={{ uri: profilePic }} 
            style={styles.img} 
            onError={() => setProfilePic(null)}
            width={50}
            height={50} 
          />
        )}
      </TouchableOpacity>
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

      {/* Buttons */}
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Terms & Conditions */}
        <TouchableOpacity 
          style={styles.btnCard}
          onPress={()=>{router.push('/termsandconditions')}}
        >
          <Text style={styles.btnTxt}>Terms and Conditons</Text>
          <MaterialIcons name="navigate-next" style={styles.nxtIcon} />
        </TouchableOpacity>

        {/* Privacy Policy */}
        <TouchableOpacity 
          style={styles.btnCard}
          onPress={()=> router.push('/privacypolicy')}
        >
          <Text style={styles.btnTxt}>Privacy Policy</Text>
          <MaterialIcons name="navigate-next" style={styles.nxtIcon} />
        </TouchableOpacity>

        {/* Support */}
        <TouchableOpacity 
          style={styles.btnCard}
          onPress={()=> router.push('/profilebuttons/support')}
        >
          <Text style={styles.btnTxt}>
            Support
          </Text>
          <MaterialIcons name="navigate-next" style={styles.nxtIcon} />
        </TouchableOpacity>

        {/* Support */}
        <TouchableOpacity 
          style={styles.btnCard}
          onPress={onSignout}
        >
          <Text style={styles.btnTxt}>
            Sign Out
          </Text>
          <MaterialIcons name="navigate-next" style={styles.nxtIcon} />
        </TouchableOpacity>

        {/* Delete Account */}
        <TouchableOpacity 
          style={styles.btnCard}
          onPress={()=> router.push('/profilebuttons/deleteaccount')}
        >
          <Text style={styles.btnTxt}>
            Delete Account
          </Text>
          <MaterialIcons name="navigate-next" style={styles.nxtIcon} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default ProfilePage