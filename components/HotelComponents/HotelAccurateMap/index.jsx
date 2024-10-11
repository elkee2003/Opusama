import { View, useWindowDimensions, ActivityIndicator, PermissionsAndroid, Platform,} from 'react-native'
import React, {useState, useEffect} from 'react'
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
// Geolocation.setRNConfiguration(config);
import styles from './styles'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';


const HotelMap = () => {
    const {width, height} = useWindowDimensions()
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);


    useEffect(() => {
      let watchId;
  
      const requestLocationPermission = async () => {
          try {
              // For both iOS and Android
              if (Platform.OS === 'ios' || Platform.OS === 'android') {
              Geolocation.requestAuthorization(); // Request permission on iOS and Android
              }
      
              // Watch the user's location and update it continuously
              watchId = Geolocation.watchPosition(
              (position) => {
                  const { latitude, longitude } = position.coords;
                  setLocation({ latitude, longitude });
                  console.log('Updated Location:', position);
              },
              (error) => {
                  console.error('Geolocation error:', error);
                  setErrorMsg('Error fetching location');
              },
              {
                  enableHighAccuracy: true,
                  timeout: 20000,
                  maximumAge: 1000,
                  distanceFilter: 500, // Update based on distance (e.g., every 500 meters)
              }
              );
          } catch (error) {
              console.error('Location permission error:', error);
              setErrorMsg('Failed to request location permission');
          }
      };
  
      requestLocationPermission();
  
      // Cleanup subscription when the component unmounts
      return () => {
        if (watchId !== null) {
          Geolocation.clearWatch(watchId);
        }
      };
    }, []);

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
          coordinate={{latitude:4.8055 , longitude:7.0281}}
        >
            <FontAwesome5 name="hotel" style={styles.marker} />
        </Marker>
      </MapView>
    </View>
  )
}

export default HotelMap;