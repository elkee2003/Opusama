import { View, Text, Image } from 'react-native'
import React, {useState} from 'react'
import styles from './styles'
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const ReviewStudentAcc = ({review}) => {

    const [readMore, setReadMore] = useState(false)

  return (
    <View style={styles.reviewContainer}>
        <View style={styles.profileReviewContainer}>

            <View style={styles.profileDetails}>
                <View style={styles.profilePicContainer}>
                {
                    review?.profilePicture ? 
                    <Image source={{uri: review.profilePicture}} style={styles.profileImg}/>
                    :
                    <Ionicons style={styles.vectorIcon}name="person-sharp" />
                }
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
                {readMore || review.review.length <= 150 ? review.review : `${review.review.substring(0,150)}...`}

                {/* Button to toggle */}
                { review.review.length > 150 &&(readMore ?
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
    </View>
  )
}

export default ReviewStudentAcc;