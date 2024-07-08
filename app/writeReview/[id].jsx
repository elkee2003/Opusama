import { View, Text } from 'react-native'
import React, {useState} from 'react'
import WriteReviewItem from '../../components/WriteReviewItem'
import { useLocalSearchParams } from 'expo-router'
import feeds from '../../assets/data/feed'

const WriteReview = () => {

  const [review, setReview] = useState('')
  const {id} = useLocalSearchParams()
  const reviewSpecific = feeds.find(item=> item.id === id)

  return (
    <View>
      <WriteReviewItem review={review} setReview={setReview}/>
    </View>
  )
}

export default WriteReview