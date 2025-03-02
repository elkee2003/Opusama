import { View, Text, TextInput, Alert, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import * as ImagePicker from 'expo-image-picker';
import styles from './styles';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import { signOut } from 'aws-amplify/auth';
import { useAuthContext } from '@/providers/AuthProvider';
import {useProfileContext} from '@/providers/ProfileProvider';

const EditProfile = () => {

    const {authUser} = useAuthContext();

    const {firstName,setFirstName, lastName, setLastName, profilePic, address, setAddress, setProfilePic, phoneNumber, setPhoneNumber, errorMessage, onValidateInput,} = useProfileContext();

    // Pick Image function
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setProfilePic(result.assets[0].uri);
        }
    };

    // Navigation Function
    const goToNxtPage = () => {
        if (onValidateInput()) {
            router.push('/profile/reviewprofile'); // 
        }
    };

    const onSignIn = () =>{
      router.push('/login')
    }

    // Signout function
    async function handleSignOut() {
        try {
          const res = await signOut();
          console.log(res)
        } catch (error) {
          console.log('error signing out: ', error);
        }
    }

    // Signout function from amplify
    const onSignout = ()=>{
        Alert.alert(
          'Sign Out',
          'Are you sure you want to sign out?',
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

    const handleAuthAction = () => {
      if (authUser) {
        onSignout(); // Call the sign-out function if the user is authenticated
      } else {
        onSignIn(); 
      }
    };

    if(!authUser){
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Sign In</Text>

          {/* Sign In */}
          <TouchableOpacity style={styles.signoutBtn} onPress={handleAuthAction}>
            <Text style={styles.signoutTxt}>{authUser ? 'Sign Out' : 'Sign In'}</Text>
          </TouchableOpacity>

          {/* Circle for image */}
          <View style={styles.profilePicContainer} />

          {/* Empty inputs */}
          <View style={styles.emptyInputCon}>
            <View style={styles.emptyInput}/>
            <View style={styles.emptyInput}/>
            <View style={styles.emptyInput}/>
          </View>
          <TouchableOpacity 
            style={styles.emptyBtnCon}
            onPress={()=>router.push('/login')}
          >
            <Text style={styles.emptyBtnTxt}>Sign In</Text>
          </TouchableOpacity>
        </View>
      )
    }

  return (
      <View style={styles.container}>
        {authUser && (
          <View>
            <Text style={styles.title}>Edit Profile</Text>

            {/* Upload Profile Picture */}
            <View style={styles.profilePicContainer}>
              {
                profilePic && <Image source={{ uri: profilePic }} style={styles.img} />
              }
              <View style={styles.plusIconContainer}>
                <TouchableOpacity onPress={pickImage}>
                  <AntDesign style={styles.plusIcon} name="pluscircle"  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Sign out button */}
            <TouchableOpacity style={styles.signoutBtn} onPress={handleAuthAction}>
              <Text style={styles.signoutTxt}>{authUser ? 'Sign Out' : 'Sign In'}</Text>
            </TouchableOpacity>

            <ScrollView showsVerticalScrollIndicator={false}>
              <TextInput 
                  value={firstName}
                  onChangeText={setFirstName}
                  placeholder='First Name / Company name'
                  style={styles.input}
              />

              <TextInput 
                value={lastName}
                onChangeText={setLastName}
                placeholder='Surname (Optional)'
                style={styles.input}
              />

              <TextInput
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                placeholder='Phone Number'
                style={styles.input}
                keyboardType='numeric'
              />

              <TextInput 
                value={address}
                onChangeText={setAddress}
                placeholder='Input Address'
                style={styles.input}
              />
            </ScrollView>
            
            {/* Error Message */}
            <Text style={styles.error}>{errorMessage}</Text>

            <TouchableOpacity onPress={goToNxtPage} style={styles.nxtBtn}>
              <MaterialIcons name="navigate-next" style={styles.nxtBtnIcon} />
            </TouchableOpacity>
          </View>
        )}
      </View>
  )
}

export default EditProfile;