import { View, Text, SafeAreaView, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import DetailedPost from '../../../../components/HouseComponents/DetailedPost'
import { DataStore } from 'aws-amplify/datastore';
import { Post, Realtor } from '../../../../src/models';
import { useLocalSearchParams } from 'expo-router';
import { useShowingContext } from '@/providers/ShowingProvider';

const HouseAccommodation = () => {
  const { id } = useLocalSearchParams();
  const {setRealtorContext, setPropertyDetails} = useShowingContext();
  const [post, setPost] = useState(null);
  const [realtor, setRealtor] = useState(null);  
  const [loading, setLoading] = useState(true);

  // Fetch the post data based on the id
  const fetchPost = async () => {
    try {
      if (id) {
        // Query DataStore for the specific post with the given ID
        const foundPost = await DataStore.query(Post, id);
        
        if (foundPost) {
          setPost(foundPost);

          // Fetch the related realtor using the realtorID
          const foundRealtor = await DataStore.query(Realtor, foundPost.realtorID);
          setRealtor(foundRealtor);  // Set realtor data
        }
      }
    } catch (error) {
      console.error('Error fetching post', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [id]);

  useEffect(()=>{
    setRealtorContext(realtor)
    setPropertyDetails(post)
  }, [realtor, post])

  if (loading) {
    return (
      <SafeAreaView>
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
    );
  }

  if (!post) {
    return (
      <View style={{top:'50%', justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize:30, fontWeight:'bold', color:'#afadad'}}>No Post Found</Text>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <View>
        <DetailedPost post={post} realtor={realtor}/>
      </View>
    </SafeAreaView>
  );
};

export default HouseAccommodation;