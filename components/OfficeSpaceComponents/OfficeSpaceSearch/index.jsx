import { View, Text, TextInput, FlatList, } from 'react-native'
import React, {useState, useEffect,} from 'react';
import styles from './styles';
import SearchResults from './searchResultsCom'
import { DataStore } from 'aws-amplify/datastore';
import { Realtor, Post } from '../../../src/models';

const OfficeSpaceSearch = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [officePosts, setOfficePosts] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    const handleSearch = () => {

      // Wait until housePosts is populated before attempting to filter
      if (officePosts.length === 0) {
        return; // Exit if housePosts is not yet populated
      }

      // Parse user inputs for price
      const minPriceParsed = parseFloat(minPrice) || 0; 
      const maxPriceParsed = parseFloat(maxPrice) || Infinity;

      const lowercasedQuery = searchQuery.toLowerCase();

      const filtered = officePosts.filter(item => {
        const matchesQuery = 
        item?.realtorFirstName?.toLowerCase().includes(lowercasedQuery) ||
        item?.type?.toLowerCase().includes(lowercasedQuery) ||
        item?.address?.toLowerCase().includes(lowercasedQuery) ||
        item?.city?.toLowerCase().includes(lowercasedQuery) ||
        item?.state?.toLowerCase().includes(lowercasedQuery) ||
        item?.country?.toLowerCase().includes(lowercasedQuery);

        const matchesPrice = item?.price >= minPriceParsed && item?.price <= maxPriceParsed;

        return matchesQuery && matchesPrice;
      });
      setFilteredData(filtered)
    };

    const fetchRealtorsAndPosts = async () => {
      try{
        const realtors = await DataStore.query(Realtor);
        const posts = await DataStore.query(Post);

        // Filter posts with propertyType "hotel" or "shortlet" only
        const filteredPosts = posts.filter(
          (post) => post.propertyType === 'Office Space'
        )

        const officePostData = filteredPosts.map(post =>{
          const realtor = realtors.find(r => r.id === post.realtorID);
          return {
            ...post,
            realtorFirstName: realtor?.firstName,
            price: parseFloat(post.price) || 0,
          };
        });

        setOfficePosts(officePostData);
        setFilteredData(officePostData);
      }catch(error){
        console.error('This is the error from searchbar:', error)
      }
    };

    useEffect(() => {
      handleSearch();
    }, [searchQuery, minPrice, maxPrice, officePosts]);

    useEffect(() => {
     fetchRealtorsAndPosts()
    }, []);

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.searchInput}
        placeholder='Search Office Space'
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <View style={styles.priceInputRow}>
        <TextInput
          style={styles.priceInput}
          placeholder="Min Price"
          multiline
          value={minPrice}
          keyboardType="numeric"
          onChangeText={setMinPrice}
        />

        <TextInput
          style={styles.priceInput}
          placeholder="Max Price"
          multiline
          value={maxPrice}
          keyboardType="numeric"
          onChangeText={setMaxPrice}
        />
      </View>
      
      <FlatList
        showsVerticalScrollIndicator={false}
        data={filteredData}  // Use filtered data for FlatList
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SearchResults post={item} />}
        ListEmptyComponent={
          <Text style={styles.noResultText}>No results found</Text> // Message for no matches
        }
      />
    </View>
  )
}

export default OfficeSpaceSearch;