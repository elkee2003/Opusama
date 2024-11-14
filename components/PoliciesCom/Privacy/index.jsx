import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import styles from './styles';

const PrivacyPolicy = () => {
  return (
    <ScrollView 
        style={styles.container}
        showsVerticalScrollIndicator={false}
    >
      <Text style={styles.header}>Privacy Policy</Text>
      <Text style={styles.subHeader}>1. Introduction</Text>
      <Text style={styles.txt}>
        At Opusama, we prioritize the privacy of our users. This Privacy Policy outlines how we collect, use, and protect the personal information you provide when using Opusama.
      </Text>

      <Text style={styles.subHeader}>
        2. Information We Collect
      </Text>
      <Text style={styles.txt}>
        We collect the following types of information:
      </Text>
      <Text style={styles.txtSub}>
        <Text style={styles.pointer}>a.</Text> Information You Provide to Us
      </Text>
      <Text style={styles.txt}>
        <Text style={styles.pointer}>•</Text>	Account Information: When you create an account, we collect your name, email address, phone number, and any other information necessary for account setup.
      </Text>
      <Text style={styles.txt}>
        <Text style={styles.pointer}>•</Text>	Property Listing Details: Realtors may upload property-related data, including images, location, property type, and price.
      </Text>
      
      <Text style={styles.txtSub}>
        <Text style={styles.pointer}>b.</Text> Automatically Collected Information
      </Text>
      <Text style={styles.txt}>
        <Text style={styles.pointer}>•</Text>	Usage Data: We collect information about how you interact with the platform, such as pages viewed, clicks, and time spent on pages.
      </Text>
      <Text style={styles.txt}>
        <Text style={styles.pointer}>•</Text>	Device Information: We may collect information about the device you use to access our platform, including IP address, browser type, and operating system.
      </Text>
      
      <Text style={styles.subHeader}>
        3. How We Use Your Information
      </Text>
      <Text style={styles.txt}>
        We use the information we collect to:
      </Text>
      <Text style={styles.txt}>
        <Text style={styles.pointer}>•</Text>	Facilitate interactions between realtors and potential clients.
      </Text>
      <Text style={styles.txt}>
        <Text style={styles.pointer}>•</Text>	Improve and personalize the user experience on the platform.
      </Text>
      <Text style={styles.txt}>
        <Text style={styles.pointer}>•</Text>	Communicate updates, promotional offers, and important notices.
      </Text>

      <Text style={styles.subHeader}>
        4. Information Sharing
      </Text>
      <Text style={styles.txt}>
        We do not sell or rent your personal information to third parties. We may share information with:
      </Text>
      <Text style={styles.txt}>
        <Text style={styles.pointer}>•</Text>	Service Providers: We may share data with trusted service providers who assist us in operating the platform and providing services.
      </Text>
      <Text style={styles.txt}>
        <Text style={styles.pointer}>•</Text>	Legal Compliance: We may disclose information if required by law or to protect our rights, safety, or property.
      </Text>
      
      <Text style={styles.subHeader}>5. Data Security</Text>
      <Text style={styles.txt}>
        We take appropriate measures to protect your information from unauthorized access, alteration, and disclosure. However, we cannot guarantee complete security of data transmitted over the internet.
      </Text>
      
      <Text style={styles.subHeader}>6. Your Rights</Text>
      <Text style={styles.txt}>
        Depending on your location, you may have rights over your personal information, such as:
      </Text>
      <Text style={styles.txt}>
        <Text style={styles.pointer}>•</Text>	Access: You can request a copy of your personal information.
      </Text>
      <Text style={styles.txt}>
        <Text style={styles.pointer}>•</Text>	Correction: You may request corrections to your personal data if it is inaccurate or incomplete.
      </Text>
      <Text style={styles.txt}>
        <Text style={styles.pointer}>•</Text>	Deletion: You may request that we delete your personal information, subject to legal and contractual restrictions.
      </Text>      
      
      <Text style={styles.subHeader}>7. Cookies</Text>
      <Text style={styles.txt}>
        We use cookies and similar tracking technologies to enhance your experience on our platform. You can modify your browser settings to disable cookies, though this may impact your use of certain platform features.
      </Text>
      
      <Text style={styles.subHeader}>
        8. Changes to Privacy Policy
      </Text>
      <Text style={styles.txt}>
        We may update this Privacy Policy periodically. Users will be notified of any significant changes through the platform or via email.
      </Text>
      
      <Text style={styles.subHeader}>9. Contact Us</Text>
      <Text style={styles.txt}>
        If you have any questions about this Privacy Policy or your personal data, please contact us at <Text style={styles.support}>support@opusama.com</Text>.
      </Text>
    </ScrollView>
  )
}

export default PrivacyPolicy;