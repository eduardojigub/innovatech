import { StatusBar } from 'expo-status-bar';
import MainScreen from './src/screens/MainScreen';
import { SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <MainScreen />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
