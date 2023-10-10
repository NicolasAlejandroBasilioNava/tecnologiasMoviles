import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, ScrollView, FlatList, TouchableOpacity, Button } from 'react-native';
import Constats from 'expo-constants'
import { THEME } from './src/theme/colors';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { AppContextProvider } from './src/context/AppContext';
import SendAmountScreen from './src/screens/SendAmountScreen';
import MyCardMenuScreen from './src/screens/MyCardMenuScreen';
import { Ionicons } from '@expo/vector-icons';
import TotalBalanceScreen from './src/screens/TotalBalanceScreen';
import ThemeToggle from './src/components/ThemeIcon';
import WelcomeScreen from './src/screens/WelcomeScreen';
import WelcomeBackScreen from './src/screens/WelcomeBackScreen';
import LoginScreen from './src/screens/LoginScreen';
import SingUpScreen from './src/screens/SingUpScreen';
import MainPageScreen from './src/screens/MainPageScreen';
import TabNavigationScreen from './src/screens/TabNavigationScreen';
import { AuthProvider } from './src/context/AuthContext';


const Stack = createStackNavigator()

export default function App() {
  
  
  return(
    <AuthProvider>

    <AppContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='WelcomeScreen'
          screenOptions={{
            headerStyle: {
              backgroundColor: THEME.COLORS.BLACK,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => (
              <ThemeToggle />
              ),
            }}
            >
            <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} 
              options={{headerShown: false}}
              />
            <Stack.Screen name='Login' component={LoginScreen} 
              options={{headerShown: false}}
              />
            <Stack.Screen name='SignUp' component={SingUpScreen} 
              options={{headerShown: false}}
              />
           <Stack.Screen name='TabNavigation' component={TabNavigationScreen} 
              options={{headerShown: false}}
              />
            <Stack.Screen name='DrawerNavigation' component={MainPageScreen} 
              options={{headerShown: false, }}
              />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContextProvider>
    </AuthProvider>
)
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: THEME.COLORS.WHITE.SOLID,
  paddingTop: Constats.statusBarHeight,
  paddingHorizontal: 20,
  justifyContent: 'center',
  alignItems: 'center',
},

});


//<AppContextProvider>


    // <View style={styles.container}>
    //    <Card person={person}/>
    // </View>
    // </AppContextProvider>