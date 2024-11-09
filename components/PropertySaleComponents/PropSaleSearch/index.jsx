import { View, Text, TextInput, FlatList, } from 'react-native'
import React, {useState, useEffect,} from 'react';
import styles from './styles';
import SearchResults from './searchResultsCom'
import { DataStore } from 'aws-amplify/datastore';
import { Realtor, Post } from '../../../src/models';

const PropSaleSearch = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [landPosts, setLandPosts] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    const handleSearch = (query) => {
      setSearchQuery(query);

      // Wait until housePosts is populated before attempting to filter
      if (landPosts.length === 0) {
        return; // Exit if housePosts is not yet populated
      }

      // if query is empty, show all data
      if(!query){
        setFilteredData([])
      }else{
        const lowercasedQuery = query.toLowerCase();

        const filtered = landPosts.filter(item => {
          const matchesRealtorName = item?.firstName?.toLowerCase().includes(lowercasedQuery);

          const matchesLocation = item.address?.toLowerCase().includes(lowercasedQuery);

          const matchesPrice = item.price?.toString(). includes(lowercasedQuery);

          return matchesRealtorName || matchesLocation || matchesPrice;
        });
        setFilteredData(filtered)
      }
    }

    const fetchRealtorsAndPosts = async () => {
      try{
        const realtors = await DataStore.query(Realtor);
        const posts = await DataStore.query(Post);

        const landPostData = posts.map(post =>{
          const realtor = realtors.find(r => r.id === post.realtorID);
          return {
            ...post,
            realtorFirstName: realtor?.firstName
          };
        });

        setLandPosts(landPostData);
      }catch(error){
        console.error('This is the error from searchbar:', error)
      }
    };

    useEffect(() => {
     fetchRealtorsAndPosts()
    }, []);

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.searchInput}
        placeholder='Search Property'
        value={searchQuery}
        onChangeText={handleSearch}
      />
      {searchQuery && (
        filteredData.length > 0 ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={filteredData}  // Use filtered data for FlatList
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <SearchResults post={item} />}
          />
        ) : (
          <Text style={styles.noResultText}>No result found</Text>  // Display when no result matches
        )
      )}
    </View>
  )
}

export default PropSaleSearch;