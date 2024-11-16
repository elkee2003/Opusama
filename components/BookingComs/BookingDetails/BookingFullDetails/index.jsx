import { View, Text, Image, ScrollView, Alert, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles';
import AntDesign from '@expo/vector-icons/AntDesign';
import * as Clipboard from 'expo-clipboard';
import { router } from 'expo-router';

const BookingFullDetails = ({notification, onStatusChange}) => {

  const getStatusText = (status) =>{
    if (status === 'PENDING') return 'Pending';
    if (status === 'ACCEPTED') return 'Accepted';
    if (status === 'VIEWING') return 'Viewing';
    if (status === 'VIEWED') return 'Viewed';
    if(status === 'SOLD') return 'Sold';
    if(status === 'PAID') return 'Paid';
    if(status === 'RECEIVED') return 'Received';
    if (status === 'DENIED') return 'Denied';
    return 'Pending';
  }

  // Function to copy realtor's phone number
  const handleCopyPhoneNumber = async () => {
    const phoneNumber = notification?.realtor?.phoneNumber;
    
    if (phoneNumber) {
      try {
        await Clipboard.setStringAsync(phoneNumber);
        Alert.alert('Phone Number Copied', 'You can paste it into the dialer to make a call.');
      } catch (error) {
        console.error("Error copying phone number:", error);
        Alert.alert('Error', 'Failed to copy the phone number.');
      }
    } else {
      Alert.alert('Error', 'Phone number is not available.');
    }
  };

  // Function to copy realtor's account number:
  const handleCopyAccountNumber = async () => {
    const accountNumber = notification?.realtor?.accountNumber;
    
    if (accountNumber) {
      try {
        await Clipboard.setStringAsync(accountNumber);
        Alert.alert('Account Number Copied', 'Account Number has been copied to clipboard.');
      } catch (error) {
        Alert.alert('Error', 'Failed to copy the account number.');
      }
    } else {
      Alert.alert('Error', 'Account number is not available.');
    }
  };

  return (
    <View style={styles.container}>
        {/* Details */}
        <ScrollView showsVerticalScrollIndicator={false}>

          {/* Realtor's Details */}
          {notification.status === 'ACCEPTED' && (
            <>
              <Text style={styles.header}>Realtor's Details</Text>
              {notification?.realtor?.phoneNumber && (
                <>
                  <Text style={styles.subHeader}>
                    Realtor Phone Number:
                  </Text>
                  <TouchableOpacity onPress={handleCopyPhoneNumber}>
                    <Text style={styles.detailsRealtor}>
                      {notification?.realtor?.phoneNumber}
                    </Text>
                  </TouchableOpacity> 
                </>
              )}

              {/* Show account details if ACCEPTED & Hotel/Shortlet */}
              {(notification.status === 'ACCEPTED' && notification.propertyType === 'Hotel / Shortlet') && (
                <>
                  <Text style={styles.subHeader}>Bank Name:</Text>
                  <Text style={styles.detailsRealtor}>
                    {notification?.realtor?.bankname}
                  </Text>

                  <Text style={styles.subHeader}>Account Name:</Text>
                  <Text style={styles.detailsRealtor}>
                    {notification?.realtor?.accountName}
                  </Text>

                  <Text style={styles.subHeader}>Account Number:</Text>
                  <TouchableOpacity onPress={handleCopyAccountNumber}>
                    <Text style={styles.detailsRealtor}>
                      {notification?.realtor?.accountNumber}
                    </Text>
                  </TouchableOpacity>
                </>
              )}
            </>
          )}
          
          {/* Client's Details */}
          <Text style={styles.header}>My Details</Text>
          {/* Guest units */}
          <View style={styles.guestUnit}>

            {/* Adults */}
            {notification?.adults && (
              <View>
                <Text style={styles.subHeader}>Adults:</Text>
                <Text style={styles.unitTxt}>{notification.adults}</Text>
              </View>
            )}

            {/* Children */}
            {notification?.kids && (
              <View>
                <Text style={styles.subHeader}>Children:</Text>
                <Text style={styles.unitTxt}>{notification.kids}</Text>
              </View>
            )}

            {/* Infants */}
            {notification?.infants && (
              <View>
                <Text style={styles.subHeader}>Infants:</Text>
                <Text style={styles.unitTxt}>{notification.infants}</Text>
              </View>
            )}

          </View>

          {/* FirstName */}
          {notification?.clientFirstName && (
            <>
              <Text style={styles.subHeader}>
                Name(s):
              </Text>
              <Text style={styles.details}>
                {notification?.clientFirstName}
              </Text>
            </>
          )}

          {/* LastName */}
          { notification?.clientLastName && (
            <>
              <Text style={styles.subHeader}>
              Last Name(s):
              </Text>
              <Text style={styles.details}>
                {notification?.clientLastName}
              </Text>
            </>
          )}

          {/* Phone Number */}
          {notification?.clientPhoneNumber && (
            <>
              <Text style={styles.subHeader}>
                Phone Number:
              </Text>
              <Text style={styles.details}>
                {notification?.clientPhoneNumber}
              </Text> 
            </>
          )}

          {/* Note */}
          {notification?.purpose && (
            <>
              <Text style={styles.subHeader}>
                Purpose:
              </Text> 
              <Text style={styles.details}>
                {notification?.purpose}
              </Text>
            </>
          )}

          {/* Duration */}
          {notification?.duration && (
            <>
              <Text style={styles.subHeader}>
              Duration:
              </Text> 
              <Text style={styles.details}>    
                {notification?.duration}
              </Text>
            </>
          )}

          {/* Check-in */}
          {notification?.checkInDate && (
            <>
              <Text style={styles.subHeader}>
              Check-in:
              </Text>
              <Text style={styles.details}> 
                {notification?.checkInDate}
              </Text>
            </>
          )}

          {/* Check out date */}
          {notification.checkOutDate && (
            <>
              <Text style={styles.subHeader}>
                Check-out:
              </Text> 
              <Text style={styles.details}>
                {notification?.checkOutDate}
              </Text>
            </>
          )}

          {/* Accommodation Type */}
          {notification.propertyType && (
            <>
              <Text style={styles.subHeader}>
              Accommodation Type:
              </Text> 
              <Text style={styles.details}>
                {notification?.propertyType}
              </Text>
            </>
          )}

          {/* Room Type */}
          {notification.accommodationType && (
            <>
              <Text style={styles.subHeader}>
              {notification.propertyType === 'Hotel / Shortlet' ? 'Room Type:' : 'Property Type'}
              </Text> 
              <Text style={styles.details}>
                {notification?.accommodationType}
              </Text>
            </>
          )}

          {/* Room name */}
          {notification.nameOfType && (
            <>
              <Text style={styles.subHeader}>
              Room Name:
              </Text> 
              <Text style={styles.details}>
                {notification?.nameOfType}
              </Text>
            </>
          )}

          {/* Total Price */}
          {notification.realtorPrice && (
            <>
              <Text style={styles.subHeader}>
              Price:
              </Text>
              <Text style={styles.details}> 
                ₦{Number(notification.totalPrice)?.toLocaleString()}
              </Text>
            </>
          )}
        </ScrollView>

        {/* Status */}
        <View style={styles.statusRow}>
          <Text style={styles.status}>
          {getStatusText(notification.status)}
          </Text>
          {(notification.status === 'ACCEPTED'  || notification.status === 'VIEWING' || notification.status === 'VIEWED' || notification.status === 'PAID' || notification.status === 'RECEIVED') ? (
              <View style={styles.greenIcon}/>
          ):(
              <View style={styles.redIcon}/>
          )}
        </View>

        {/* Buttons - Only show if propertyType is not 'Hotel / Shortlet' */}

        { notification.propertyType !== 'Hotel / Shortlet' && (
          <>
            {/* Viewing */}
            {notification.status === 'ACCEPTED' && (
              <View style={styles.viewConInfoRow}>
                <TouchableOpacity 
                  style={styles.view}
                  onPress={() => {
                    onStatusChange('VIEWING');
                    router.back();
                  }}
                >
                  <Text style={styles.btnTxt}>Viewing</Text>
                </TouchableOpacity>

                {/* Info Icon */}
                <TouchableOpacity 
                  style={styles.infoIconCon}
                  onPress={() => Alert.alert('Viewing Info', 'Click on "Viewing" once you are viewing the property.')}
                >
                  <AntDesign name="infocirlceo" style={styles.infoIcon} />
                </TouchableOpacity>
              </View>
            )}

            {/* Viewed */}
            {notification.status === 'VIEWING' && (
              <View style={styles.viewConInfoRow}>
                <TouchableOpacity 
                  style={styles.view}
                  onPress={() => {
                    onStatusChange('VIEWED');
                    router.back();
                  }}
                >
                  <Text style={styles.btnTxt}>Viewed</Text>
                </TouchableOpacity>

                {/* Info Icon */}
                <TouchableOpacity 
                style={styles.infoIconCon}
                onPress={() => Alert.alert('Viewing Info', 'Click on "Viewed" once you are viewing the property.')}
                >
                  <AntDesign name="infocirlceo" style={styles.infoIcon} />
                </TouchableOpacity>
              </View>
            )}

          </>
        )}

        {/* Buttons - Only show if propertyType is 'Hotel / Shortlet' */}
        {notification.propertyType === 'Hotel / Shortlet' && (
          <>
            {notification.status === 'ACCEPTED' && (
              <View style={styles.viewConInfoRow}>
                <TouchableOpacity 
                  style={styles.view}
                  onPress={() => {
                    onStatusChange('PAID');
                    router.back();
                  }}
                >
                  <Text style={styles.btnTxt}>Paid</Text>
                </TouchableOpacity>

                {/* Info Icon */}
                <TouchableOpacity 
                  style={styles.infoIconCon}
                  onPress={() => Alert.alert('Booking Info', 'Click on "Paid" once you have paid for booking.')}
                >
                  <AntDesign name="infocirlceo" style={styles.infoIcon} />
                </TouchableOpacity>
              </View>
            )}
          </>
        )}
    </View>
  )
}

export default BookingFullDetails;