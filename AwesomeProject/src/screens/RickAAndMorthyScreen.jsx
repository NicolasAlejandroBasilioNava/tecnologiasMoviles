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
    }, [])
    
    return(
        <View style={styles.container}>
          <View style={{backgroundColor: THEME.COLORS.GRAY.LIGHT, marginHorizontal: 50, flexDirection: 'row', alignItems: 'center'}}>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={{transform: [{scaleX: 0.8}, {scaleY: 1.4}]}}
            />
            {isEnabled ? <Text>Hola, esta el switch activo</Text> : <ActivityIndicator size="large" />}
          </View>

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