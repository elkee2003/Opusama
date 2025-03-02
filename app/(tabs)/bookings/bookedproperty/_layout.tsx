import React from 'react'
import type {ParamListBase, TabNavigationState} from '@react-navigation/native';
import { createMaterialTopTabNavigator, MaterialTopTabNavigationOptions, MaterialTopTabNavigationEventMap } from '@react-navigation/material-top-tabs';
import { withLayoutContext } from 'expo-router';

const {Navigator} = createMaterialTopTabNavigator();

export const MaterialTobTabs = withLayoutContext<
MaterialTopTabNavigationOptions, typeof Navigator, TabNavigationState<ParamListBase>, MaterialTopTabNavigationEventMap
>(Navigator)

const BookedPropertyLayout = () => {
  return (
<MaterialTobTabs screenOptions={{
      tabBarLabelStyle:{fontWeight:'bold', textTransform:'capitalize'},
      tabBarStyle: {
        marginTop: 40,
        paddingTop: 10,
      },
      // tabBarIndicatorStyle: {
      //   height: 3,      // Indicator height, adjust if necessary
      //   borderRadius: 1.5,
      // },
    }}>
      <MaterialTobTabs.Screen name='propertydetails' options={{title:'Property'}}/>

      <MaterialTobTabs.Screen name='bookedmap' options={{title:'Map'}}/>
    </MaterialTobTabs>
  )
}

export default BookedPropertyLayout;