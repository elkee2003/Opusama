import { View, Text, Image ,ScrollView, TouchableOpacity, Pressable} from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router'
import ReviewHotel from '../ReviewHotel'
import styles from './styles'
import { FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router'

const DetailedHotelPost = ({post}) => {

  const [readMore, setReadMore] = useState(false)
  const [readMoreLux, setReadMoreLux] = useState(false)
  const [readMorePol, setReadMorePol] = useState(false)
  const [userRating, setUserRating] = useState(0)

  if (!post) {
    return (
      <View style={{ top: 50, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Error: No post data available</Text>
      </View>
    );
  }

  const goToAllReviews = ()=>{
    router.push(`/allReviews/${post.id}`)
  }

  const goToWriteReview = ()=>{
    router.push(`/writeReview/${post.id}`)
  }

  // funciton to handle rating click
  const handleRating = (rating)=>{
    setUserRating(rating)
  }

  return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollContainer}>
          <Link href={`/hotelfullView/${post.id}`} asChild>
            <TouchableOpacity>
              <View style={styles.imageContainer}>
                {/* Image */}
                <Image source={{uri: post.media[0].urls?.[0]}} style={styles.image}/>
              </View>
            </TouchableOpacity>
          </Link>
        
          {/* User */}
          <Link href={`/realtorprofilepage/${post.userId}`} asChild>
            <Pressable style={styles.user}>
              <Text style={styles.name}>{post.username}</Text>
            </Pressable>
          </Link>

          {/* Type */}
          <Text style={styles.bedroom}>{post.type}</Text>
          
          {/* Bed & Bedrooms */}
          <Text style={styles.bedroom}>Beds: {post.beds} </Text>
          <Text style={styles.bedroom}>Bedrooms: {post.bedroom} </Text>

          {/* Location */}
          <Text style={styles.location}>{post.location}</Text>

          {/* Medium of Review Star */}
          <View style={styles.reviewIconRow}>
            <FontAwesome name="star" style={styles.star} />
            <Text style={styles.starTxt}>4.7</Text>
          </View>

          {/* Type & Description */}
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>
              {readMore ? post.description : `${post.description?.substring(0,150)}...`}

              {/* Button to toggle */}
              { readMore ?
                <Text onPress={()=>setReadMore(false)} style={[{...styles.readMoreLess, color:"#c2021b"}]}>
                  {' '}show less
                </Text>
                :
                <Text style={styles.readMoreLess} onPress={()=>setReadMore(true)}>
                  {' '}read more
                </Text>
              }
            </Text>
          </View>

          {/* Price */}
          <View style={styles.priceRow}>
            <Text style={styles.sub}>Price: </Text>
            <Text style={styles.price}> 
              ₦{post.price} / Night
            </Text>
          </View>

          {/* Total Price */}
          <View style={styles.priceRowTotal}>
            <Text style={styles.sub}>Total:</Text>
            <Text style={styles.totalPrice}>
              {''}₦{post.totalPrice}
            </Text>
          </View>

          {/* Border Line */}
          <View style={styles.borderLine}/>
          
          {/* Amenities */}
          <View>
            <Text style={styles.luxPolHeadTxt}>Guest Luxuries</Text>
            <Text style={styles.luxPolTxt}>
              {readMoreLux ? post.amenities : `${post.amenities.substring(0, 100)}...`}
              
              {/* Button to toggle */}
              { readMoreLux ?
                <Text onPress={()=>setReadMoreLux(false)} style={[{...styles.readMoreLess, color:"#c2021b"}]}>
                  {' '}show less
                </Text>
                :
                <Text style={styles.readMoreLess} onPress={()=>setReadMoreLux(true)}>
                  {' '}read more
                </Text>
              }
            </Text>
          </View>

          {/* Border Line */}
          <View style={styles.borderLine}/>

          {/* Policies */}
          <View>
            <Text style={styles.luxPolHeadTxt}>Stay Policies</Text>
              <Text style={styles.luxPolTxt}>
                {readMorePol ? post.policies : `${post.policies.substring(0,100)}...`}
                
                {/* Button to toggle */}
                { readMorePol ?
                  <Text onPress={()=>setReadMorePol(false)} style={[{...styles.readMoreLess, color:"#c2021b"}]}>
                    {' '}show less
                  </Text>
                  :
                  <Text style={styles.readMoreLess} onPress={()=>setReadMorePol(true)}>
                    {' '}read more
                  </Text>
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

          {/* Rating and Reviews of People */}
            {
              post. reviews && post.reviews.length > 0 ? (
              <View>
                <Text style={styles.rateTxt}>
                  Ratings and reviews
                </Text>
                {post.reviews.slice(0,2).map(item=>(
                  <View key={item.userId}>
                    <ReviewHotel review={item}/>
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
        <View style={styles.bookContainer}>
            <Text style={styles.bookTxt}>Book</Text>
        </View>
      </View>
  )
}

export default DetailedHotelPost;