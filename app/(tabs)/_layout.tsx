import { Image } from 'react-native';
import { Tabs, } from 'expo-router'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import BookingProvider from '@/providers/BookingProvider';

import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

export default function TabsLayout() {
  return (
    // <BookingProvider>
      <Tabs screenOptions={{
          headerShown:false,
          tabBarActiveTintColor: Colors.PRIMARY
      }}>
          <Tabs.Screen 
          name='home'
          options={{
            tabBarLabel:'Home',
            tabBarIcon:({color})=> <FontAwesome name="home" size={28} color={color} />,
            headerShown:true,
            title:'Center',
            headerTitleAlign:'center',
            headerTitle: ()=><Image source={require('../../assets/data/images/Opusama3.png')} style={{resizeMode:'contain', width:50, height:50}}/>
          }}
          />

          <Tabs.Screen name='explore'
          options={{
            tabBarLabel:'Explore',
            tabBarIcon:({color})=> <FontAwesome name="search" size={28} color={color} />
          }}/>

          <Tabs.Screen name='favourite'
          options={{
            tabBarLabel:'Favourite',
            tabBarIcon:({color})=> <FontAwesome5 name="heart" size={28} color={color} />
          }}/>
          
          <Tabs.Screen name='profile'
          options={{
            tabBarLabel:'Profile',
            tabBarIcon:({color})=> <Ionicons name="person-sharp" size={28} color={color} />
          }}
          />
      </Tabs>
    // </BookingProvider>
  )
}