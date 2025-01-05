import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, {useState, useEffect} from 'react';
import styles from './styles';
import Placeholder from '../../../assets/images/placeholder.png';
import { FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';
import { getUrl } from 'aws-amplify/storage';
import { DataStore } from 'aws-amplify/datastore';
import {RealtorReview, PostReview} from '@/src/models';

const RealtorProfilePage = ({realtor}) => {

    const [loading, setLoading]= useState(true);
    const [realtorProfilePic, setRealtorProfilePic] = useState(null);
    const [readMoreDescription, setReadMoreDescription] = useState(false);

    const descriptionMaxLength = 80; 
    const truncatedDescription = realtor.myDescription?.length > descriptionMaxLength 
        ? `${realtor.myDescription.substring(0, descriptionMaxLength)}...` 
        : realtor.myDescription;
    const [averageRating, setAverageRating] = useState(0);

    // Navigate to Rating & Review
    const handleNavigate = () =>{
        router.push(`/realtor/realtorratings/${realtor.id}`)
    }

    // Function to calculate average ratings
    const calculateAverageRating = async () => {
        try {
        // Fetch all RealtorReview entries for the realtor
        const realtorReviews = await DataStore.query(RealtorReview, (c) =>
            c.realtorID.eq(realtor.id)
        );

        // Fetch all PostReview entries related to the realtor
        const postReviews = await DataStore.query(PostReview, (p) =>
            p.realtorID.eq(realtor.id)
        );

        // Combine both arrays of reviews
        const allReviews = [...realtorReviews, ...postReviews];

        if (allReviews.length > 0) {
            // Calculate the total rating
            const totalRating = allReviews.reduce((sum, review) => sum + review.rating, 0);

            // Calculate the average rating
            const average = totalRating / allReviews.length;

            setAverageRating(average.toFixed(1)); // Round to one decimal place
        }else {
            setAverageRating(0); // Handle no reviews case
        }
        } catch (e) {
        console.log('Error calculating average rating', e);
        }
    };

    // useEffect to calculate average ratings
    useEffect(() => {
        calculateAverageRating();
    }, [realtor.id]);

    // useEffect for realtime update
    useEffect(()=>{
        if(!realtor) return;

        const realtorReviewSubscription = DataStore.observe(RealtorReview).subscribe(({ opType, element }) => {
        if (element.realtorID === realtor.id) { // Ensure it's for the current post
            if (opType === 'INSERT' || opType === 'UPDATE' || opType === 'DELETE') {
            calculateAverageRating();
            }
        }
        });

        const postReviewSubscription = DataStore.observe(PostReview).subscribe(({ opType, element }) => {
            if (element.realtorID === realtor.id) { // Ensure it's for the current post
                if (opType === 'INSERT' || opType === 'UPDATE' || opType === 'DELETE') {
                calculateAverageRating();
                }
            }
            });

        return () => {
            realtorReviewSubscription.unsubscribe();
            postReviewSubscription.unsubscribe();
        };
    },[realtor.id])

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
                <Text style={styles.name}>
                    {realtor.firstName}
                </Text>

                {/* Medium of Review Star */}
                <TouchableOpacity 
                    style={styles.reviewIconRow}
                    onPress={() => alert('A combination of ratings of properties under the realtor and realtor rating ')}
                >
                    <FontAwesome name="star" style={styles.star} />
                    <Text style={styles.starTxt}>{averageRating}</Text>
                </TouchableOpacity>
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
            <TouchableOpacity 
                style={styles.rateReviewBtn}
                onPress={handleNavigate}
            >
                <Text style={styles.rateReviewBtnTxt}>
                    Ratings & Review
                </Text>
            </TouchableOpacity>
        </View>

    </View>
  )
}

export default RealtorProfilePage;