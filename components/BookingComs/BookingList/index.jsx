import { View, Text, FlatList, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import React, {useState, useEffect} from 'react';
import BookingSingle from '../BookingSingle';
import { useAuthContext } from '@/providers/AuthProvider';
import { DataStore } from 'aws-amplify/datastore';
import {Booking, Realtor } from '@/src/models';
import styles from './styles'

const BookingList = () => {

    const {dbUser} = useAuthContext()
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchBookings = async () =>{
        setLoading(true);
        try{
            const userBookings = await DataStore.query(Booking, (booking)=> booking.userID.eq(dbUser.id));

            const sortedBookings = userBookings.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

            const bookingsWithRealtors = await Promise.all(
                sortedBookings.map(async(booking)=>{
                    if(booking.bookingRealtorId){
                        const realtor = await DataStore.query(Realtor, (r)=>r.id.eq(booking.bookingRealtorId));
                        return {...booking, realtor: realtor[0] || null};
                    }
                    return {...booking, realtor:null};
                })
            )
            setBookings(bookingsWithRealtors)
        }catch(e){
            Alert.alert('Error fetching bookings', e.message)
        }finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchBookings();
    
        const subscription = DataStore.observe(Booking).subscribe(({opType})=>{
          if(opType === 'INSERT' || opType === 'UPDATE' || opType === 'DELETE'){
            fetchBookings();
          }
        });
    
        return () => subscription.unsubscribe();
      }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bookings</Text>

      {bookings.length === 0 ? (
        <View style={styles.noBookingsCon}>
            <Text style={styles.noBookings}>
                No Bookings
            </Text>
        </View>
      ):(
        <FlatList
            data={bookings}
            keyExtractor={(item)=>item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({item})=>(
                <BookingSingle
                    booking={item}
                />
            )}
        />
      )}
    </View>
  )
}

export default BookingList;