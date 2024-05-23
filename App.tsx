import { StatusBar } from 'expo-status-bar';
import MainScreen from '@screens/MainScreen';
import { UserProvider } from '@context/userContext';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 5000);


export default function App() {
  return (
    <UserProvider>
      <StatusBar style="auto" />
      <MainScreen />
    </UserProvider>
  );
}
