import { View, Text, Image } from 'react-native'
import React, {useState} from 'react'
import styles from './styles'
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const ReviewHotel = ({review}) => {

    const [readMore, setReadMore] = useState(false)

  return (
    <View style={styles.reviewContainer}>
        <View style={styles.profileReviewContainer}>

            <View style={styles.profileDetails}>
                <View style={styles.profilePicContainer}>
                <Image/>
                </View>
                <Text style={styles.username}>
                    {review.username}
                </Text>
            </View>

            <View style={styles.profileStarContainer}>
                <FontAwesome style={styles.profileStar} name="star-o" />
                <FontAwesome style={styles.profileStar} name="star-o" />
                <FontAwesome style={styles.profileStar} name="star-o" />
                <FontAwesome style={styles.profileStar} name="star-o" />
                <FontAwesome style={styles.profileStar} name="star-o" />
                <Text>
                    {review.reviewStar}
                </Text>
            </View>

            <Text style={styles.profileReviewTxt}>
                {readMore ? review.review : `${review.review.substring(0,150)}...`}
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
    </View>
  )
}

export default ReviewHotel;