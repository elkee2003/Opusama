import { View, Text } from 'react-native';
import React from 'react';
import EditProfile from '../../../components/ProfileComs/EditProfile';
import MainProfile from '../../../components/ProfileComs/MainProfile';
import {useAuthContext} from '@/providers/AuthProvider';

const Profile = () => {

  const {dbUser} = useAuthContext();

  return (
    <View style={{flex:1}}>
      {dbUser ?
        <MainProfile/>
      :
        <EditProfile/>
      }
    </View>
  )
}

export default Profile