import { View, Text, SafeAreaView, ActivityIndicator } from 'react-native';
import React, {useState, useEffect} from 'react';
import BookedPropertyDetailedPost from '../../../../../components/BookingComs/BookingDetails/BookedProperty';
import { useLocalSearchParams } from 'expo-router';
import {useProfileContext} from '@/providers/ProfileProvider';
import { useBookingContext } from '@/providers/BookingProvider';
import { DataStore } from 'aws-amplify/datastore';
import {Realtor, Post} from '@/src/models';

const BookedProperty = () => {

    const {id} = useLocalSearchParams();
    const {setPostData} = useProfileContext();
    const {setRealtorContext, setPropertyDetails} = useBookingContext();
    const [realtor, setRealtor] = useState(null);
    const [post, setPost] = useState(null);
    const [isloading, setIsLoading] = useState(true);

    const fetchPost = async ()=>{
        setIsLoading(true);
        setRealtorContext(null);
        try{
            if(id){
                const foundPost = await DataStore.query(Post, id)

                setPostData(foundPost);
                
                if (foundPost){
                    setPost(foundPost);

                    const foundRealtor = await DataStore.query(Realtor, foundPost.realtorID);
                    setRealtor(foundRealtor);
                }
            }
        }catch(error){
            console.error('Error fetching post',error);
        }finally{
            setIsLoading(false);
        }
    };

    useEffect(()=>{
      fetchPost()
    },[id])

    // This useEffect should solve the problem of not retaining the realtor.id
    useEffect(()=>{
      setRealtorContext(realtor)
      setPropertyDetails(post)
    }, [realtor, post])

    if (isloading) {
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
        <BookedPropertyDetailedPost post={post} realtor={realtor}/>
      </View>
    </SafeAreaView>
  )
}

export default BookedProperty;