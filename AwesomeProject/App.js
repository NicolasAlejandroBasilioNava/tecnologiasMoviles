import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, ScrollView, FlatList, TouchableOpacity, Button } from 'react-native';
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
import { Card } from './src/components/Card';
import { AppContextProvider } from './src/context/AppContext';
import SendAmountScreen from './src/screens/SendAmountScreen';
import MyCardMenuScreen from './src/screens/MyCardMenuScreen';
import { Ionicons } from '@expo/vector-icons';
import TotalBalanceScreen from './src/screens/TotalBalanceScreen';


const Stack = createStackNavigator()
const person = {
  id: 1,
  name: 'Juan',
  lastname: 'Rivera',
  age: 15,
  city: 'Morelia',
  country: 'Mexico'
}

export default function App() {
  
  
  return(
    <NavigationContainer>
      <Stack.Navigator
        // screenOptions={{headerShown: true}}
        screenOptions={{
        headerStyle: {
          backgroundColor: THEME.COLORS.BLACK,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      >
        <Stack.Screen name='MyCards' component={MyCardMenuScreen}
          options={{
            headerLeft: () => <Ionicons name="person" size={24} color="white" 
                                style={{marginHorizontal: 20}}
                              />,
            headerTitle: ''
          }}
        />
        <Stack.Screen 
          name= 'Send' 
          component={SendAmountScreen} 
          options={{
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                // color="#fff"
              />
            ),
            // headerLeft: () => (
            //   <Button
            //     onPress={() => alert('This is a button!')}
            //     title="Info"
            //     // color="#fff"
            //   />
            // ),
            headerStyle: {
              alignItems: 'center',
              backgroundColor: THEME.COLORS.BLACK,
            }
          }}
        />
        <Stack.Screen 
          name='TotalBalance'
          component={TotalBalanceScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
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