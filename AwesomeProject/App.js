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
// import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import { LoginScreen } from './src/screens/LoginScreen';

const Stack = createStackNavigator()

export default function App() {
  
    const [input, setInput] = useState()
    const [data, setData]= useState([])
    const [isLoading, setIsLoading] = useState(true);

    const getApiData = async ({page}) =>{
      try{
        const url = `https://rickandmortyapi.com/api/character/?page=${page}`
        console.log(url)
        const response = await fetch(url)
        const data = await response.json()
        setData(data.results)
        setIsLoading(false)
      }catch(error){
        console.error(error);
      }
    }

    useEffect(() => {
      getApiData({page: 4})

      // return()=>{
      //   console.log('unmounted')
      // }
    }, [])  
  
  return (
    <NavigationContainer>

    <View style={styles.container}>
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen}/>
      <Stack.Screen name='Login' component={LoginScreen}/>
    </Stack.Navigator>

    {/* <FlatList 
      keyExtractor={character.id}
      data={data}
      ListHeaderComponent={
        <Text>Hola</Text>
      }
      renderItem={({character}) => {
        return(
          <RickAndMorthyCard character={character}/>
          )
        }}
        ListFooterComponent={<Text>Pagination</Text>}
        ListEmptyComponent={
          <Text>Empty List</Text>
        }
      /> */}
  </View>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BLACK,
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
  columnContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  characterContainer: {
    width: '48%', // Para que haya dos columnas, ajusta el ancho de los elementos
    borderWidth: 0.5,
    paddingHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
  characterImage: {
    height: 70,
    width: '100%',
    resizeMode: 'cover', // Ajusta la imagen para que se ajuste bien
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  characterInfo: {
    padding: 5,
  },
});
