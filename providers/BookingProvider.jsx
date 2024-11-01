import { View, Text } from 'react-native'
import React, {useState, useContext, createContext} from 'react'

const BookingContext = createContext({})

const BookingContextProvider = ({children}) => {

    const [adults, setAdults] = useState(0);
    const [kids, setKids] = useState(0);
    const [infants, setInfants] = useState(0);
    const [guestFirstName, setGuestFirstName] = useState('');
    const [guestLastName, setGuestLastName] = useState('');
    const [guestPhoneNumber, setGuestPhoneNumber]= useState('');
    const [purpose, setPurpose] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const [realtorContext, setRealtorContext] = useState(null);
    const [postPrice, setPostPrice] = useState(null);
    const [postTotalPrice, setPostTotalPrice] = useState(null);
    const [overAllPrice, setOverAllPrice] = useState(null);

        const validateInput = () => {
            setErrorMessage(''); // Clear previous errors
        
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
    <BookingContext.Provider value={{adults, setAdults, kids, setKids, infants, setInfants, guestFirstName, setGuestFirstName, guestLastName, setGuestLastName, guestPhoneNumber, setGuestPhoneNumber, purpose, setPurpose, errorMessage, setErrorMessage, onValidateInput, realtorContext, setRealtorContext, postPrice, setPostPrice, postTotalPrice, setPostTotalPrice, overAllPrice, setOverAllPrice}}>
        {children}
    </BookingContext.Provider>
  )
}

export default BookingContextProvider;

export const useBookingContext = () => useContext(BookingContext)