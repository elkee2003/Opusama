import { Stack } from "expo-router";
import AuthProvider from "@/providers/AuthProvider";
import ProfileProvider from '@/providers/ProfileProvider';
import BookingProvider from "@/providers/BookingProvider";
import {
  withAuthenticator,
  useAuthenticator
} from '@aws-amplify/ui-react-native';
import { Amplify } from 'aws-amplify';
import amplifyconfig from '../src/amplifyconfiguration.json'

Amplify.configure(amplifyconfig);

const RootLayout = () => {
  return (
    <AuthProvider>
      <ProfileProvider>
        <BookingProvider>
          <Stack screenOptions={{
            headerShown:false
          }}>
            <Stack.Screen name="(tabs)" />
          </Stack>
        </BookingProvider>
      </ProfileProvider>
    </AuthProvider>
  );
}

export default RootLayout;