import { View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import DefaultImage from '../../../assets/images/defaultImage.png';
import styles from './styles';
import { router } from 'expo-router';
import { getUrl } from 'aws-amplify/storage';

const MediaGrid = ({ posts }) => {
  const [imageUris, setImageUris] = useState({});

  // Fetch signed URLs for each post's media using Promise.all
  const fetchImageUrls = async () => {
    try {
      const urlsByPost = await Promise.all(
        posts.map(async (post) => {
          const mediaUrls = await Promise.all(
            post.media.map(async (path) => {
              const result = await getUrl({
                path,
                options: {
                  validateObjectExistence: true,
                  expiresIn: null,
                },
              });
              return result.url.toString();
            })
          );
          return { [post.id]: mediaUrls };
        })
      );

      const urlsObject = Object.assign({}, ...urlsByPost);
      setImageUris(urlsObject);
    } catch (error) {
      console.error('Error fetching image URLs:', error);
    }
  };

  useEffect(() => {
    if (posts.length > 0) {
      fetchImageUrls();
    }
  }, [posts]);

  return (
    <ScrollView contentContainerStyle={styles.gridContainer}>
      {posts.map((post) => (
        <TouchableOpacity
          key={post.id}
          onPress={() => router.push(`/explore/${post.id}`)}
          style={styles.gridItem}
        >
          <View style={styles.imageContainer}>
            {/* Display the first image or a default image */}
            {imageUris[post.id]?.[0] ? (
              <Image source={{ uri: imageUris[post.id][0] }} style={styles.image} />
            ) : (
              <Image source={DefaultImage} style={styles.image} />
            )}
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default MediaGrid;