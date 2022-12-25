import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LandingCarousel from './src/component/LandingCarousel';
import Landing from './src/screen/authetication/Landing';
import Signin from './src/screen/authetication/Signin';

export default function App() {
  return (
    <View className='flex-1' style={{backgroundColor:"#F5EDDC"}}>
      <Signin></Signin>
    </View>
  );
}

