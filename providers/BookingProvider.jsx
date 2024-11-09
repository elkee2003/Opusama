import { View, Text } from 'react-native'
import React, {useState, useContext, createContext} from 'react'

const BookingContext = createContext({})

const BookingContextProvider = ({children}) => {

    const [bookings, setBookings] = useState('');
    const [adults, setAdults] = useState(0);
    const [kids, setKids] = useState(0);
    const [infants, setInfants] = useState(0);
    const [guestFirstName, setGuestFirstName] = useState('');
    const [guestLastName, setGuestLastName] = useState('');
    const [guestPhoneNumber, setGuestPhoneNumber]= useState('');
    const [propertyDetails, setPropertyDetails] = useState('')
    const [propertyType, setPropertyType] = useState('');
    const [nameOfType, setNameOfType] = useState('');
    const [accommodationType, setAccommodationType] = useState('');
    const [purpose, setPurpose] = useState('');
    const [bookingLat, setBookingLat] = useState(null);
    const [bookingLng, setBookingLng] = useState(null);
    const [realtorContext, setRealtorContext] = useState(null);
    const [duration, setDuration] = useState('');
    const [checkInDate, setCheckInDate] = useState('')
    const [checkOutDate, setCheckOutDate] = useState('')
    const [postPrice, setPostPrice] = useState(null);
    const [postTotalPrice, setPostTotalPrice] = useState(null);
    const [overAllPrice, setOverAllPrice] = useState(null);
    const [realtorPrice, setRealtorPrice] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

        const validateInput = () => {
            setErrorMessage(''); // Clear previous errors

            if (adults === 0 && kids === 0 && infants === 0) {
                setErrorMessage('Please add the number of guests');
                return false;
            }
        
            if (!guestFirstName) {
                setErrorMessage('First Name is Required');
                return false;
            }
        
            if (!guestLastName) {
                setErrorMessage('Last Name is Required');
                return false;
            }
        
            if (guestPhoneNumber.length < 10) {
                setErrorMessage('Phone Number must be at least 10 digits');
                return false;
            }
        
            return true;
        };

        const onValidateInput = () =>{
            if(validateInput()){
            return true;
            }else {
            return false;
            }
        }


  return (
    <BookingContext.Provider value={{bookings, setBookings, adults, setAdults, kids, setKids, infants, setInfants, guestFirstName, setGuestFirstName, guestLastName, setGuestLastName, guestPhoneNumber, propertyDetails, setPropertyDetails, propertyType, setPropertyType, nameOfType, setNameOfType, accommodationType, setAccommodationType, setGuestPhoneNumber, purpose, setPurpose, bookingLat, setBookingLat, bookingLng, setBookingLng, errorMessage, setErrorMessage, onValidateInput, realtorContext, setRealtorContext, checkInDate, setCheckInDate, checkOutDate, setCheckOutDate, duration, setDuration, postPrice, setPostPrice, postTotalPrice, setPostTotalPrice, overAllPrice, setOverAllPrice, realtorPrice, setRealtorPrice}}>
        {children}
    </BookingContext.Provider>
  )
}

export default BookingContextProvider;

export const useBookingContext = () => useContext(BookingContext)