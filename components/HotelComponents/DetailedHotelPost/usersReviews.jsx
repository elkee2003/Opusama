import { View, ScrollView, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { DataStore } from 'aws-amplify/datastore'
import { PostReview, User } from '@/src/models';
import styles from './styles';

const UserReviews = ({post, dbUser}) => {

    const [usersReviews, setUsersReviews] = useState([]);
    const [users, setUsers] = useState([]);

    // Fetch all reviews
    const fetchReviews = async () => {
        try {
        const fetchedReviews = await DataStore.query(PostReview, (c) =>
            c.postID.eq(post.id)
        );

        // Sort reviews by createdAt in ascending order (oldest first)
        const sortedReviews = fetchedReviews.sort((a, b) => 
            new Date(a.createdAt) - new Date(b.createdAt)
        );

        const enrichedReviews = sortedReviews.map((review) => {
            const user = users.find((u) => u.id === review.userID);
            return {
                ...review,
                userName: user ? user.firstName : "Unknown User",
            };
        });

        setUsersReviews(enrichedReviews);
        } catch (e) {
        console.error("Error fetching reviews", e);
        }
    };

    // Fetch users
    const fetchUsers = async () => {
        try {
        const fetchedUsers = await DataStore.query(User);
        setUsers(fetchedUsers);
        } catch (e) {
        Alert.alert("Error fetching users", e.message);
        }
    };

    // Fetch users when component mounts
    useEffect(() => {
        fetchUsers();
    }, []);
    
    // useEffect for Reviews
    useEffect(() => {
        if (users.length > 0) {
        fetchReviews();
        }
    }, [users]);

    // useEffect for realtime update
    useEffect(()=>{
        if(!post) return;
    
        const subscription = DataStore.observe(PostReview).subscribe(({ opType, element }) => {
            if (element.postID === post.id) { // Ensure it's for the current post
            if (opType === 'INSERT' || opType === 'UPDATE' || opType === 'DELETE') {
                fetchReviews();
                fetchUsers();
            }
            }
        });
    
        return () => subscription.unsubscribe();
    },[post.id])
    
  return (
    <ScrollView>
       {/* User Reviews */}
       { usersReviews.length > 0 ? (
            <View style={styles.reviewsContainer}>
                <Text style={styles.rateTxt}>Ratings and Reviews:</Text>
                {usersReviews.map((item) => (
                <View key={item.id} style={styles.reviewItem}>
                    <Text style={styles.reviewerName}>{item.userName}</Text>
                    <View style={styles.usersStarContainer}>
                    {[1, 2, 3, 4, 5].map((index) => (
                        <FontAwesome
                        key={index}
                        name={index <= item.rating ? "star" : "star-o"}
                        size={18}
                        color="#07021f"
                        />
                    ))}
                    </View>
                    <Text style={styles.reviewText}>{item.review}</Text>
                </View>
                ))}
            </View>
        ) : 
        <Text style={styles.noReviews}>
            No Reviews Yet
        </Text>
        }
    </ScrollView>
  )
}

export default UserReviews;