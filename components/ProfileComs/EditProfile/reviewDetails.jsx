import { View, Text, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import {useProfileContext} from '@/providers/ProfileProvider';
import { useAuthContext } from '@/providers/AuthProvider';
import styles from './styles'
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { DataStore } from 'aws-amplify/datastore';
import {User} from '@/src/models';

const ReviewDetails = () => {

    const {firstName, lastName, profilePic, address, phoneNumber,} = useProfileContext()

    const {dbUser, setDbUser, sub} = useAuthContext()

    // Function to create and update user
    const createUser = async () =>{
        try{
            const user = await DataStore.save(new User({
                profilePic,
                firstName, lastName, address, phoneNumber, 
                sub
            }))
            setDbUser(user)
        }catch(e){
            Alert.alert('Error', e.message)
        }
    };

    const updateUser = async () =>{
        try{
            const user = await DataStore.save(User.copyOf(dbUser, (updated)=>{
                updated.firstName = firstName;
                updated.lastName = lastName;
                updated.profilePic = profilePic;
                updated.address = address;
                updated.phoneNumber = phoneNumber
            }))
            setDbUser(user)
        }catch(e){
            Alert.alert('Error', e.message)
        }
    };

    const handleSave = async () => {
        if(dbUser){
            await updateUser()
            router.push('/home')
        }else {
            await createUser ()
            router.push('/home')
        }
    }

  return (
    <View style={styles.container}>

        <Text style={styles.title}>Review Profile</Text>

        {/* Back Button */}
        <TouchableOpacity onPress={()=>router.back()} style={styles.bckBtnCon}>
                <Ionicons name={'arrow-back'} style={styles.bckBtnIcon}/>
        </TouchableOpacity>

        <ScrollView showsVerticalScrollIndicator={false}>
            {
                profilePic && ( 
                    <View style={styles.profilePicContainer}>
                        <Image source={{ uri: profilePic }} style={styles.img} />
                    </View>
                )
            }

            <Text style={styles.subHeader}>First Name:</Text>
            <Text style={styles.inputReview}>{firstName}</Text>

            <Text style={styles.subHeader}>Last Name:</Text>
            <Text style={styles.inputReview}>{lastName}</Text>

            <Text style={styles.subHeader}>Address:</Text>
            <Text style={styles.inputReview}>{address}</Text>

            <Text style={styles.subHeader}>Phone Number:</Text>
            <Text style={styles.inputReviewLast}>{phoneNumber}</Text>
        </ScrollView>

        {/* Button */}
        <TouchableOpacity onPress={handleSave} style={styles.saveBtn}>
            <Text style={styles.saveBtnTxt}>Save</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ReviewDetails;