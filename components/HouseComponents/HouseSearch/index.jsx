import { View, Text, TextInput, FlatList, } from 'react-native'
import React, {useState, useEffect,} from 'react';
import styles from './styles';
import SearchResults from './searchResultsCom'
import { DataStore } from 'aws-amplify/datastore';
import { Realtor, Post } from '../../../src/models';

const HouseSearch = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [housePosts, setHousePosts] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    const handleSearch = (query) => {
      setSearchQuery(query);

      // Wait until housePosts is populated before attempting to filter
      if (housePosts.length === 0) {
        return; // Exit if housePosts is not yet populated
      }

      // if query is empty, show all data
      if(!query){
        setFilteredData([])
      }else{
        const lowercasedQuery = query.toLowerCase();

        const filtered = housePosts.filter(item => {
          const matchesRealtorName = item?.firstName?.toLowerCase().includes(lowercasedQuery);

          const matchesType = item?.type?.toLowerCase().includes(lowercasedQuery);

          const matchesLocation = item?.address?.toLowerCase().includes(lowercasedQuery);

          const matchesCity = item?.city?.toLowerCase().includes(lowercasedQuery);

          const matchesState = item?.state?.toLowerCase().includes(lowercasedQuery);

          const matchesCountry = item?.country?.toLowerCase().includes(lowercasedQuery);

          const matchesPrice = item?.price?.toString(). includes(lowercasedQuery);

          const matchesTotalPrice = item?.totalPrice?.toString(). includes(lowercasedQuery);

          return matchesRealtorName || matchesType || matchesLocation || matchesCity || matchesState || matchesCountry || matchesPrice || matchesTotalPrice;
        });
        setFilteredData(filtered)
      }
    }

    const fetchRealtorsAndPosts = async () => {
      try{
        const realtors = await DataStore.query(Realtor);
        const posts = await DataStore.query(Post);

        // Filter posts with propertyType "hotel" or "shortlet" only
        const filteredPosts = posts.filter(
          (post) => post.propertyType === 'House'
        )

        const housePostData = filteredPosts.map(post =>{
          const realtor = realtors.find(r => r.id === post.realtorID);
          return {
            ...post,
            realtorFirstName: realtor?.firstName
          };
        });

        setHousePosts(housePostData);
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
        placeholder='Search House'
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

export default HouseSearch;