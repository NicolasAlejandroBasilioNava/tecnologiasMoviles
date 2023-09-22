import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Constats from 'expo-constants'
import { THEME } from './src/theme/colors';
import { ItemButton } from './src/components/ItemButton';
import { TaskButton } from './src/components/TaskButton';
import { useTodos } from './src/hooks/useTodos';
import { TaskDetailModal } from './src/components/TaskDetailModal';
import { Input } from './src/components/Inputs/Input';



export default function App() {
  
    const [input, setInput] = useState()

    const getApiData = async () =>{
      try{
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json()
        console.log(data.results[0].name)
      }catch(error){
        console.error(error);
      }
    }

    useEffect(() => {
      getApiData()

      // return()=>{
      //   console.log('unmounted')
      // }
    }, [])  
  
  return (
    <View style={styles.container}>
        <Text style={{fontSize: 30,}}>Holas</Text>
        
        
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.CREAM,
    paddingTop: Constats.statusBarHeight,
    paddingHorizontal: 20,
  },
  input:{
    borderWidth: 0.5, 
    paddingHorizontal: 10, 
    fontSize: 17, 
    flex: 1,
    borderRadius: 10,
  },
});
