import { View, ScrollView, StyleSheet, Text, Switch, ActivityIndicator} from "react-native";
import { RickAndMorthyCard } from "../components/RickAndMorthyCard";
import { THEME } from "../theme/colors";
import Constats from 'expo-constants'
import React, { useState, useEffect } from 'react';
import { isEnabled } from "react-native/Libraries/Performance/Systrace";

export default function RickAndMorthyScreen({navigation, route}){
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData]= useState([])
    const [isEnabled, setIsEnabled]= useState()

   const toggleSwitch = () => setIsEnabled(previousState => !previousState);
   const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    const getApiData = async ({page}) =>{
      try{
        const url = `https://rickandmortyapi.com/api/character/?page=${page}`
        
        const response = await fetch(url)
        const data = await response.json()
        setData(data.results)
        await delay(5000);
        setIsLoading(false)
        
      }catch(error){
        console.error(error);
      }
    }

    useEffect(() => {
       getApiData({page: 4})
    }, [])
    
    return(
        <View style={styles.container}>
            <ScrollView>
            {isLoading ? (
                <ActivityIndicator size="large" />
            ) : (
                <View style={styles.columnContainer}>
                {data.map((character) => (
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