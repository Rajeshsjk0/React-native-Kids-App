import React from 'react';

import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {GlobalStyles} from './constants/styles';

import AfterIntroScreen from './screens/AfterIntroScreen';
import DogPlayScreen from './screens/DogPlayScreen';
import IntroScreen from './screens/IntoScreen';
import PlayAround from './screens/PlayAround';
import StartScreen from './screens/StartScreen';

const Stack = createStackNavigator();

const App = function () {
  return (
    <>
      <StatusBar style="Blue" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: GlobalStyles.colors.black100},
            headerTintColor: 'white',
          }}>
          <Stack.Screen
            name="StartScreen"
            component={StartScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="IntroScreen"
            component={IntroScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AfterIntroScreen"
            component={AfterIntroScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="DogPlayScreen"
            component={DogPlayScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
