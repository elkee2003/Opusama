import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react';
import styles from './styles'

const RealtorProfilePage = ({realtor}) => {

    // Extract the first image URLs from the posts
    const mediaUrls = realtor.posts.map(post => post.media[0].urls[0]);

    const renderMediaGrid = (mediaUrls) =>{
        // Group media URLs into rows of three
        const rows = []
        for(let i = 0; i < mediaUrls.length; i += 3) {
            rows.push(mediaUrls.slice(i, i + 3));
        }

        return rows.map((row, rowIndex)=>(
            <View key={rowIndex} style={styles.mediaRow}>
                {row.map((url,index)=>(
                    <TouchableOpacity>
                        <View key={index} style={styles.mediaContainer}>

                            {/* Image */}
                            <Image source={{uri:url}} style={styles.media}/>

                        </View>
                    </TouchableOpacity>
                ))}
                {row.length < 3 && (
                    // Add empty views to fill the row if it's not complete
                    Array.from({ length: 3 - row.length }).map((_, index) => (
                    <View key={index} style={styles.emptyContainer} />
                    ))
                )}
                {/* {row.map((url, index)=>(
                    <Image key={index} source={{uri:url}}style={styles.mediaImage}/>
                ))} */}
            </View>
        ))
    }

  return (
    <ScrollView showsVerticalScrollIndicator={false}  style={styles.container}>
        <View style={styles.profileDetails}>

            {/* Profile Picture */}
            <TouchableOpacity style={styles.profilePicContainer}>
                <Image source={{ uri: realtor.profilePicture }} style={styles.profileImg} />
            </TouchableOpacity>
        
            <View style={styles.details}>
                {/* Name */}
                <View style={styles.row}>
                    <Text style={styles.name}>{realtor.username}</Text>
                </View>
                <View style={styles.descriptionCon}>
                    <Text style={styles.description}>
                        {realtor.myDescription}
                    </Text>
                </View>

            </View>

            {/* Contact & Rating & Review */}
            <View style={styles.profileBtnCon}>
                {/* contact */}
                <TouchableOpacity style={styles.contactBtn}>
                    <Text style={styles.contactBtnTxt}>
                        Get in Touch!
                    </Text>
                </TouchableOpacity>

                {/* ratings and review */}
                <TouchableOpacity style={styles.rateReviewBtn}>
                    <Text style={styles.rateReviewBtnTxt}>
                        See Ratings & Review
                    </Text>
                </TouchableOpacity>
            </View>

        </View>

        {/* mapping over the images */}
        <View>
            {/* {realtor.posts.map((post) => renderMediaGrid(post.media[0].urls))} */}
            {renderMediaGrid(mediaUrls)}
        </View>
    </ScrollView>
  )
}

export default RealtorProfilePage;