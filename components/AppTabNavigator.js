import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen.js'
import ExchangeScreen from '../screens/ExchangeScreen'



export const AppTabNavigator = createBottomTabNavigator({
  HomeScreen : {
    screen: HomeScreen,
    navigationOptions :{
      tabBarLabel : "HomeScreen",
    }
  },
  ExchangeScreen: {
    screen: ExchangeScreen,
    navigationOptions :{
    tabBarLabel : "ExchangeScreen",
    }
  }
});
