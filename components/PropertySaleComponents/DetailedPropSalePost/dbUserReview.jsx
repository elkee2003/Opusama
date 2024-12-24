import { View, Text, TextInput, TouchableOpacity, Alert  } from 'react-native'
import React, { useState, useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { DataStore } from 'aws-amplify/datastore'
import { PostReview, User } from '@/src/models';
import styles from './styles';

const ReviewSection = ({post, dbUser}) => {

    const [userRating, setUserRating] = useState(0);
    const [review, setReview] = useState('');
    const [loading, setLoading] = useState(false);

    // Function to handle rating click
    const handleRating = (rating) => setUserRating(rating);

    // Save or update review of dbUser
    const saveReview = async () => {
        if (!review || userRating === 0) {
          Alert.alert("Incomplete", "Please provide a rating and review.");
          return;
        }
    
        setLoading(true);
        try {
          const existingReview = await DataStore.query(PostReview, (c) =>
            c.and((c) => [
              c.postID.eq(post.id),
              c.userID.eq(dbUser.id),
            ])
          );
    
          if (existingReview.length > 0) {
            await DataStore.save(
              PostReview.copyOf(existingReview[0], (updated) => {
                updated.rating = userRating;
                updated.review = review;
              })
            );
            Alert.alert("Updated", "Your review has been updated.");
          } else {
            await DataStore.save(
              new PostReview({
                postID: post.id,
                userID: dbUser.id,
                rating: userRating,
                review: review,
              })
            );
            Alert.alert("Submitted", "Your review has been submitted.");
          }
    
          setUserRating(0);
          setReview("");
        } catch (e) {
          console.error("Error saving review", e);
          Alert.alert("Error", e.message);
        } finally {
          setLoading(false);
        }
    };

    // Fetch dbUser's review
    const fetchUserReview = async () => {
        try {
        const userReview = await DataStore.query(PostReview, (c) =>
            c.and((c) => [c.postID.eq(post.id), c.userID.eq(dbUser.id)])
        );
        if (userReview.length > 0) {
            setUserRating(userReview[0].rating);
            setReview(userReview[0].review);
        }
        } catch (e) {
        console.error("Error fetching user review", e);
        }
    };

    // useEffect for Dbuser already existing review
    useEffect(() => {
      fetchUserReview();
    }, [post.id, dbUser.id]);
    
    // useEffect for realtime update
    useEffect(()=>{
        if(!post) return;
    
        const subscription = DataStore.observe(PostReview).subscribe(({ opType, element }) => {
          if (element.postID === post.id) { // Ensure it's for the current post
            if (opType === 'INSERT' || opType === 'UPDATE' || opType === 'DELETE') {
              fetchUserReview()
            }
          }
        });
    
        return () => subscription.unsubscribe();
    },[post.id])

  return (
    <View>
        {/* dbUser Rating */}
        <View style={styles.rateContainer}>
            <Text style={styles.rateTxt}>Rate</Text>
            <View style={styles.starContainer}>
            {[1, 2, 3, 4, 5].map((index) => (
                <TouchableOpacity key={index} onPress={() => handleRating(index)}>
                <FontAwesome
                    name={index <= userRating ? "star" : "star-o"}
                    size={24}
                    color="#07021f"
                />
                </TouchableOpacity>
            ))}
            </View>
            <TextInput
            style={styles.reviewInput}
            value={review}
            onChangeText={setReview}
            placeholder="Write Review"
            multiline
            />
        </View>

        <TouchableOpacity
        style={styles.submitReviewBtn}
        onPress={saveReview}
        disabled={loading}
        >
            <Text style={styles.submitReviewTxt}>
            {loading ? "Submitting..." : "Submit Review"}
            </Text>
        </TouchableOpacity>
    </View>
  )
}

export default ReviewSection