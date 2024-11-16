import { View, Text, FlatList, RefreshControl } from 'react-native'
import React, {useState, useEffect} from 'react'
import { Link } from 'expo-router'
import ExplorePost from '../ExplorePost'
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles'
import { DataStore } from 'aws-amplify/datastore'
import { Realtor, Post } from '@/src/models'

const ExplorePostList = () => {

  const [realtorPosts, setRealtorPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const fetchRealtorsAndPosts = async () => {
    try {
      setLoading(true);

      // Step 1: Query all realtors
      const realtors = await DataStore.query(Realtor);

      // Step 2: Fetch all posts without any filtering
      const posts = await DataStore.query(Post);
      
        // Step 3: Map realtor details to each post
        const allPosts = posts.map((post) => {
            const realtor = realtors.find((r) => r.id === post.realtorID);
            return {
            ...post,
            realtorId: realtor?.id,
            firstName: realtor?.firstName,
            lastName: realtor?.lastName,
            email: realtor?.email,
            profilepic: realtor?.profilePic,
            phoneNumber: realtor?.phoneNumber,
            };
        });

        // Sort posts by createdAt or updatedAt
        const sortedPosts = allPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        setRealtorPosts(sortedPosts);
    } catch (error) {
      console.error('Error fetching realtors and posts', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(()=>{
    fetchRealtorsAndPosts()

    const subscription = DataStore.observe(Post).subscribe(({opType})=>{
      if(opType === "UPDATE"){
        fetchRealtorsAndPosts();
      }
    });

    return () => subscription.unsubscribe();
  },[])

  // Refreshing function
  const handleRefresh = () => {
    setRefreshing(true); // Start the refreshing spinner
    fetchRealtorsAndPosts();
  };

  return (
    <View style={styles.container}>
      
      {
        realtorPosts && realtorPosts.length > 0 ?
        <FlatList 
          data={realtorPosts}
          renderItem={({item})=> <ExplorePost post={item}/>}
          refreshControl={
            <RefreshControl
                refreshing={refreshing}
                onRefresh={handleRefresh}
                colors={['#11032b']} // Spinner color
            />
          }
        />
      :
          <Text style={styles.noListings}>No listings</Text>
      }
    </View>
  )
}

export default ExplorePostList