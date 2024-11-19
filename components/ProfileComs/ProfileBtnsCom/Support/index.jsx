import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import styles from './styles';
import * as Clipboard from 'expo-clipboard';
import Feather from '@expo/vector-icons/Feather';

const Support = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            Support
        </Text>

        <ScrollView showsVerticalScrollIndicator={false}>
            {/* Email Header */}
            <View style={styles.subHeaderRow}>
                <Feather name="mail" style={styles.icon} />
                <Text style={styles.subHeaderTxt}>Email Us</Text>
            </View>
            <Text style={styles.txt}>For detailed inquiries, send us an email at:</Text>
            <TouchableOpacity 
                onPress={() => {
                Clipboard.setStringAsync('support@opusama.com');
                alert('Email address copied to clipboard!');
                }}
            >
                <Text style={styles.support}>support@opusama.com</Text>
            </TouchableOpacity>

            <View style={styles.divider}/>

            {/* Call Us */}
            <View style={styles.subHeaderRow}>
                <Feather name="phone" style={styles.icon} />
                <Text style={styles.subHeaderTxt}>Call Us</Text>
            </View>
            <Text style={styles.txt}>Prefer to speak with someone directly? Contact us at:</Text>
            <TouchableOpacity
                onPress={() => {
                    Clipboard.setStringAsync('+234 902 252 2504');
                    alert('Phone Number copied to clipboard!');
                }}
                >
                    <Text style={styles.txtPhone}>+234 902 252 2504</Text>
            </TouchableOpacity>
            <Text style={styles.txt}>Our phone support is available during regular business hours.</Text>

            <View style={styles.divider}/>

            <Text style={styles.subHeaderTxt}>What We Can Help With</Text>
            <View style={styles.txtBulletRow}>
                <Text style={styles.pointer}>•</Text>
                <Text style={styles.txt}>
                    Troubleshooting issues with the app
                </Text>
            </View>

            <View style={styles.txtBulletRow}>
                <Text style={styles.pointer}>•</Text>
                <Text style={styles.txt}>
                    Assistance with account setup or deletion
                </Text>
            </View>

            <View style={styles.txtBulletRow}>
                <Text style={styles.pointer}>•</Text>
                <Text style={styles.txt}>
                    Payment and billing inquiries
                </Text>
            </View>

            <View style={styles.txtBulletRow}>
                <Text style={styles.pointer}>•</Text>
                <Text style={styles.txt}>
                    Providing feedback or suggestions
                </Text>
            </View>

            <View style={styles.txtBulletRow}>
                <Text style={styles.pointer}>•</Text>
                <Text style={styles.txt}>
                    Any other concerns or questions
                </Text>
            </View>

            <View style={styles.divider}/>

            <View style={styles.lastSection}>
                <Text style={styles.subHeaderTxt}>Our Commitment to You</Text>
                <Text style={styles.txt}>
                    Your experience matters to us. If you're facing any challenges, don't hesitate to reach out. We're dedicated to resolving your issues promptly and ensuring a smooth, enjoyable experience with Opusama.
                </Text>
            </View>
        </ScrollView>
    </View>
  )
}

export default Support