import { View, Text, ImageBackground, Pressable, StyleSheet, Dimensions, FlatList, ScrollView } from 'react-native'
import React from 'react'
import PostList from '../../../components/PostList'
import BannerAds from '../../../components/BannerAds'
import { FontAwesome } from '@expo/vector-icons';
import {Link} from "expo-router";


const HomeScreen = () => {

  return (
    <View style={styles.container}>
      <View>
        {/* Search Bar */}
        <Link href={'search'} asChild>
          <Pressable style={styles.searchBtn} onPress={()=> console.warn('you want to navigate')}>
              <FontAwesome name="search" size={24} color="black" />
              <Text style= {styles.searchBtnTxt}>
                Search for Houses
              </Text>
          </Pressable>
        </Link>
      </View>

      <View style={styles.bannerAds}>
        <BannerAds/>
      </View>
      
      {/* Random Listings */}

        <PostList/>
        
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  searchBtn:{
      // position:'fixed',
      // top: 50,
      marginTop:50,
      backgroundColor:'#ffffff',
      height:60,
      width:Dimensions.get('screen').width - 20,
      marginHorizontal:10,
      borderRadius:20,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
  },
  searchBtnTxt:{
      fontSize:16,
      fontWeight:'bold',
      margin:15,
  },
  bannerAds:{
    height:'10%',
    backgroundColor:'#cfcbcb',
    marginVertical:10,
    justifyContent:'center'
  }

})

export default HomeScreen