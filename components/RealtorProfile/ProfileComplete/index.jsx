import { View, Text, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import MediaGrid from '../MediaGrid';
import RealtorProfileHead from '../RealtorProfileHead';

const RealtorProfileComplete = ({realtor, posts}) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <RealtorProfileHead realtor={realtor}/>
        <MediaGrid posts={posts}/>
    </ScrollView>
  )
}

export default RealtorProfileComplete