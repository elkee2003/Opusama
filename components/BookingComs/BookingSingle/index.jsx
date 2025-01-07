import { View, Text, TouchableOpacity, Pressable, Alert } from 'react-native';
import React from 'react';
import styles from './styles';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import * as Clipboard from 'expo-clipboard';
import { router } from 'expo-router';

const BookingSingle = ({booking, onDelete, onUpdateStatus}) => {

  console.log('booking inspection fee:',booking.post?.inspectionFee)

  // Handle Viewing button click
  const handleViewingClick = () => {
    onUpdateStatus(booking.id, 'VIEWING');
  };

  // Handle Viewed button click
  const handleViewedClick = () => {
    onUpdateStatus(booking.id, 'VIEWED');
  };


  // Handle Remove function
  const handleRemove = () => {
    if (['VIEWED', 'CHECKED_OUT', 'VISITED', 'PAID', 'SOLD'].includes(booking.status)) {
      onUpdateStatus(booking.id, 'REMOVED_CLIENT'); 
    } else {
      Alert.alert('Action Not Allowed', 'You can only remove bookings with statuses VIEWED, CHECKED_OUT, VISITED, or SOLD.');
    }
  };

  const getStatusText = (status) => {
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

  const validPropertyTypes = ['House Rent', 'Student Accommodation', 'House Sale', 'Land Sale', 'Office Space'];


  return (
    <View 
      style={styles.container}
    >

      {/* Remove Btn */}
      {(booking.status === 'DENIED') && (
        <TouchableOpacity 
          style={styles.removeButtonContainer}
          onPress={onDelete}
        >
          <FontAwesome name="remove" style={styles.removebtn} />
        </TouchableOpacity>
      )}
      
      {/* Button for the whole card to go to the next screen */}
      <TouchableOpacity onPress={()=> router.push(`/bookings/bookingdetail/fulldetails/${booking.id}`)}>
        <Text style={styles.subHeading}>Realtor:</Text>
        <Text style={styles.detail}>{booking?.realtor?.firstName}</Text>

        {/* Button to see the property booked */}
        <TouchableOpacity onPress={()=> router.push(`/bookings/bookedproperty/propertydetails/${booking.PostID}`)}>
          <View style={styles.subHeadingContainer}>
            <Text style={styles.subHeading}>
              Accomodation Type
            </Text>
            <Text style={styles.subHeadingView}>
              {' '}(Click to view):
            </Text>
          </View>
          <Text style={styles.detail}>
            {booking?.propertyType} 
          </Text>
        </TouchableOpacity>

        {/* Conditions to show if it is hotels/shortlets */}
        {booking.nameOfType && (
          <>
            <Text style={styles.subHeading}>Accomodation Name:</Text>
            <Text style={styles.detail}>{booking?.nameOfType}</Text>
          </>
        )}

        {booking.checkInDate && (
          <>
            <Text style={styles.subHeading}>Check-in:</Text>
            <Text style={styles.detail}>{booking?.checkInDate.substring(0,17)}</Text>
          </>
        )}

        {booking.checkOutDate && (
          <>
            <Text style={styles.subHeading}>Check-out:</Text>
            <Text style={styles.detail}>{booking?.checkOutDate.substring(0,17)}</Text>
          </>
        )}

        {/* Status */}
        <Text style={styles.subHeading}>Status:</Text>
        <View style={styles.statusRow}>
          <Text style={styles.detail}>
            {getStatusText(booking.status)}
          </Text>
          {(booking.status === 'ACCEPTED' || booking.status === 'VIEWING' || booking.status === 'CHECKED_IN' || booking.status === 'VISITING' || booking.status === 'VIEWED' || booking.status === 'CHECKED_OUT' || booking.status === 'VISITED' || booking.status === 'PAID' || booking.status === 'RECEIVED') ? (
              <View style={styles.greenIcon}/>
            ):(
              <View style={styles.redIcon}/>
          )}
        </View>

        {/* if status is PENDING */}
        {booking.status === 'PENDING' && (
          <Text style={styles.wait}>Kindly wait for response of Realtor to get contact</Text>
        )}

        {/* if status is ACCEPTED */}
        {booking.status === 'ACCEPTED' && (
          <Text style={styles.wait}>Kindly click on card to get Realtor's contact</Text>
        )}

        {/* Button Section */}

        {/* If booking status is PENDING */}
        {booking.status === 'PENDING' && (
          <TouchableOpacity style={styles.deleteButtonCon} onPress={()=>{
            Alert.alert(
              'Delete Order',
              'Are you sure you want to delete this booking?',
              [
                {text:'Cancel', style:'cancel'},
                {text: 'Delete', style:'destructive', onPress:onDelete}
              ]
            );
          }} >
            <Text style={styles.deleteButtonTxt} >{booking.propertyType === 'Hotel / Shortlet' ? 'Delete Booking' : 'Delete Showing'}</Text>
          </TouchableOpacity>
        )}

        {/* If booking status is ACCEPTED */}
        {(booking.status === 'ACCEPTED' && validPropertyTypes.includes(booking.propertyType)) && (
          <View style={styles.viewConInfoRow}>
            {booking.post?.inspectionFee ? (
              // Show "Make Payment" button if inspectionFee is filled
              <TouchableOpacity
                style={styles.viewCon}
                onPress={()=> router.push(`/bookings/bookingdetail/fulldetails/${booking.id}`)} // Pass bookingId to the fulldetails route
              >
                <Text style={styles.viewTxt}>Make Payment</Text>
              </TouchableOpacity>
            ) : (
              // Show "Viewing" button if inspectionFee is empty
              <TouchableOpacity
                style={styles.viewCon}
                onPress={handleViewingClick}
              >
                <Text style={styles.viewTxt}>Viewing</Text>
              </TouchableOpacity>
            )}

            
            {/* <TouchableOpacity 
              style={styles.viewCon}
              onPress={handleViewingClick}
            >
              <Text style={styles.viewTxt}>Viewing</Text>
            </TouchableOpacity> */}

            {/* Info Icon */}
            <TouchableOpacity
              style={styles.infoIconCon}
              onPress={() =>
                Alert.alert(
                  booking.post?.inspectionFee
                    ? 'Payment Info'
                    : 'Viewing Info',
                  booking.post?.inspectionFee
                    ? 'Click on "Make Payment" to proceed with the payment for the inspection fee.'
                    : 'Click on "Viewing" once you are viewing the property.'
                )
              }
            >
              <AntDesign name="infocirlceo" style={styles.infoIcon} />
            </TouchableOpacity>
          </View>
        )}

        {/* If booking status is VIEWING */}
        {(booking.status === 'VIEWING' && validPropertyTypes.includes(booking.propertyType)) ? (
            <View style={styles.viewConInfoRow}>
              <TouchableOpacity 
                style={styles.viewCon}
                onPress={handleViewedClick}
              >
                <Text style={styles.viewTxt}>Viewed</Text>
              </TouchableOpacity>

              {/* Info Icon */}
              <TouchableOpacity 
                style={styles.infoIconCon}
                onPress={() => Alert.alert('Viewing Info', 'Click on "Viewed" once you are done viewing the property.')}
              >
                <AntDesign name="infocirlceo" style={styles.infoIcon} />
              </TouchableOpacity> 
            </View>
        ): null}

        {/* If booking status is VIEWED */}
        {(booking.status === 'VIEWED' || booking.status === 'CHECKED_OUT' || booking.status === 'VISITED' || booking.status === 'SOLD' || booking.status === 'RECEIVED') &&  (
          <TouchableOpacity 
            style={styles.delCon}
            onPress={()=>{
              Alert.alert(
                'Remove Order',
                'Are you sure you want to remove this booking?',
                [
                  {text:'Cancel', style:'cancel'},
                  {text: 'Remove', style:'destructive', onPress:handleRemove}
                ]
              );
            }} 
          >
            <Text style={styles.removeTxt}>Remove</Text>
          </TouchableOpacity> 
        )}

      </TouchableOpacity>
    </View>
  )
}

export default BookingSingle;