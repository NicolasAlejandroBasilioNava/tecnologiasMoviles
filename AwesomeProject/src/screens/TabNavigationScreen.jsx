import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTabScreen from './HomeTabScreen';
import WishlistTabScreen from './WishlistTabScreen';
import ShopTabScreen from './ShopTabScreen';
import OrdersTabScreen from './OrdersTabScreen';
import ProfileTabScreen from './ProfileTabScreen';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Constats from 'expo-constants'


const Tab = createBottomTabNavigator();

export default function TabNavigationScreen({navigation}){

    return (
        <Tab.Navigator>
          <Tab.Screen name="Home1" component={HomeTabScreen} options={{headerShown: false, tabBarIcon: () => <FontAwesome name="compass" size={24} color="black" />}}/>
          <Tab.Screen name="WishList" component={WishlistTabScreen} options={{headerShown: false, tabBarIcon: () => <FontAwesome name="heart" size={24} color="black" />}}/>
          <Tab.Screen name="Shop" component={ShopTabScreen} options={{headerShown: false, tabBarIcon: () => <FontAwesome name="shopping-cart" size={24} color="black" />}}/>
          <Tab.Screen name="Orders" component={OrdersTabScreen} options={{headerShown: false, tabBarIcon: () => <FontAwesome5 name="list-alt" size={24} color="black" />}}/>
          <Tab.Screen name="Profile" component={ProfileTabScreen} options={{headerShown: false, tabBarIcon: () => <Ionicons name="person" size={24} color="black" />}}/>
        </Tab.Navigator> 
      );
}