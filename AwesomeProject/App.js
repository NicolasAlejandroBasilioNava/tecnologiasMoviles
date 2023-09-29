import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Constats from 'expo-constants'
import { THEME } from './src/theme/colors';
import { ItemButton } from './src/components/ItemButton';
import { TaskButton } from './src/components/TaskButton';
import { useTodos } from './src/hooks/useTodos';
import { TaskDetailModal } from './src/components/TaskDetailModal';
import { Input } from './src/components/Inputs/Input';
import { RickAndMorthyCard } from './src/components/RickAndMorthyCard';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './src/screens/WelcomeScreen';
import WelcomeBackScreen from './src/screens/WelcomeBackScreen';
import RickAndMorthyScreen from './src/screens/RickAAndMorthyScreen';
import RickAndMorthyInfoScreen from './src/screens/RickAndMorthyInfoScreen';

const Stack = createStackNavigator()


export default function App() {
  
  
  return (
    <NavigationContainer
    
    >
      <Stack.Navigator 
      initialRouteName='Home'
      screenOptions={{headerShown: false}}
      >
        <Stack.Screen name='Home' component={RickAndMorthyScreen}/>
        <Stack.Screen name='Ticket' component={RickAndMorthyInfoScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


