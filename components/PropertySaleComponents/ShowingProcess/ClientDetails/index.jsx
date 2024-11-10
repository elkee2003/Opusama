import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, {useState,} from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import styles from './styles'
import { useShowingContext } from '@/providers/ShowingProvider';
import { router } from 'expo-router';


const ClientDetails = () => {

    const {clientFirstName, setClientFirstName, clientLastName, setClientLastName, clientPhoneNumber, setClientPhoneNumber, note, setNote, errorMessage, onValidateInput,} = useShowingContext();

    const handleGoToReview = () => {
        if(onValidateInput()){
            router.push(`/realtor/propertysalerealtor/reviewshowinginfo`); 
        }
    };

  return (
    <View style={styles.container}>

        {/* Header */}
        <Text style={styles.header}>Client Details</Text>

        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            

            <View style={styles.card}>
                <Text style={styles.txtInputHeader}>First Name:</Text>
                <TextInput
                    style={styles.txtInput}
                    value={clientFirstName}
                    onChangeText={setClientFirstName}
                    multiline
                    placeholder='First name of client'
                />

                <Text style={styles.txtInputHeader}>Last Name:</Text>
                <TextInput
                    style={styles.txtInput}
                    value={clientLastName}
                    onChangeText={setClientLastName}
                    multiline
                    placeholder='Last name of client'
                />

                <Text style={styles.txtInputHeader}>Phone Number:</Text>
                <TextInput
                    style={styles.txtInput}
                    value={clientPhoneNumber}
                    onChangeText={setClientPhoneNumber}
                    multiline
                    placeholder='Phone number'
                    keyboardType='numeric'
                />

                <Text style={styles.txtInputHeader}>Short Note:</Text>
                <TextInput
                    style={styles.txtInputNote}
                    value={note}
                    onChangeText={setNote}
                    multiline
                    placeholder='Write a short note(Optional)'
                />
            </View>
        </ScrollView>
        {/* Error Message */}
        <Text style={styles.error}>{errorMessage}</Text>
        <TouchableOpacity style={styles.nxtBtn} onPress={handleGoToReview}>
            <MaterialIcons name="navigate-next" style={styles.nxtIcon}/>
        </TouchableOpacity>
    </View>
  )
}

export default ClientDetails;