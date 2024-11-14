import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import styles from './styles';

const TermAndConditions = () => {
  return (
    <ScrollView 
        style={styles.container}
        showsVerticalScrollIndicator={false}
    >
      <Text style={styles.header}>Terms and Conditions</Text>
        <Text style={styles.subHeader}>1. Introduction</Text>
        <Text style={styles.txt}>
          Welcome to Opusama! By using our platform, you agree to these Terms and Conditions ("Terms") and acknowledge that they constitute a binding agreement between you and Opusama. If you do not agree to these Terms, please do not use the platform.
        </Text>

        <Text style={styles.subHeader}>2. Use of the Platform</Text>
        <Text style={styles.txt}>
          Opusama provides a platform where realtors can upload property listings and potential clients can view and interact with these listings.
        </Text>

        <Text style={styles.subHeader}>3. Realtor Obligations</Text>
        <Text style={styles.txt}>
            Realtors who upload property listings on the platform must:
        </Text>
        <Text style={styles.txt}>
          <Text style={styles.pointer}>•</Text>	Be the owner of the property, or
        </Text>
        <Text style={styles.txt}>
          <Text style={styles.pointer}>•</Text>	Have permission from the owner to list the property, or
          
        </Text>
        <Text style={styles.txt}>
          <Text style={styles.pointer}>•</Text>	Have a verified connection to someone who knows the owner of the property.
        </Text>

        {/* Failure to comply */}
        <Text style={styles.txtFailure}>
          Failure to comply with these requirements may result in suspension or termination of your account, as we strive to maintain transparency and integrity on the platform.
        </Text>
        
        <Text style={styles.subHeader}>4. Client Obligations</Text>
        <Text style={styles.txt}>
          Clients who use the platform to view property listings and contact realtors agree to use the platform responsibly. Any abusive or harassing behavior towards realtors is strictly prohibited and may result in suspension or termination of the client account.
        </Text>
        
        <Text style={styles.subHeader}>
          5. Disclaimers and Liability
        </Text>
        <Text style={styles.txt}>
          <Text style={styles.pointer}>•</Text>	Property Listings: Opusama is not responsible for the accuracy, completeness, or legality of the property listings provided by realtors. It is the responsibility of each user to verify property details independently.
        </Text>
        <Text style={styles.txt}>
          <Text style={styles.pointer}>•</Text>	Limitation of Liability: Opusama will not be liable for any damages or losses arising from the use of our platform, including, but not limited to, property-related disputes between clients and realtors.
        </Text>
        
        <Text style={styles.subHeader}>
          6. Privacy
        </Text>
        <Text style={styles.txt}>
          By using our platform, you agree to our Privacy Policy, which details how we collect, use, and protect your personal data.
        </Text>
        
        <Text style={styles.subHeader}>
          7. Account Suspension or Termination
        </Text>
        <Text style={styles.txt}>
          We reserve the right to suspend or terminate any account that violates these Terms or engages in activities that are illegal or harmful to our platform or users.
        </Text>
        
        <Text style={styles.subHeader}>8. Changes to Terms</Text>
        <Text style={styles.txt}>
          We may revise these Terms periodically. We will notify users of any material changes via email or a platform notification. Continued use of the platform following such changes constitutes acceptance of the updated Terms.
        </Text>
        
        <Text style={styles.subHeader}>9. Contact</Text>
        <Text style={styles.txt}>
          If you have questions regarding these Terms, please contact us at <Text style={styles.support}>support@opusama.com</Text>.
        </Text>
    </ScrollView>
  )
}

export default TermAndConditions;