import { View, Text } from 'react-native';
import React from 'react';
import OfficeSpacePostList from '../../../components/OfficeSpaceComponents/OfficeSpacePostList';


const OfficeSpace = () => {
  return (
    <View style={{flex:1}}>
      <OfficeSpacePostList/>
    </View>
  )
}

export default OfficeSpace;