import { View, Text } from 'react-native';
import React, {useState, useEffect} from 'react';
import ClientDetails from '../../../../components/ExploreComponent/ExploreBookingProcess/ClientDetails';
import { useLocalSearchParams } from 'expo-router';
import { DataStore } from 'aws-amplify/datastore';
import {Post} from '@/src/models';

const ClientInfo = () => {

  const {id} = useLocalSearchParams();
  const [post, setPost] = useState(null);
  const [isloading, setIsLoading] = useState(true);
  
    const fetchPost = async ()=>{
        setIsLoading(true);
        try{
            if(id){
                const foundPost = await DataStore.query(Post, id)
                
                setPost(foundPost);
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

  return (
    <View style={{flex:1}}>
      <ClientDetails post={post}/>
    </View>
  )
}

export default ClientInfo;