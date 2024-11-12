import { View, Text, FlatList, Pressable } from 'react-native'
import React, {useState, useEffect} from 'react'
import { Link } from 'expo-router'
import HotelPost from '../HotelPost'
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles'
import { DataStore } from 'aws-amplify/datastore'
import { Realtor, Post } from '@/src/models'

const HotelPostList = () => {

  const [realtorPosts, setRealtorPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRealtorsAndPosts = async () => {
    try {
      setLoading(true);

      // Step 1: Query all realtors
      const realtors = await DataStore.query(Realtor);

      // Step 2: Use map and Promise.all to fetch posts for each realtor in parallel
      const allPosts = await Promise.all(
        realtors.map(async (realtor) => {
          // Query posts for each realtor
          const posts = await DataStore.query(Post, (p) => p.and((p)=>[
            p.realtorID.eq(realtor.id),
            p.available.eq(true)
          ]));
          const filteredPosts = posts.filter((post) => post.propertyType === "Hotel / Shortlet");

          // Map the realtor details to each post
          return filteredPosts.map((post) => ({
            ...post,
            realtorId: realtor.id,
            firstName: realtor.firstName,
            lastName: realtor.lastName,
            email: realtor.email,
            profilepic: realtor.profilePic,
            phoneNumber: realtor.phoneNumber,
          }));
        })
      );

      // Flatten the array of arrays and sort posts by createdAt or updatedAt
      const flatPosts = allPosts.flat().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

      setRealtorPosts(flatPosts);
    } catch (error) {
      console.error('Error fetching realtors and posts', error);
    } finally {
      setLoading(false);
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

  return (
    <View style={styles.container}>
      <View>
        {/* Search Bar */}
        <Link href={'search/hotelsearch'} asChild>
          <Pressable style={styles.searchBtn}>
              <FontAwesome name="search" size={24} color="black" />
              <Text style= {styles.searchBtnTxt}>
                Search for Hotels
              </Text>
          </Pressable>
        </Link>
      </View>
      {
        realtorPosts && realtorPosts.length > 0 ?
        <FlatList 
          data={realtorPosts}
          renderItem={({item})=> <HotelPost post={item}/>}
        />
      :
          <Text style={styles.noListings}>No Hotel listings</Text>
      }
    </View>
  )
}

export default HotelPostList