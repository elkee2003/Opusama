import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import feeds from '../../assets/data/feed'
import { AntDesign } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router'
import ReviewProperty from '../../components/HouseComponents/ReviewProperty'
import { router } from 'expo-router';

const AllReviews = () => {

    const {id} = useLocalSearchParams()

    const postReviews = feeds.flatMap(feed=> feed.posts.map(post => post))

    const review = postReviews.find(item => item.id === id)
  return (
    <View style={styles.container}>
        <Text style={styles.header}>Ratings and Reviews</Text>
        <AntDesign name="arrowleft" style={styles.backIcon} onPress={()=>router.back()}/>
        <View style={styles.flatList}>
            <FlatList
            showsVerticalScrollIndicator={false}
            data={review.reviews}
            renderItem={({item})=>(
                <ReviewProperty review={item}/>
            )}
            />
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        position:'relative',
        marginVertical:40,
        marginHorizontal:10,
    },
    flatList:{
        marginTop:20,
    },
    header:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:25,
    },
    backIcon:{
        position:'absolute',
        top:2,
        fontSize:35,
        color:'#060320',
    }
})

export default AllReviews