
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Screen_01 from './screens/Screen_01';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Screen_01' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Screen_01" component={Screen_01} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}
