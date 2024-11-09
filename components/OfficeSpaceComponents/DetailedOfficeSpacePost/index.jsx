import { View, Text, Image,ScrollView, TouchableOpacity, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Link } from 'expo-router';
import ReviewProperty from '../ReviewOfficeSpace';
import styles from './styles';
import DefaultImage from '../../../assets/images/defaultImage.png';
import { FontAwesome } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { getUrl } from 'aws-amplify/storage';

const DetailedOfficeSpacePost = ({post, realtor}) => {

  const [readMore, setReadMore] = useState(false)
  const [readMoreLux, setReadMoreLux] = useState(false);
  const [readMorePol, setReadMorePol] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [imageUris, setImageUris] = useState([]);

  const formattedPrice = Number(post.price).toLocaleString();
  const formattedTotalPrice = Number(post.totalPrice).toLocaleString();

  const goToAllReviews = ()=>{
    router.push(`/allReviews/${post.id}`)
  }

  const goToWriteReview = ()=>{
    router.push(`/writeReview/${post.id}`)
  }

  // funciton to handle ratin click
  const handleRating = (rating)=>{
    setUserRating(rating)
  }

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

  useEffect(()=>{
    if (post.media?.length > 0) {
      fetchImageUrls();
    }
  }, [post.media])

  return (
      <View style={styles.container}>

        {/* Back Button */}
        <TouchableOpacity style={styles.bckContainer} onPress={()=>router.back()}>
          <Ionicons name="arrow-back" style={styles.bckIcon}/>
        </TouchableOpacity>

        {/* ScrollView */}
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollContainer}>
          <Link href={`/gallery/officespacegallery/${post.id}`} asChild>
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
          <Link href={`/realtor/officespaceprofilepage/${realtor.id}`} asChild>
            <Pressable style={styles.user}>
              <Text style={styles.name}>{realtor.firstName}</Text>
            </Pressable>
          </Link>
          
          {/* Bed & Bedrooms */}
          <Text style={styles.bedroom}>{post.bedrooms} Bedroom Apartment</Text>

          {/* Location */}
          <Text style={styles.location}>{post.address}</Text>

          {/* Medium of Review Star */}
          <View style={styles.reviewIconRow}>
            <FontAwesome name="star" style={styles.star} />
            <Text style={styles.starTxt}>4.7</Text>
          </View>

          {/* Type & Description */}
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

          {/* Rent */}
          <View style={styles.priceRow}>
            <Text style={styles.sub}>Rent: </Text>
            <Text style={styles.price}> 
              ₦{formattedPrice} / year
            </Text>
          </View>

          {/* Total Price */}
          <View style={styles.priceRowTotal}>
            <Text style={styles.sub}>Total:</Text>
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
            <Text style={styles.luxPolHeadTxt}>Stay Policies</Text>
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

          {/* Rate */}
          <View style={styles.rateContainer}>
            <Text style={styles.rateTxt}>Rate</Text>
            <View style={styles.starContainer}>
              {[1,2,3,4,5].map((index)=>(
                <TouchableOpacity 
                key={index} 
                onPress={()=>handleRating(index)}>
                  <FontAwesome 
                  name={index <= userRating ? 'star': 'star-o'} 
                  size={24} 
                  color="#07021f" />
                </TouchableOpacity>
              ))}
            </View>
            <TouchableOpacity style={styles.writeReviewCon} onPress={goToWriteReview}>
              <Text style={styles.writeReview}>
                Write a review
              </Text>
            </TouchableOpacity>
          </View>
          
          {/* Border Line */}
          <View style={styles.borderLine}/>

          {/* Ratings and Reviews of People */}
            {
              post. reviews && post.reviews.length > 0 ? (
              <View>
                <Text style={styles.rateTxt}>
                  Ratings and reviews
                </Text>
                {post.reviews.slice(0,2).map(item=>(
                  <View key={item?.userId}>
                    <ReviewProperty review={item}/>
                  </View>
                ))}
              </View>): null
            }

          {/* See all reviews */}
          {post.reviews && post.reviews.length > 0 ? (
                <TouchableOpacity style={styles.seeReviewsBtn} onPress={goToAllReviews}>
                  <Text style={styles.seeReviewsBtnTxt}>
                    See all reviews
                  </Text>
                </TouchableOpacity>
              ): null
          }
          
        </ScrollView>
        <TouchableOpacity style={styles.getinTouchContainer} onPress={()=>router.push(`/realtor/officespacerealtorcontact/${realtor.id}`)}>
            <Text style={styles.getInTouchTxt}>Get in Touch!</Text>
        </TouchableOpacity>
      </View>
  )
}

export default DetailedOfficeSpacePost;