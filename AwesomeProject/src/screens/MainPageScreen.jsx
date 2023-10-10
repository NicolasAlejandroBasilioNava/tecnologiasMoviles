import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './LoginScreen';
import SingUpScreen from './SingUpScreen';
import TabNavigationScreen from './TabNavigationScreen';
import WelcomeScreen from './WelcomeScreen';

const Drawer = createDrawerNavigator();

export default function MainPageScreen({navigation}){
    return (
          <Drawer.Navigator initialRouteName='TabsMenu'>
            <Drawer.Screen name='TabsMenu' component={TabNavigationScreen} options={{headerShown: false}}/>
            <Drawer.Screen name='LogOut' component={WelcomeScreen} options={{headerShown: false}}/>
          </Drawer.Navigator>
      );
}