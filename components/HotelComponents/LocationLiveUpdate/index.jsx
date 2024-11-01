import { View, Text, useWindowDimensions, ActivityIndicator, Image, Pressable } from 'react-native';
import React, {useState, useEffect, useRef, useMemo} from 'react';
import BottomSheet, { BottomSheetView,} from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_API_KEY} from '../../../keys';
import * as Location from 'expo-location';
import styles from './styles';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';


const BookingLiveUpdate = ({post}) => {

    const {width, height} = useWindowDimensions();
    const mapRef = useRef(null)
    const bottomSheetRef = useRef(null)
    const snapPoints = useMemo(()=>['25%', '30%'], [])
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const originLoc = location ? { latitude: location.latitude, longitude: location.longitude } : null;

    const destinationLoc = {latitude: post.bookingLat, longitude: post.bookingLng};

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
        return <ActivityIndicator style={{ marginTop: 90 }} size="large" />;
    }

  return (
    <GestureHandlerRootView style={styles.container}>
        <Pressable onPress={()=>router.back()} style={styles.bckBtn}>
          <Ionicons name="arrow-back" style={styles.bckBtnIcon} />
        </Pressable>
        <MapView
        style={{width, height: height - 120}}
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
            // latitude: 4.8089763,
            // longitude:  7.0220555,
            // latitude: location.latitude,
            // longitude: location.longitude,
            latitude:location.latitude || 4.8089763,
            longitude:location.longitude || 7.0220555,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }}
        showsUserLocation
        >
            <MapViewDirections
                origin={originLoc}
                destination={destinationLoc}
                apikey={GOOGLE_API_KEY}
                strokeWidth={3}
                strokeColor='red'
            />

            {/* Origin Marker */}
            <Marker
                title={'Origin'}
                coordinate={originLoc}
            >
                <FontAwesome6 name="location-dot" size={35} color="green" />
            </Marker>

            {/* Destination Marker */}
            <Marker
                title={'Destination'}
                coordinate={destinationLoc}
            >
                <FontAwesome6 name="location-dot" size={35} color="green" />
            </Marker>
        </MapView>

        <BottomSheet 
            ref={bottomSheetRef}
            snapPoints={snapPoints} 
            index={1} 
            topInset={0} // Ensure no inset from the top
            handleIndicatorStyle={{backgroundColor:'#666768', width:80}}
        >
            <BottomSheetView style={styles.contentContainer}>
                {courier.profilePic && (
                    <View style={styles.imageContainer}>
                        <Image source={{ uri:  courier?.profilePic }} style={styles.img} />
                    </View>
                )}
                <Text style={styles.courierName}>{courier.firstName}</Text>
            </BottomSheetView>
        </BottomSheet>
    </GestureHandlerRootView>
  )
}

export default BookingLiveUpdate