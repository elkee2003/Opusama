import { View, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

const WriteReviewItem = ({review, setReview}) => {

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <TextInput
      style={styles.reviewInput}
      value={review}
      onChangeText={setReview()}
      multiline
      />
      <TouchableOpacity style={styles.postBtnContainer} onPress={()=>console.warn('Post')}>
        <Text style={styles.postBtnTxt}>Post</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default WriteReviewItem