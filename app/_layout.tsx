import { Stack } from "expo-router";
import {
  withAuthenticator,
  useAuthenticator
} from '@aws-amplify/ui-react-native';
import { Amplify } from 'aws-amplify';
import amplifyconfig from '../src/amplifyconfiguration.json'

Amplify.configure(amplifyconfig);

const RootLayout = () => {
  return (
    <Stack screenOptions={{
      headerShown:false
    }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}

// export default withAuthenticator(RootLayout);
export default RootLayout;