import { View, Text, TextInput, FlatList, Pressable, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import {Link} from 'expo-router'
import { Entypo } from '@expo/vector-icons';
import search from '../../../assets/data/search'

const Search = () => {
  const [inputText, setInputText] = useState(null)
  return (
    <View style={styles.container}>
      {/* input components */}
      <TextInput 
      style={styles.textInput} placeholder='Where are you going'
      value={inputText}
      onChangeText={setInputText}
      />
      {/* list of destination */}
      <FlatList
      data={search}
      renderItem={({item})=>(
      <Link href= {'/search/searchResults'} asChild>
        <Pressable>
          <View style={styles.locationRow}>
            <View style={styles.iconContainer}>
              <Entypo name="location-pin" size={24} color="black" />
            </View>
            <Text style={styles.location}>{item.description}</Text>
          </View>
        </Pressable>
      </Link>
      
      )}
      />

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        margin:20,
        marginTop:35
    },
    textInput:{
        fontSize:20,
        marginBottom:20,
    },
    locationRow:{
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:10,
        borderBottomWidth:1,
        borderColor:'lightgrey'
    },
    iconContainer:{
        backgroundColor:'lightgrey',
        padding:5,
        borderRadius:10,
        marginRight:10
    },
    location:{
        fontSize:17
    },
    
})

export default Search;