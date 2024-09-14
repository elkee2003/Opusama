import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const HotelContact = ({realtor}) => {
  return (
    <View style={styles.container}>

        {/* Card is meant to be a radial gradient of white and blue */}
      <View style={styles.card}>

        {/* Image */}
        <View style={styles.imgContainer}>
            {
                realtor.profilePic ? <Image source={{ uri: realtor.profilePic }} style={styles.profileImg} /> 
                :
                <Ionicons 
                style={styles.vectorIcon} name="person-sharp" />
            }
        </View>

        <View style={styles.contactDetails}>

            {/* Email */}
            <View style={styles.row}>
                <MaterialIcons style={styles.icon} name="email" />
                <Text style={styles.txt}>{realtor.email}</Text>
            </View>

            {/* Phone Number */}
            <View style={styles.row}>
                <FontAwesome style={styles.icon} name="phone"  />
                <Text style={styles.txt}>{realtor.phoneNumber}</Text>
            </View>

            <View style={styles.bookContainer}>
              <Text style={styles.bookHeader}>
                Schedule Viewing
              </Text>
              <View style={styles.bookRow}>

                <TouchableOpacity>
                  <Text style={styles.bookBtn}>Reserve</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Text style={styles.bookBtn}>Book</Text>
                </TouchableOpacity>
                
                <TouchableOpacity>
                  <Text style={styles.bookBtn}>Booked</Text>
                </TouchableOpacity>
              </View>
            </View>
        </View>
      </View>
    </View>
  )
}

export default HotelContact