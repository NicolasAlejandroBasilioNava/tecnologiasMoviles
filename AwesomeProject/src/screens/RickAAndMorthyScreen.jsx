import { View, ScrollView, StyleSheet, Text, Switch, ActivityIndicator} from "react-native";
import { RickAndMorthyCard } from "../components/RickAndMorthyCard";
import { THEME } from "../theme/colors";
import Constats from 'expo-constants'
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { isEnabled } from "react-native/Libraries/Performance/Systrace";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";

export default function RickAndMorthyScreen({ route}){
    const navigation = useNavigation()
    const [inputValue, setInputValue] = useState()

    // useEffect(() => {
    //   navigation.setOptions({
    //     title: 'Home Screen',
    //     headerLargeTitle: true,
    //     headerSearchBarOptions: {
    //       placeholder: 'Search',
    //     }
    //   })
    // }, [navigation])

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData]= useState([])
    const [filteredCharacters, setFilteredCharacters] = useState([])

    const getApiData = async ({page}) =>{
      try{
        const url = `https://rickandmortyapi.com/api/character/?page=${page}`
        console.log(url)
        const response = await fetch(url)
        const data = await response.json()
        setData(data.results)
        setFilteredCharacters(data.results)
        setIsLoading(false)
      }catch(error){
        console.error(error);
      }
    }

    useEffect(() => {
      getApiData({page: 4})
    }, [])

    const filterData = (value) => {
      if(value){
        const filteredData = filteredCharacters.filter()
      }else{
        setFilteredCharacters(data)
      }
    }
    
    return(
        <View style={styles.container}>
          <TextInput 
            value={inputValue}
            onChangeText={ (e) => setInputValue(e)}
            style={styles.input}
          />
          <ScrollView>
            {isLoading ? (
                <Text>Cargando</Text>
            ) : (
                <View style={styles.columnContainer}>
                {filteredCharacters.map((character) => (
                    <RickAndMorthyCard character={character} onPressFuncion={() => navigation.navigate('CharacterDetail', {character: character})}/>
                ))}
                </View>
            )}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: THEME.COLORS.BLACK,
      //paddingTop: Constats.statusBarHeight,
      paddingHorizontal: 20,
    },
    input:{
      borderWidth: 0.5, 
      paddingHorizontal: 10, 
      fontSize: 17, 
      flex: 1,
      borderRadius: 10,
      paddingVertical: 10,
  marginVertical: 10,
  backgroundColor: 'white'     
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