import { Stack } from "expo-router";
import AuthProvider from "@/providers/AuthProvider";
import ProfileProvider from '@/providers/ProfileProvider';
import BookingProvider from "@/providers/BookingProvider";
import ShowingProvider from "@/providers/ShowingProvider";
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
          <ShowingProvider>
            <Stack screenOptions={{
              headerShown:false
            }}>
              <Stack.Screen name="(tabs)" />
            </Stack>
          </ShowingProvider>
        </BookingProvider>
      </ProfileProvider>
    </AuthProvider>
  );
}

export default RootLayout;