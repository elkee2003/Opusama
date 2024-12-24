import { View, Text, ScrollView} from 'react-native';
import React, {useRef, useMemo } from 'react';
import styles from './styles';
import BottomSheet, { BottomSheetView, BottomSheetFlatList, BottomSheetScrollView,} from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MediaGrid from '../MediaGrid';
import RealtorProfileHead from '../RealtorProfileHead';
import UserReviews from '../usersReviews';

const RealtorProfileComplete = ({realtor, posts}) => {

  const bottomSheetRef = useRef(null)
  const snapPoints = useMemo(()=>['20%', '30%', '85%'], [])

  return (
    <GestureHandlerRootView style={styles.container} >
      <ScrollView>
        <RealtorProfileHead realtor={realtor}/>
        <UserReviews  realtor={realtor}/>
        <MediaGrid posts={posts}/>
      </ScrollView>


      {/* <BottomSheet snapPoints={snapPoints}>
          <UserReviews  realtor={realtor}/>
      </BottomSheet> */}
    </GestureHandlerRootView>
  )
}

export default RealtorProfileComplete