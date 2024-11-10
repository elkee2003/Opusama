import { View, Text } from 'react-native';
import React from 'react';
import StudentAccommodationPostList from '../../../components/StudentAccommodationCom/StudentAccPostList';


const StudentAccommodation = () => {
  return (
    <View style={{flex:1}}>
      <StudentAccommodationPostList/>
    </View>
  )
}

export default StudentAccommodation;