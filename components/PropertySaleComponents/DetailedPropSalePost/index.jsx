import { View, Text, Image,ScrollView, TouchableOpacity, Pressable } from 'react-native';
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from 'expo-router';
import styles from './styles';
import DefaultImage from '../../../assets/images/defaultImage.png';
import { FontAwesome } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import BottomSheet, { BottomSheetView, BottomSheetFlatList, BottomSheetScrollView,} from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DbUserReviewSection from './dbUserReview';
import UserReviews from './usersReviews';
import LastReview from './lastReview';
import { router } from 'expo-router';
import { getUrl } from 'aws-amplify/storage';
import { useAuthContext } from '@/providers/AuthProvider';
import { DataStore } from 'aws-amplify/datastore';
import { PostReview } from '@/src/models';

const DetailedPropertySalePost = ({post, realtor}) => {

  const {dbUser} = useAuthContext()

  const [readMore, setReadMore] = useState(false)
  const [readMoreLux, setReadMoreLux] = useState(false);
  const [readMorePol, setReadMorePol] = useState(false);
  const [averageRating, setAverageRating] = useState(0);

  const [imageUris, setImageUris] = useState([]);
  const bottomSheetRef = useRef(null)
  const snapPoints = useMemo(()=>['1%', '30%', '35%'], [])
  const handleOpenBottomSheet = () => {
    bottomSheetRef.current?.expand();
  };

  const formattedPrice = Number(post.price)?.toLocaleString();
  const formattedTotalPrice = Number(post.totalPrice)?.toLocaleString();

  // Fetch signed URLs for each image in post.media
  const fetchImageUrls = async () => {
    try {
      const urls = await Promise.all(
        post.media.map(async (path) => {
          const result = await getUrl({
            path,
            options: {
              validateObjectExistence: true, 
              expiresIn: null, // No expiration limit
            },
          });
  
          // Use `result.url` 
          return result.url.toString(); 

        })
      );
  
      const validUrls = urls.filter(url => url !== null);
      setImageUris(validUrls);
    } catch (error) {
      console.error('Error fetching image URLs:', error);
    }
  };

  // Function to calculate average ratings
  const calculateAverageRating = async () => {
    try {
      const allReviews = await DataStore.query(PostReview, (c) =>
        c.postID.eq(post.id)
      );

      if (allReviews.length > 0) {
        const totalRating = allReviews.reduce((sum, review) => sum + review.rating, 0);
        const average = totalRating / allReviews.length;
        setAverageRating(average.toFixed(1)); // Round to one decimal place
      }else {
        setAverageRating(0); // Handle no reviews case
      }
    } catch (e) {
      console.log('Error calculating average rating', e);
    }
  };
  
  // useEffect to calculate average ratings
  useEffect(() => {
    calculateAverageRating();
  }, [post.id]);
  

  // useEffect for Images
  useEffect(()=>{
    if (post.media?.length > 0) {
      fetchImageUrls();
    }
  }, [post.media])

  // useEffect for realtime update
  useEffect(()=>{
    if(!post) return;

    const subscription = DataStore.observe(PostReview).subscribe(({ opType, element }) => {
      if (element.postID === post.id) { // Ensure it's for the current post
        if (opType === 'INSERT' || opType === 'UPDATE' || opType === 'DELETE') {
          calculateAverageRating();
        }
      }
    });

    return () => subscription.unsubscribe();
  },[post.id])

  return (
      <GestureHandlerRootView style={styles.container}>

        {/* Back Button */}
        <TouchableOpacity style={styles.bckContainer} onPress={()=>router.back()}>
          <Ionicons name="arrow-back" style={styles.bckIcon}/>
        </TouchableOpacity>

        {/* ScrollView */}
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollContainer}>
          <Link href={`/gallery/propertysalegallery/${post.id}`} asChild>
            <TouchableOpacity>
              <View style={styles.imageContainer}>
                {/* Image */}
                {imageUris[0] ? ( 
                  <Image source={{uri: imageUris[0]}} style={styles.image}/>
                ) : (
                  <Image source={DefaultImage} style={styles.image} />
                )}
              </View>
            </TouchableOpacity>
          </Link>
        
          {/* User */}
          {realtor.firstName && (
            <Pressable style={styles.user} onPress={()=> router.push(`/realtor/hotelrealtor/hotelrealtorprofilepage/${realtor.id}`)}>
              <Text style={styles.name}>{realtor.firstName}</Text>
            </Pressable>
          )}

          {/* Property Type */}
          {post.propertyType && (
            <Text style={styles.propertyType}>
              {post.propertyType}
            </Text>
          )}

          {/* Type */}
          {post.type && (
            <Text style={styles.bedroom}>{post.type}</Text>
          )}

          {/* Name of Type */}
          {post.nameOfType && (
            <Text style={styles.bedroom}>
              Name: {post.nameOfType}
            </Text>
          )}

          {/* Available Documents */}
          {post.availableDocs && (
            <>
              <Text style={styles.subheader}>Available Documents:</Text>
              <Text style={styles.bedroom}>
                {post.availableDocs}
              </Text>
            </>
          )}

          <View style={styles.topBorderLine}/>

          {/* Accommodation Parts */}
          {post.accommodationParts && (
            <>
              <Text style={styles.subheader}>Accommodation Parts</Text>
              <Text style={styles.bedroom}>
                {post.accommodationParts}
              </Text>
            </>
          )}
          
          {/* Bed & Bedrooms */}
          {post.bed && (
            <Text style={styles.bedroom}>Beds: {post.bed} </Text>
          )}


          {post.bedrooms && (
            <Text style={styles.bedroom}>Bedrooms: {post.bedrooms} </Text>
          )}

          {/* Location */}
          {post.address && (
            <Text style={styles.location}>{`...${post.address.substring(5)}`}</Text>
          )}

          {/* City, State, Country, */}
          <View>
            <Text style={styles.subheader}>Location</Text>
            {post.city && (
              <View style={styles.locationRow}>
                <Text style={styles.location}>
                  City:
                </Text>
                <Text style={styles.bedroom}>
                  {' '}{post.city}
                </Text>
              </View>
            )}

            {post.state && (
              <View style={styles.locationRow}>
                <Text style={styles.location}>
                  State:
                </Text>
                <Text style={styles.bedroom}>
                  {' '}{post.state}
                </Text>
              </View>
            )}
            {post.country && (
              <View style={styles.locationRow}>
                <Text style={styles.location}>
                  Country:
                </Text>
                <Text style={styles.bedroom}>
                  {' '}{post.country}
                </Text>
              </View>
            )}
          </View>

          <View style={styles.topBorderLine}/>

          {/* Medium of Review Star */}
          <View style={styles.reviewIconRow}>
            <FontAwesome name="star" style={styles.star} />
            <Text style={styles.starTxt}>{averageRating}</Text>
          </View>

          {/* Type & Description */}
          {post.description && (
            <>
              <Text style={styles.luxPolHeadTxt}>Description</Text>
              <View style={styles.descriptionContainer}>
                <Text style={styles.description}>
                  {readMore || post.description.length <= 150 ? post.description : `${post.description.substring(0, 150)}...`}

                  {/* Button to toggle */}
                  { post.description.length > 150 &&(readMore ?
                    <Text onPress={()=>setReadMore(false)} style={[{...styles.readMoreLess, color:"#c2021b"}]}>
                      {' '}show less
                    </Text>
                    :
                    <Text style={styles.readMoreLess} onPress={()=>setReadMore(true)}>
                      {' '}read more
                    </Text>)
                  }
                </Text>
              </View>
            </>
          )}

          {/* Price */}
          <View style={styles.priceRow}>
            <Text style={styles.sub}>Price: </Text>
            <Text style={styles.price}> 
              ₦{formattedPrice} {post.timeFrame && `/ ${post.timeFrame}`}
            </Text>
          </View>

          {/* Total Price */}
          <View style={styles.priceRowTotal}>
            <Text style={styles.sub}>Total Price:</Text>
            <Text style={styles.totalPrice}>
              {''}₦{formattedTotalPrice}
            </Text>
          </View>

          {/* Border Line */}
          <View style={styles.borderLine}/>

          {/* Amenities */}
          <View>
            <Text style={styles.luxPolHeadTxt}>Living Luxuries</Text>
            <Text style={styles.luxPolTxt}>
              {readMoreLux ||post.amenities.length <= 150 ? post.amenities : `${post.amenities.substring(0, 100)}...`}

              {/* Button to toggle */}
              { post.amenities.length > 100 &&(readMoreLux ?
                <Text onPress={()=>setReadMoreLux(false)} style={[{...styles.readMoreLess, color:"#c2021b"}]}>
                  {' '}show less
                </Text>
                :
                <Text style={styles.readMoreLess} onPress={()=>setReadMoreLux(true)}>
                  {' '}read more
                </Text>)
              }
            </Text>
          </View>

          {/* Border Line */}
          <View style={styles.borderLine}/>

          {/* Policies */}
          <View>
            <Text style={styles.luxPolHeadTxt}>Policies</Text>
            <Text style={styles.luxPolTxt}>
              {readMorePol || post.policies.length <= 100 ? post.policies : `${post.policies.substring(0,100)}...`}

              {/* Button to toggle */}
              { post.policies.length > 100 &&(readMorePol ?
                  <Text onPress={()=>setReadMorePol(false)} style={[{...styles.readMoreLess, color:"#c2021b"}]}>
                    {' '}show less
                  </Text>
                  :
                  <Text style={styles.readMoreLess} onPress={()=>setReadMorePol(true)}>
                    {' '}read more
                  </Text>)
              }
            </Text>
          </View>

          {/* Border Line */}
          <View style={styles.borderLine}/>

          {/* DbUser Rating & Review */}
          <DbUserReviewSection post={post} dbUser={dbUser} />

          {/* Last Review */}
          <Text style={styles.lastRatingReviewTxt}>Ratings and Reviews:</Text>
          <TouchableOpacity onPress={handleOpenBottomSheet}>
            <LastReview post={post} dbUser={dbUser}/>
            <Text style={styles.seeAllReviews}>See all reviews</Text>
          </TouchableOpacity>

          {/* Users' Ratings & Reviews */}
          <BottomSheet
            ref={bottomSheetRef}
            snapPoints={snapPoints}
            topInset={0}
          >
            <BottomSheetScrollView>
              <UserReviews post={post} dbUser={dbUser} />
            </BottomSheetScrollView>
          </BottomSheet>
          
        </ScrollView>
        <TouchableOpacity style={styles.getinTouchContainer} onPress={()=>router.push(`/realtor/propertysalerealtor/clientinfo`)}>
            <Text style={styles.getInTouchTxt}>Get in Touch!</Text>
        </TouchableOpacity>
      </GestureHandlerRootView>
  )
}

export default DetailedPropertySalePost;