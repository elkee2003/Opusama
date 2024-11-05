import React from 'react'
import type {ParamListBase, TabNavigationState} from '@react-navigation/native';
import { createMaterialTopTabNavigator, MaterialTopTabNavigationOptions, MaterialTopTabNavigationEventMap } from '@react-navigation/material-top-tabs';
import { withLayoutContext } from 'expo-router';
import { Stack } from 'expo-router'

const {Navigator} = createMaterialTopTabNavigator();

export const MaterialTobTabs = withLayoutContext<
MaterialTopTabNavigationOptions, typeof Navigator, TabNavigationState<ParamListBase>, MaterialTopTabNavigationEventMap
>(Navigator)

const OfficeSpaceInfoLayout = () => {
  return (
    <MaterialTobTabs screenOptions={{
      tabBarLabelStyle:{fontWeight:'bold', textTransform:'capitalize', marginTop:40,}
    }}>
      <MaterialTobTabs.Screen name='[id]' options={{title:'House'}}/>
      <MaterialTobTabs.Screen name='map' options={{title:'Map'}}/>
    </MaterialTobTabs>
  )
}

export default OfficeSpaceInfoLayout;