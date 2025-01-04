import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, {useState,} from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import styles from './styles'
import {useBookingShowingContext} from '@/providers/BookingShowingProvider';
import { router } from 'expo-router';

const ClientDetails = ({post}) => {

    const {adults, setAdults, kids, setKids, infants, setInfants, guestFirstName, setGuestFirstName, guestLastName, setGuestLastName, guestPhoneNumber, setGuestPhoneNumber, note, setNote, errorMessage, onValidateHotelInput, onValidatePropertyInput} = useBookingShowingContext();

    const handleProceedToBooking = () => {
      if(post?.propertyType === 'Hotel / Shortlet') {
        if(onValidateHotelInput()){
            router.push(`/explore/bookinginfo/${post.id}`); 
        }
      }else{
        if(onValidatePropertyInput()){
          router.push(`/explore/reviewclientinfo`); 
        }
      }
    };

  return (
    <View style={styles.container}>

        {/* Header */}
        {post?.propertyType === 'Hotel / Shortlet' ? (
          <Text style={styles.header}>
            Guest Details
          </Text>) : (
          <Text style={styles.header}>
            Client Details
          </Text>)
        }

        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            
            {post?.propertyType === 'Hotel / Shortlet' && (
              <View style={styles.card}>
                {/* Adults */}
                <View style={styles.row}>
                    <View>
                        <Text style={styles.guest}>Adults</Text>
                        <Text style={styles.age}>Ages 16 or above</Text>
                    </View>

                    {/* Buttons */}
                    <View style={styles.value}>
                        <TouchableOpacity style={styles.btnValue} onPress={()=> setAdults(Math.max(0, adults - 1))}>
                            <AntDesign name="minus" size={20} color="black" />
                        </TouchableOpacity>

                        <Text style={styles.num}>{adults}</Text>

                        <TouchableOpacity style={styles.btnValue} onPress={()=> setAdults(adults + 1)}>
                            <AntDesign name="plus" size={20} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.divider}/>

                {/* Children */}
                <View style={styles.row}>
                    <View>
                        <Text style={styles.guest}>Children</Text>
                        <Text style={styles.age}>Ages 2 - 15</Text>
                    </View>

                    {/* Buttons */}
                    <View style={styles.value}>
                        <TouchableOpacity style={styles.btnValue} onPress={()=> setKids(Math.max(0, kids - 1))}>
                            <AntDesign name="minus" size={20} color="black" />
                        </TouchableOpacity>

                        <Text style={styles.num}>{kids}</Text>

                        <TouchableOpacity style={styles.btnValue} onPress={()=> setKids(kids + 1)}>
                            <AntDesign name="plus" size={20} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.divider}/>

                {/* Infants */}
                <View style={styles.row}>
                    <View>
                        <Text style={styles.guest}>Infants</Text>
                        <Text style={styles.age}>Under 2</Text>
                    </View>

                    {/* Buttons */}
                    <View style={styles.value}>
                        <TouchableOpacity style={styles.btnValue} onPress={()=> setInfants(Math.max(0, infants - 1))}>
                            <AntDesign name="minus" size={20} color="black" />
                        </TouchableOpacity>

                        <Text style={styles.num}>{infants}</Text>

                        <TouchableOpacity style={styles.btnValue} onPress={()=> setInfants(infants + 1)}>
                            <AntDesign name="plus" size={20} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.divider}/>
              </View>
            )}

            <View style={styles.card}>
                <Text style={styles.txtInputHeader}>First Name:</Text>
                <TextInput
                    style={styles.txtInput}
                    value={guestFirstName}
                    onChangeText={setGuestFirstName}
                    multiline
                    placeholder='First name of guest(s)'
                />

                <Text style={styles.txtInputHeader}>Last Name:</Text>
                <TextInput
                    style={styles.txtInput}
                    value={guestLastName}
                    onChangeText={setGuestLastName}
                    multiline
                    placeholder='Last name of guest(s)'
                />

                <Text style={styles.txtInputHeader}>Phone Number:</Text>
                <TextInput
                    style={styles.txtInput}
                    value={guestPhoneNumber}
                    onChangeText={setGuestPhoneNumber}
                    multiline
                    placeholder='Phone number'
                    keyboardType='numeric'
                />

                <Text style={styles.txtInputHeader}>
                  {post?.propertyType === 'Hotel / Shortlet' ? 'Purpose of Stay' : 'Short Note'}
                </Text>
                <TextInput
                    style={styles.txtInput}
                    value={note}
                    onChangeText={setNote}
                    multiline
                    placeholder='Purpose of stay(Optional)'
                />
            </View>
        </ScrollView>
        {/* Error Message */}
        <Text style={styles.error}>{errorMessage}</Text>
        <TouchableOpacity style={styles.nxtBtn} onPress={handleProceedToBooking}>
            <MaterialIcons name="navigate-next" style={styles.nxtIcon}/>
        </TouchableOpacity>
    </View>
  )
}

export default ClientDetails;