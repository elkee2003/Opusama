import { View, useWindowDimensions, ActivityIndicator, PermissionsAndroid, Platform,} from 'react-native'
import React, {useState, useEffect} from 'react'
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {GOOGLE_API_KEY} from '../,./../../../keys'
import MapViewDirections from 'react-native-maps-directions';
import * as Location from 'expo-location';
import styles from './styles'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';


const HouseBlurredMap = () => {
    const {width, height} = useWindowDimensions()
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);


    useEffect(() => {
      let locationSubscription;
  
      const requestLocationPermission = async () => {
          try {
              // Request location permissions
              let { status } = await Location.requestForegroundPermissionsAsync();
              if (status !== 'granted') {
                  setErrorMsg('Permission to access location was denied');
                  return;
              }
  
              // Get the current location once
              let initialLocation = await Location.getCurrentPositionAsync({});
              setLocation({
                  latitude: initialLocation.coords.latitude,
                  longitude: initialLocation.coords.longitude,
              });
  
              // Watch location with updates every 20 seconds or every 500 meters
              locationSubscription = await Location.watchPositionAsync(
                  {
                      accuracy: Location.Accuracy.High,
                      timeInterval: 20000, // 20 seconds
                      distanceInterval: 200, // 500 meters
                  },
                  (position) => {
                      const { latitude, longitude } = position.coords;
                      setLocation({ latitude, longitude,
                      // heading: heading || 0,
                      });
                      console.log('Updated Location:', position);
                      // console.log(location.heading)
                  }
              );
          } catch (error) {
              console.error('Location permission error:', error);
              setErrorMsg('Failed to request location permission');
          }
      };
  
      requestLocationPermission();
  
      // Cleanup the watcher when the component unmounts
      return () => {
          if (locationSubscription) {
              locationSubscription.remove();
          }
      };
  }, [setLocation]);

    if (!location || !location.latitude || !location.longitude) {
      return <ActivityIndicator style={{ marginTop: 30 }} size="large" />;
    }

  return (
    <View style={styles.container}>
      {/* <MapView
      style={{width, height: height - 120}}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
      }}
      showsUserLocation
      >
        <Marker>
            <FontAwesome5 name="hotel" size={24} color="black" />
        </Marker>
      </MapView> */}
      <MapView
        style={{width, height: height - 80}}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{latitude:4.8055 + 0.007, longitude:7.0281 + 0.007}}
        >
            <FontAwesome6 name="house" style={styles.marker}/>
        </Marker>
      </MapView>
    </View>
  )
}

export default HouseBlurredMap;