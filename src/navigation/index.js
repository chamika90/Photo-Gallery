import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {theme} from 'config/theme';

import HomeScreen from '../screens/Home';
import PhotoViewScreen from '../screens/PhotoView';

const {colors} = theme;
const HomeStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.primaryHeaderBackgroundColor,
      },
      headerTintColor: colors.primaryHeaderTintColor,
      headerTitleAlign: 'center',
    }}>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{title: 'My Gallery'}}
    />
    <HomeStack.Screen
      name="PhotoView"
      component={PhotoViewScreen}
      options={{title: ''}}
    />
  </HomeStack.Navigator>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <HomeStackScreen />
    </NavigationContainer>
  );
};

export default AppNavigator;
