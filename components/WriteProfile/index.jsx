import { View, Text, TextInput,Pressable, Alert, ScrollView} from 'react-native'
import React, { useState, } from 'react'
import styles from './styles'
import { Link } from 'expo-router'
import { signOut } from 'aws-amplify/auth';
import { Ionicons } from '@expo/vector-icons';


const Profile = () => {

    const [firstName, setFirstName] = useState("")
    const [surname, setSurname] = useState("")
    const [address, setAddress] = useState( "")
    const [phoneNumber, setPhoneNumber]= useState("")
    
    const [phoneNumberError, setPhoneNumberError] = useState('')

    const handleSignOut = async()=> {
      try {
        await signOut();
      } catch (error) {
        console.log('error signing out: ', error);
      }
    }


    return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>Profile</Text>

      <View style={styles.profilePicContainer}>
      </View>

      <TextInput 
      value={firstName}
      onChangeText={setFirstName}
      placeholder='Name / Company name'
      style={styles.input}
      />
      <TextInput 
      value={surname}
      onChangeText={setSurname}
      placeholder='Surname (Optional)'
      style={styles.input}
      />

      <TextInput 
      value={address}
      onChangeText={setAddress}
      placeholder='Address'
      style={{...styles.input, color: '#04df04'}}
      />
    
      <TextInput
      value={phoneNumber}
      onChangeText={setPhoneNumber}
      placeholder='Phone Number'
      style={styles.input}
      />
      {phoneNumberError ? (
        <Text style={styles.error}>{phoneNumberError}</Text>
      ) : null}

        <View style={styles.scrnBtns}>
            <Link href={'/profile'} asChild>
                <Pressable onPress={()=>console.warn('save')} style={styles.saveBtn}>
                <Text style={styles.saveTxt}>Save</Text>
                </Pressable>
            </Link>

            <Pressable onPress={handleSignOut} style={styles.signoutBtn}>
            <Text style={styles.signoutTxt}>Sign Out</Text>
            </Pressable>
        </View>
      
      
    </ScrollView>
  )
}

export default Profile;