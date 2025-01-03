import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, {useState, useEffect} from 'react';
import styles from './styles';
import Placeholder from '../../../assets/images/placeholder.png';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { getUrl } from 'aws-amplify/storage';
import { DataStore } from 'aws-amplify/datastore';
import { RealtorReview } from '@/src/models';

const RealtorProfilePage = ({realtor}) => {

    const [loading, setLoading]= useState(true);
    const [realtorProfilePic, setRealtorProfilePic] = useState(null);
    const [readMoreDescription, setReadMoreDescription] = useState(false);

    const descriptionMaxLength = 80; 
    const truncatedDescription = realtor.myDescription?.length > descriptionMaxLength 
        ? `${realtor.myDescription.substring(0, descriptionMaxLength)}...` 
        : realtor.myDescription;

    // Fetch signed URL for profile picture
    const fetchImageUrl = async () => {
        setLoading(true);
        try {
        const result = await getUrl({
            path: realtor.profilePic,
            options: {
            validateObjectExistence: true, 
            expiresIn: null, // No expiration limit
            },
        });

        if (result.url) {
            setRealtorProfilePic(result.url.toString());
        }
        } catch (error) {
        console.error('Error fetching profile pic URL:', error);
        }finally {
        setLoading(false);
        }
    };

  useEffect(() => {
    if (realtor.profilePic) {
      fetchImageUrl();
    }
  }, [realtor.profilePic]);

  return (
    <View style={styles.container}>

        {/* Profile Picture */}
        <TouchableOpacity style={styles.profilePicContainer}>
            { loading ? (
                <Image source={Placeholder} style={styles.img} />
            ):(
                <Image source={{ uri: realtorProfilePic }} style={styles.img} onError={() => setRealtorProfilePic(null)} /> 
            )}

        </TouchableOpacity>
    
        <View style={styles.details}>
            {/* Name */}
            <View style={styles.row}>
                <Text style={styles.name}>{realtor.firstName}</Text>
            </View>
            <View style={styles.descriptionCon}>
                <Text style={styles.txtDesc}>
                    {readMoreDescription || realtor?.myDescription?.length <= descriptionMaxLength ? realtor?.myDescription : truncatedDescription}
                    {realtor.myDescription?.length > descriptionMaxLength && (
                        <Text 
                        onPress={() => setReadMoreDescription(!readMoreDescription)} 
                        style={readMoreDescription ? [styles.readMoreLess, { color: "#c2021b" }] : styles.readMoreLess}
                        >
                        {readMoreDescription ? ' show less' : ' read more'}
                        </Text>
                    )} 
                </Text>
            </View>

        </View>

        {/* Contact & Rating & Review */}
        <View style={styles.profileBtnCon}>

            {/* ratings and review */}
            <TouchableOpacity style={styles.rateReviewBtn}>
                <Text style={styles.rateReviewBtnTxt}>
                    Ratings & Review
                </Text>
            </TouchableOpacity>
        </View>

    </View>
  )
}

export default RealtorProfilePage;