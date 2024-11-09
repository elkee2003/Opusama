import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import RealtorProfile from '../../../../components/RealtorProfile'
import { useLocalSearchParams } from 'expo-router'
import { DataStore } from 'aws-amplify/datastore'
import {Realtor, Post} from '../../../../src/models'

const PropSaleRealtorProfilePageScreen = () => {
    
    const {id} = useLocalSearchParams()
    const [realtor, setRealtor] = useState('')
    const [posts, setPosts] = useState([]);

    const fetchRealtor = async () =>{
      try{
        if(id){
          const foundRealtor = await DataStore.query(Realtor, id);
          setRealtor(foundRealtor)

           // Fetch posts related to the realtor by filtering on realtorId
           const realtorPosts = await DataStore.query(Post, post => post.realtorID.eq(id));
           setPosts(realtorPosts);
        }
      }catch(error){
        console.error('Fetching Realtor error:', error)
      }
    }

    useEffect(()=>{
      fetchRealtor()
    },[])
    

  return (
    <View>
      <RealtorProfile realtor={realtor} posts={posts}/>
    </View>
  )
}

export default PropSaleRealtorProfilePageScreen;