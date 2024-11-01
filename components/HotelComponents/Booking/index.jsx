import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import styles from './styles';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useBookingContext } from '../../../providers/BookingProvider';
import { router } from 'expo-router';

const Booking = ({ postPrice }) => {
  const [range, setRange] = useState({
    startDate: undefined,
    endDate: undefined,
  });

  const [totalPrice, setTotalPrice] = useState(0);
  const {postTotalPrice, setOverAllPrice, overAllPrice} = useBookingContext()

  const handleDateChange = (dates) => {
    setRange({
      startDate: dates.startDate,
      endDate: dates.endDate,
    });
  };

  useEffect(() => {
    if (range.startDate && range.endDate) {
      let daysDifference = dayjs(range.endDate).diff(dayjs(range.startDate), 'day');
      daysDifference = daysDifference === 0 ? 1 : daysDifference;
      console.log('Number of Days:', daysDifference);

      if (postTotalPrice) {
        setTotalPrice(daysDifference * postTotalPrice); // Calculate the total price based on the daysDifference and price
      }
    }
  }, [range, postTotalPrice]);

  useEffect(()=>{
    if(totalPrice){
      setOverAllPrice(totalPrice)
    }
  }, [totalPrice])

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Check In / Check Out
      </Text>

      <ScrollView>
        {/* Duration */}
        <View style={styles.selectedDates}>
          <>
            {range.startDate ? (
              <Text style={styles.range}>
                <Text style={styles.rangeBold}>From:</Text> {dayjs(range.startDate).format('MMMM DD, YYYY')}
              </Text>
            ) : (
              <Text style={styles.selectCheck}>Select Check-in date</Text>
            )}
          </>
          <>
            {range.endDate ? (
              <Text style={styles.range}>
                <Text style={styles.rangeBold}>To: </Text> {dayjs(range.endDate).format('MMMM DD, YYYY')}
              </Text>
            ) : (
              <Text style={styles.selectCheck}>Select Check-out date</Text>
            )}
          </>
        </View>

        {/* Calendar */}
        <View style={styles.calendar}>
          <DateTimePicker
            mode="range"
            startDate={range.startDate}
            endDate={range.endDate}
            value={range}
            onChange={handleDateChange}
            selectedItemColor={'#07da11'}
            minDate={dayjs().startOf('day')} // Restricts past date selection
          />
        </View>

        {/* Total Price */}
        <View style={styles.priceContainer}>
          <Text style={styles.priceLabel}>Total Price:</Text>
          <Text style={styles.priceValue}>₦{totalPrice.toLocaleString()}</Text>
          <Text>Overallprice:{overAllPrice}</Text>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.nxtBtn} onPress={() => router.push(`/realtor/hotelrealtor/reviewinfo`)}>
        <MaterialIcons name="navigate-next" style={styles.nxtIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default Booking;