import { View, useWindowDimensions, ActivityIndicator, PermissionsAndroid, Platform,} from 'react-native'
import React, {useState, useEffect} from 'react'
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {GOOGLE_API_KEY} from '../,./../../../keys'
import MapViewDirections from 'react-native-maps-directions';
import * as Location from 'expo-location';
import styles from './styles'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import {useProfileContext} from '@/providers/ProfileProvider';

const OfficeSpaceBlurredMap = () => {
    const {width, height} = useWindowDimensions();
    const [location, setLocation] = useState(null);
    const {postData} = useProfileContext();
    const [errorMsg, setErrorMsg] = useState(null);

    const postLat = postData?.lat || 0; 
    const postLng = postData?.lng || 0;


    useEffect(() => {
      (async () => {
        try {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLocation({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          });
        } catch (error) {
          console.error('Error fetching location:', error);
          setErrorMsg('Failed to fetch location');
        }
      })();
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
          coordinate={{latitude:postLat+ 0.010, longitude:postLng + 0.010}}
        >
            <FontAwesome6 name="house" style={styles.marker}/>
        </Marker>
      </MapView>
    </View>
  )
}

export default OfficeSpaceBlurredMap;