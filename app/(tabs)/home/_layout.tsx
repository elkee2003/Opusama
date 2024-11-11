import React from 'react'
import type {ParamListBase, TabNavigationState} from '@react-navigation/native';
import { createMaterialTopTabNavigator, MaterialTopTabNavigationOptions, MaterialTopTabNavigationEventMap } from '@react-navigation/material-top-tabs';
import { withLayoutContext } from 'expo-router';

const {Navigator} = createMaterialTopTabNavigator();

export const MaterialTobTabs = withLayoutContext<
MaterialTopTabNavigationOptions, typeof Navigator, TabNavigationState<ParamListBase>, MaterialTopTabNavigationEventMap
>(Navigator)

const HomeLayout = () => {
  return (
    <MaterialTobTabs screenOptions={{
      tabBarLabelStyle:{fontWeight:'bold', textTransform:'capitalize'},
      tabBarScrollEnabled: true,
    }}>
      <MaterialTobTabs.Screen name='index' options={{title:'Houses'}}/>
      <MaterialTobTabs.Screen name='hotels' options={{title:'Hotels / Shortlets'}}/>
      <MaterialTobTabs.Screen name='studentaccommodation' options={{title:'Student Accommodation'}}/>
      <MaterialTobTabs.Screen name='propertysale' options={{title:'Property Sale'}}/>
      <MaterialTobTabs.Screen name='officespace' options={{title:'Office Space'}}/>
    </MaterialTobTabs>
  )
}

export default HomeLayout;