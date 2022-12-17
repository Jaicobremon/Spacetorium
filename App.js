//Making imports
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/Home';
import StartMapScreen from './screens/StarMap';
import DailyPicScreen from './screens/DailyPic';
import SpaceCraftScreen from './screens/SpaceCraft';

//Creating stack navigator
const Stack = createStackNavigator();

function App() {
  return (
    //Declaring screens within the stack navigator
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: true,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="StarMap" component={StartMapScreen} />
        <Stack.Screen name="DailyPic" component={DailyPicScreen} />
        <Stack.Screen name="SpaceCraft" component={SpaceCraftScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// initializing the app
export default App;
