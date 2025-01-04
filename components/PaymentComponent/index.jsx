import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, {useState, useEffect} from 'react'
import styles from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import {useProfileContext} from '@/providers/ProfileProvider';
import { useAuthContext } from '@/providers/AuthProvider';
import {PayWithFlutterwave} from 'flutterwave-react-native';
import { FLUTTER_WAVE_KEY } from '../../keys';

const PaymentComponent = () => {

    const {firstName, phoneNumber, setIsPaymentSuccessful, paymentPrice, setPaymentPrice} = useProfileContext();

    const {userMail} = useAuthContext();

    // Function to handle the redirect after payment
    const handleOnRedirect = (data) => {
      console.log('Payment Status:', data.status);
      console.log('Transaction Reference:', data.tx_ref);
      if (data.status === 'successful') {
        // Perform actions after successful payment
        console.log('Transaction ID:', data.transaction_id);
        Alert.alert('Payment Successful!', `Transaction ID: ${data.transaction_id}`);
        setIsPaymentSuccessful(true);
        router.back();
      } else if (data.status === 'cancelled') {
        // Perform actions if payment is cancelled
        Alert.alert('Payment Cancelled.');
      }else {
        Alert.alert('Payment Failed.', 'Please try again.');
      }
    };


    // Function to generate a random transaction reference
    const generateTransactionRef = (length) => {
      let result = '';
      const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return `flw_tx_ref_${result}`;
    };

  return (
    <View style={styles.container}>
        {/* Back Button */}
        <TouchableOpacity style={styles.bckContainer} onPress={()=>router.back()}>
          <Ionicons name="arrow-back" style={styles.bckIcon}/>
        </TouchableOpacity>

        {/* Payment Form */}
        <View style={styles.sub}>
            <TextInput
                style={styles.input}
                placeholder='Input amount eg: 100'
                keyboardType='numeric'
                value={String(paymentPrice)}
                editable={false}
            />

            {/* Flutterwave Payment Button */}
            <PayWithFlutterwave
              onRedirect={handleOnRedirect}
              options={{
                tx_ref: generateTransactionRef(10),  // Generate a unique transaction reference
                authorization: FLUTTER_WAVE_KEY,  // Replace with your Flutterwave public key
                customer: {
                  email: userMail,
                  phone_number: phoneNumber,
                  name:firstName
                },
                amount: parseFloat(paymentPrice),  // Payment amount
                currency: 'NGN',  // Currency (e.g., NGN for Nigerian Naira)
                payment_options: 'card,ussd, banktransfer',  // Payment options (e.g., card, mobilemoney, etc.)
              }}
              customButton={(props) => (
                <TouchableOpacity
                  style={styles.btnContainer}
                  onPress={props.onPress}  // Trigger payment on button press
                  disabled={props.disabled}
                >
                  <Text style={styles.btnTxt}>Pay Now</Text>
                </TouchableOpacity>
              )}
            />
        </View>
      
    </View>
  )
}

export default PaymentComponent;