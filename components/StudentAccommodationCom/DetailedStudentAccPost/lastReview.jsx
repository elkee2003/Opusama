import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { DataStore } from 'aws-amplify/datastore'
import { PostReview, User } from '@/src/models';
import styles from './styles';

const lastReview = ({post, dbUser}) => {

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

        // Get the latest review
        const latestReview = sortedReviews[sortedReviews.length - 1];

        // Enrich the latest review with user data
        if (latestReview) {
            const user = users.find((u) => u.id === latestReview.userID);
            const enrichedReview = {
                ...latestReview,
                userName: user ? user.firstName : "Unknown User",
            };

            setUsersReviews([enrichedReview]); // Only set the latest review
        }

        } catch (e) {
        console.error("Error fetching last review", e);
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
    <View>
       {/* User Reviews */}
       { usersReviews.length > 0 && (
            <View style={styles.lastReviewsContainer}>
                
                {usersReviews.map((item) => (
                <View key={item.id} >
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
       )}
    </View>
  )
}

export default lastReview;