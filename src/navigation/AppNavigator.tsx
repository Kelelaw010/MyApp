import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/homescreens';
import SurahDetailScreen from '../screens/SurahDetailScreen';
import quranAPI from '../API/quranAPI';
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Quran App' }} />
      <Stack.Screen name="SurahDetail" component={SurahDetailScreen} />
    </Stack.Navigator>
  );
}
