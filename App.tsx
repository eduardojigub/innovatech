import { StatusBar } from 'expo-status-bar';
import MainScreen from '@screens/MainScreen';
import { UserProvider } from '@context/userContext';

export default function App() {
  return (
    <UserProvider>
      <StatusBar style="auto" />
      <MainScreen />
    </UserProvider>
  );
}
