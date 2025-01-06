import { View, ScrollView, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import React, { useState, useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { useAuthContext } from '@/providers/AuthProvider';
import { DataStore } from 'aws-amplify/datastore'
import { RealtorReview, User, Booking } from '@/src/models';
import styles from './styles';

const UserReviews = ({realtor}) => {

    const {dbUser} = useAuthContext();

    const [userRating, setUserRating] = useState(0);
    const [review, setReview] = useState('');
    const [loading, setLoading] = useState(false);
    const [usersReviews, setUsersReviews] = useState([]);
    const [users, setUsers] = useState([]);
    const [bookings, setBookings] = useState([]);

    const fetchBookings = async () =>{
        setLoading(true);
        try{
  
            // Fetch bookings for the current user
            const userBookings = await DataStore.query(Booking, (booking) =>
              booking.and((b) => [b.realtorID.eq(realtor?.id), b.userID.eq(dbUser?.id)])
            );
  
            setBookings(userBookings)
        }catch(e){
            Alert.alert('Error fetching bookings', e.message)
        }finally{
            setLoading(false);
        }
    };

    useEffect(()=>{
        fetchBookings();
    },[realtor?.id, dbUser?.id])

    // Function for rating 
    const handleRating = (rating) => setUserRating(rating);

    // Save or update review of dbUser
    const saveReview = async () => {
        if (!review || userRating === 0) {
          Alert.alert("Incomplete", "Please provide a rating and review.");
          return;
        }
    
        setLoading(true);
        try {
          const existingReview = await DataStore.query(RealtorReview, (c) =>
            c.and((c) => [
              c.realtorID.eq(realtor.id),
              c.userID.eq(dbUser.id),
            ])
          );
    
          if (existingReview.length > 0) {
            await DataStore.save(
              RealtorReview.copyOf(existingReview[0], (updated) => {
                updated.rating = userRating;
                updated.review = review;
              })
            );
            Alert.alert("Updated", "Your review has been updated.");
          } else {
            await DataStore.save(
              new RealtorReview({
                realtorID: realtor.id,
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
        const userReview = await DataStore.query(RealtorReview, (c) =>
            c.and((c) => [c.realtorID.eq(realtor.id), c.userID.eq(dbUser.id)])
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
    }, [realtor.id, dbUser.id]);

    // Fetch all reviews
    const fetchReviews = async () => {
        try {
        const fetchedReviews = await DataStore.query(RealtorReview, (c) =>
            c.realtorID.eq(realtor.id)
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
    }, [users, realtor]);

    // useEffect for realtime update
    useEffect(()=>{
        if(!realtor) return;
    
        const subscription = DataStore.observe(RealtorReview).subscribe(({ opType, element }) => {
            if (element.realtorID === realtor.id) { // Ensure it's for the current post
            if (opType === 'INSERT' || opType === 'UPDATE' || opType === 'DELETE') {
                fetchReviews();
                fetchUsers();
                fetchUserReview();
                fetchBookings();
            }
            }
        });
    
        return () => subscription.unsubscribe();
    },[realtor.id]);

    const allowedStatuses = ['VIEWING', 'CHECKED_IN', 'VISITING', 'VIEWED', 'CHECKED_OUT', 'VISITED', 'SOLD', 'REMOVED_CLIENT', 'REMOVED_REALTOR'];
    const canReview = bookings.some((booking) => allowedStatuses.includes(booking.status));
    
  return (
    <View 
    style={styles.container}
    >
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scrollContainer}
        >
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
        
        {/* Section to rate and review */}
        {canReview && (
            <View style={styles.reviewSection}>
                <View style={styles.rateContainer}>
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
        )}
    </View>
  )
}

export default UserReviews;