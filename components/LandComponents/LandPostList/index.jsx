import { View, Text, FlatList, Pressable } from 'react-native'
import React, {useState, useEffect} from 'react'
import LandPostFeed from '../LandPost'
import styles from './styles'
import BannerAds from '../../../components/BannerAds'
import { FontAwesome } from '@expo/vector-icons';
import {Colors} from '../../../constants/Colors'
import { Link } from 'expo-router'
import { DataStore } from 'aws-amplify/datastore'
import {Realtor, Post} from '../../../src/models'

const LandPostList = () => {

  const [realtorPosts, setRealtorPosts] = useState([]);

  const fetchRealtorsAndPosts = async () => {
    try {
      const realtors = await DataStore.query(Realtor);
      const allPosts = [];

      for (const realtor of realtors) {

        const posts = await DataStore.query(Post, (p) => p.realtorID.eq(realtor.id));

        // Filter the posts by propertyType = "House"
        const filteredPosts = posts.filter(post => post.propertyType === 'Land')

        const realtorWithPosts = filteredPosts.map((post) => ({
          ...post,
          realtorId: realtor.id,
          firstName: realtor.firstName,
          lastName: realtor.lastName,
          email: realtor.email,
          profilepic: realtor.profilePic,
          phoneNumber: realtor.phoneNumber,
        }));

        allPosts.push(...realtorWithPosts);
      }

      // Sort all posts by createdAt or updatedAt field
      allPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      setRealtorPosts(allPosts);
    } catch (error) {
      console.error('Error fetching realtors and posts', error);
    }
  };

  useEffect(()=>{
    fetchRealtorsAndPosts();
  },[])

  return (
    <View style={styles.container}>
      <View>
        {/* Search Bar */}
        <Link href={'search/housesearch/searchhouse'} asChild>
          <Pressable style={styles.searchBtn}>
              <FontAwesome name="search" size={24} color="black" />
              <Text style= {styles.searchBtnTxt}>
                Search for Land
              </Text>
          </Pressable>
        </Link>
      </View>

      <View style={styles.bannerAds}>
        <BannerAds/>
      </View>
      {
        realtorPosts && realtorPosts.length > 0 ?
        <FlatList 
            data={realtorPosts}
            keyExtractor={(item) => item.id.toString()}
            initialNumToRender={10} // Load fewer items initially
            maxToRenderPerBatch={10} // Load a small batch of items
            renderItem={({item})=> <LandPostFeed post={item}/>}
        />
        :
        <Text style={styles.noListings}>No Land listings</Text>
      }
    </View>
  )
}

export default LandPostList;