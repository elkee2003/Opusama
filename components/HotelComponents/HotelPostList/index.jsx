import { View, Text, FlatList, Pressable } from 'react-native'
import React, {useState, useEffect} from 'react'
import { Link } from 'expo-router'
import HotelPost from '../HotelPost'
import BannerAds from '../../BannerAds'
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles'
import { DataStore } from 'aws-amplify/datastore'
import { Realtor, Post } from '../../../src/models'

const HotelPostList = () => {

  const [realtorPosts, setRealtorPosts] = useState([])

  // Use flatMap to flatten the posts array and include parent information
  // const hotelData = hotels.flatMap(hotel => 
  //   hotel.posts.map(post => ({
  //     ...post, // Include all properties of the post
  //     userId: hotel.id,
  //     username: hotel.username, // Add parent hotel information
  //     phoneNumber: hotel.phoneNumber,
  //     email: hotel.email,
  //     mydescription: hotel.mydescription
  //   }))
  // );

  const fetchRealtorsAndPost = async () =>{
    try {
      const realtors = await DataStore.query(Realtor)
      const allPosts = []

      for (const realtor of realtors){
        // if propertyType equal to House
        const posts = await DataStore.query(Post, (p) =>
          p.realtorID.eq(realtor.id)
        );

        // Filter the posts by propertyType = "Hotels / Shortlets"
        const filteredPosts = posts.filter(post => post.propertyType === "Hotels / Shortlets");

        const realtorWithPosts = filteredPosts.map(post =>({
          ...post,
          realtorId: realtor.id,
          firstName: realtor.firstName, // Replace with fields from Realtor model
          lastName: realtor.lastName,
          email: realtor.email,
          profilepic: realtor.profilePic,
          phoneNumber: realtor.phoneNumber,
        }))
        allPosts.push(...realtorWithPosts);
      }

      // Sort all posts by createdAt or updatedAt field
      allPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      setRealtorPosts(allPosts);
    } catch (error) {
      console.error('Error fetching realtors and posts', error)
    }
  }

  useEffect(()=>{
    fetchRealtorsAndPost()
  },[])

  return (
    <View style={styles.container}>
      <View>
        {/* Search Bar */}
        <Link href={'search/hotelsearch/searchhotel'} asChild>
          <Pressable style={styles.searchBtn}>
              <FontAwesome name="search" size={24} color="black" />
              <Text style= {styles.searchBtnTxt}>
                Search for Hotels
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
          renderItem={({item})=> <HotelPost post={item}/>}
        />
      :
          <Text style={styles.noListings}>No Hotel listings</Text>
      }
    </View>
  )
}

export default HotelPostList