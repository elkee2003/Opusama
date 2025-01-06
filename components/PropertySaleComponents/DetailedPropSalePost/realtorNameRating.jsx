import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import { FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';
import { DataStore } from 'aws-amplify/datastore';
import {PostReview, RealtorReview} from '@/src/models';

const RealtorNameRating = ({realtor}) => {
  const [averageRealtorRating, setAverageRealtorRating] = useState(0);

  // Function to calculate average realtor ratings
  const calculateAverageRealtorRating = async () => {
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

          setAverageRealtorRating(average.toFixed(1)); // Round to one decimal place
      }else {
          setAverageRealtorRating(0); // Handle no reviews case
      }
      } catch (e) {
      console.log('Error calculating average realtor rating', e);
      }
  };

  // useEffect to calculate average ratings
  useEffect(() => {
    calculateAverageRealtorRating();
  }, [realtor.id]);

  // useEffect for realtime realtor rating update
  useEffect(()=>{
      if(!realtor) return;

      const realtorReviewSubscription = DataStore.observe(RealtorReview).subscribe(({ opType, element }) => {
      if (element.realtorID === realtor.id) { // Ensure it's for the current post
          if (opType === 'INSERT' || opType === 'UPDATE' || opType === 'DELETE') {
          calculateAverageRealtorRating();
          }
      }
      });

      const postReviewSubscription = DataStore.observe(PostReview).subscribe(({ opType, element }) => {
          if (element.realtorID === realtor.id) { // Ensure it's for the current post
              if (opType === 'INSERT' || opType === 'UPDATE' || opType === 'DELETE') {
              calculateAverageRealtorRating();
              }
          }
          });

      return () => {
          realtorReviewSubscription.unsubscribe();
          postReviewSubscription.unsubscribe();
      };
  },[realtor.id]);

  return (
    <View>
      {realtor?.firstName && (
        <View style={styles.realtorNameRow}>
          <Pressable
            onPress={()=>router.push(`/realtor/${realtor?.id}`)}
          >
            <Text style={styles.name}>{realtor.firstName}</Text>
          </Pressable>

          {/* Medium of Review Star */}
          <TouchableOpacity 
              style={styles.reviewIconRow}
              onPress={() => alert('A combination of ratings of properties under the realtor and realtor rating ')}
          >
              <FontAwesome name="star" style={styles.realtorStar} />
              <Text style={styles.realtorStarTxt}>{averageRealtorRating}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

export default RealtorNameRating;