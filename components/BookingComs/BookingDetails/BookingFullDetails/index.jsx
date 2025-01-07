import { View, Text, Image, ScrollView, Alert, TouchableOpacity } from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import AntDesign from '@expo/vector-icons/AntDesign';
import * as Clipboard from 'expo-clipboard';
import { router } from 'expo-router';
import {useProfileContext} from '@/providers/ProfileProvider';

const BookingFullDetails = ({notification, onStatusChange}) => {

  const {isPaymentSuccessful, setIsPaymentSuccessful, setPaymentPrice} = useProfileContext();

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

  const getStatusText = (status) =>{
    if (status === 'PENDING') return 'Pending';
    if (status === 'ACCEPTED') return 'Accepted';
    if (status === 'VIEWING') return 'Viewing';
    if (status === 'CHECKED_IN') return 'Checked In';
    if (status === 'VISITING') return 'Visting';
    if (status === 'VIEWED') return 'Viewed';
    if (status === 'CHECKED_OUT') return 'Checked Out';
    if (status === 'VISITED') return 'Visited';
    if(status === 'SOLD') return 'Sold';
    if(status === 'PAID') return 'Paid';
    if(status === 'RECEIVED') return 'Received';
    if (status === 'DENIED') return 'Denied';
    if (status === 'REMOVED_CLIENT') return 'Removed';
    return 'Pending';
  };

  // Handle Viewing button click
  const handleViewingClick = () => {
    onStatusChange('VIEWING');
    router.back();
  };

  // Handle Viewed button click
  const handleViewedClick = () => {
    onStatusChange('VIEWED');
    router.back();
  };

  // Handle Check-in button click
  const handleCheckedInClick = () => {
    onStatusChange('CHECKED_IN');
    router.back();
  };

  // Handle Check-out button click
  const handleCheckedOutClick = () => {
    onStatusChange('CHECKED_OUT');
    router.back();
  };

  // Handle Visiting button click
  const handleVisitingClick = () => {
    onStatusChange('VISITING');
    router.back();
  };

  // Handle Visited button click
  const handleVisitedClick = () => {
    onStatusChange('VISITED');
    router.back();
  };

  // Handle Payment
  const handlePayment = () =>{
    router.push({
      pathname: '/payment',
    });
  };


  useEffect(()=>{
    if (isPaymentSuccessful) {
      onStatusChange('PAID');
      setIsPaymentSuccessful(false); 
    }
  }, [isPaymentSuccessful]);

  const renderButton = () => {
    if (notification.status === 'ACCEPTED') {
      if (['House Rent', 'Student Accommodation', 'House Sale', 'Land Sale', 'Office Space'].includes(notification.propertyType)) {
        return (
          <View style={styles.viewConInfoRow}>
            {/* Button */}
            {notification?.post?.inspectionFee ? (
              <TouchableOpacity 
                style={styles.view} 
                onPress={()=>router.push('/payment')}
              >
                <Text style={styles.btnTxt}>
                  Make Payment
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.view} onPress={handleViewingClick}>
                <Text style={styles.btnTxt}>Viewing</Text>
              </TouchableOpacity>
            )}

            {/* Info Icon */}
            <TouchableOpacity 
              style={styles.infoIconCon}
              onPress={() => Alert.alert(notification?.post?.inspectionFee ? 'Payment Info' : 'Viewing Info', 
                notification?.post?.inspectionFee ? 'Click on "Make Payment" to proceed with the payment for the inspection fee.' : 'Click on "Viewing" once you are viewing the property.')}
            >
              <AntDesign name="infocirlceo" style={styles.infoIcon} />
            </TouchableOpacity>
          </View>
        );
      } else if (notification.propertyType === 'Hotel / Shortlet') {
        return (
          <View style={styles.viewConInfoRow}>
            {/* Button */}

            <TouchableOpacity style={styles.view} onPress={handlePayment}>
              <Text style={styles.btnTxt}>Make Payment</Text>
            </TouchableOpacity>

            {/* Info Icon */}
            <TouchableOpacity 
              style={styles.infoIconCon}
              onPress={() => Alert.alert('Make Payment', 'Click on "Make Payment" to pay for your booked accommodation.')}
            >
              <AntDesign name="infocirlceo" style={styles.infoIcon} />
            </TouchableOpacity>
          </View>
        );
      } else {
        return (
          <View style={styles.viewConInfoRow}>
            {/* Button */}
            <TouchableOpacity style={styles.view} onPress={handleVisitingClick}>
              <Text style={styles.btnTxt}>Visiting</Text>
            </TouchableOpacity>

            {/* Info Icon */}
            <TouchableOpacity 
              style={styles.infoIconCon}
              onPress={() => Alert.alert('Visiting Info', 'Click on "Visiting" once you are on the property.')}
            >
              <AntDesign name="infocirlceo" style={styles.infoIcon} />
            </TouchableOpacity>
          </View>
        );
      }
    }

    if (notification.status === 'VIEWING') {
      if (['House Rent', 'Student Accommodation', 'House Sale', 'Land Sale', 'Office Space'].includes(notification.propertyType)) {
        return (
          <View style={styles.viewConInfoRow}>
            {/* Button */}
            <TouchableOpacity style={styles.view} onPress={handleViewedClick}>
              <Text style={styles.btnTxt}>Viewed</Text>
            </TouchableOpacity>

            {/* Info Icon */}
            <TouchableOpacity 
              style={styles.infoIconCon}
              onPress={() => Alert.alert('Viewed Info', 'Click on "Viewed" once you are done viewing the property.')}
            >
              <AntDesign name="infocirlceo" style={styles.infoIcon} />
            </TouchableOpacity>
          </View>
        );
      }
    }

    if (notification.status === 'PAID'){
      if (notification.propertyType === 'Hotel / Shortlet') {
        return (
          <View style={styles.viewConInfoRow}>
            {/* Button */}
            <TouchableOpacity style={styles.view} onPress={handleCheckedInClick}>
              <Text style={styles.btnTxt}>Checked In</Text>
            </TouchableOpacity>

            {/* Info Icon */}
            <TouchableOpacity 
              style={styles.infoIconCon}
              onPress={() => Alert.alert('Checked In Info', 'Click on "Checked In" once you are Checked into the hotel/shortlet.')}
            >
              <AntDesign name="infocirlceo" style={styles.infoIcon} />
            </TouchableOpacity>
          </View>
        )
      }
    }

    if (notification.status === 'CHECKED_IN') {
      if (notification.propertyType === 'Hotel / Shortlet') {
        return (
          <View style={styles.viewConInfoRow}>
            {/* Button */}
            <TouchableOpacity style={styles.view} onPress={handleCheckedOutClick}>
              <Text style={styles.btnTxt}>Checked Out</Text>
            </TouchableOpacity>

            {/* Info Icon */}
            <TouchableOpacity 
              style={styles.infoIconCon}
              onPress={() => Alert.alert('Checked Out Info', 'Click on "Checked Out" once you are out of the hotel/shortlet.')}
            >
              <AntDesign name="infocirlceo" style={styles.infoIcon} />
            </TouchableOpacity>
          </View>
        );
      } else {
        return (
          <View style={styles.viewConInfoRow}>
            {/* Button */}
            <TouchableOpacity style={styles.view} onPress={handleVisitedClick}>
              <Text style={styles.btnTxt}>Visited</Text>
            </TouchableOpacity>

            {/* Info Icon */}
            <TouchableOpacity 
              style={styles.infoIconCon}
              onPress={() => Alert.alert('Visited Info', 'Click on "Visited" once you are off the property.')}
            >
              <AntDesign name="infocirlceo" style={styles.infoIcon} />
            </TouchableOpacity>
          </View>
        );
      }
    }

    return null;
  };

  useEffect(()=>{
    if(notification?.post?.inspectionFee){
      setPaymentPrice(notification?.post?.inspectionFee)
    }else{
      setPaymentPrice(notification?.totalPrice)
    }
  }, [notification])

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
                  {/* Realtor's name */}
                  <Text style={styles.subHeader}>
                    Realtor Name:
                  </Text>

                  <Text style={styles.detailsRealtor}>
                    {notification?.realtor?.firstName}
                  </Text>

                  
                  {/* Realtor's phone number */}
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

          {/* Inspection Fee */}
          {notification?.post?.inspectionFee ?(
            <>
              <Text style={styles.subHeader}>
              Inspection Fee:
              </Text>
              <Text style={styles.details}> 
                ₦{Number(notification?.post?.inspectionFee)?.toLocaleString()}
              </Text>
            </>
          ) : ''}
        </ScrollView>

        {/* Status */}
        <View style={styles.statusRow}>
          <Text style={styles.status}>
          {getStatusText(notification.status)}
          </Text>

          {(notification.status === 'ACCEPTED'  || notification.status === 'VIEWING' || notification.status === 'CHECKED_IN' || notification.status === 'VISITING' || notification.status === 'VIEWED' || notification.status === 'CHECKED_OUT' || notification.status === 'VISITED' || notification.status === 'PAID' || notification.status === 'RECEIVED') ? (
              <View style={styles.greenIcon}/>
          ):(
              <View style={styles.redIcon}/>
          )}
        </View>

        {/* Show Button */}
        {renderButton()}
    </View>
  )
}

export default BookingFullDetails;