import { View, Text , StyleSheet, Image} from "react-native";
import React, { useState, useEffect } from 'react';
import { THEME } from "../theme/colors";

export default function RickAndMorthyInfoScreen({navigation, route}){
    const {character} = route.params
    const [isLoading, setIsLoading] = useState(true);
    const [locationData, setLocationData]= useState()
    const [originData, setOriginData]= useState()

    const getApiData = async () =>{
        try{
          const locationUrl = character.location.url
          const originUrl = character.origin.url
          if (locationUrl){
              const response = await fetch(locationUrl)
              const data = await response.json()
              setLocationData(data)
              setIsLoading(false)
             //console.log(locationData)
            }
          if (originUrl){
            const response = await fetch(originUrl)
              const data = await response.json()
              setOriginData(data)
              setIsLoading(false)
              console.log(originData)
          }
        }catch(error){
          console.error(error);
        }
      }

    useEffect(() => {
        getApiData()
      }, [])

    return (
        <View style={styles.container}>
        {isLoading ? <Text> Cargando</Text> :
          <View style={styles.container}>
          <Image style={styles.characterImage} source={{ uri: character.image }} />
          <Text style={styles.characterName}>{character.name}</Text>
          <Text style= {styles.characterInfo}>Status: {character.status ? character.status : 'No set'}</Text>
          <Text style= {styles.characterInfo}>Species: {character.species ? character.species : 'No set'}</Text>
          <Text style= {styles.characterInfo}>Type: {character.type ? character.type : 'No set'}</Text>
          <Text style= {styles.characterInfo}>Gender: {character.gender ? character.gender : 'No set'}</Text>
          {originData ? 
            <View style={styles.cardContainer}>
            <Text style={styles.title}>Origin Information</Text>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Name:</Text>
                <Text style={styles.value}>{originData.name ? originData.name : 'No set'}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Type:</Text>
                <Text style={styles.value}>{originData.type ? originData.type : 'No set'}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Dimension:</Text>
                <Text style={styles.value}>{originData.dimension ? originData.dimension : 'No set'}</Text>
            </View>
          </View>  
            : 
          <View style={styles.cardContainer}>
            <Text style={styles.title}>Origin Information</Text>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Unknown</Text>
            </View>
          </View> 
            }
          
          {locationData ?
          <View style={styles.cardContainer}>
          <Text style={styles.title}>Location Information</Text>
          <View style={styles.infoContainer}>
              <Text style={styles.label}>Name:</Text>
              <Text style={styles.value}>{locationData.name ? locationData.name : 'No set'}</Text>
          </View>
          <View style={styles.infoContainer}>
              <Text style={styles.label}>Type:</Text>
              <Text style={styles.value}>{locationData.type ? locationData.type : 'No set'}</Text>
          </View>
          <View style={styles.infoContainer}>
              <Text style={styles.label}>Dimension:</Text>
              <Text style={styles.value}>{locationData.dimension ? locationData.dimension : 'No set'}</Text>
          </View>
        </View>
            :
          <View style={styles.cardContainer}>
            <Text style={styles.title}>Location Information</Text>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Unknown</Text>
            </View>
          </View> 
            }

          </View>
        } 
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      padding: 10,
      alignItems: 'center',
      backgroundColor: THEME.COLORS.BLACK,
      flex: 1,
    },
    characterImage: {
      width: 150,
      height: 150,
      borderRadius: 75, // Para hacer la imagen circular
    },
    characterName: {
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 10,
      color: THEME.COLORS.WHITE.SOLID,
    },
    characterInfo:{
      color: THEME.COLORS.GRAY.LIGHT,
    },
    cardText:{
      color: THEME.COLORS.CREAM
    },
    cardContainer: {
        backgroundColor: THEME.COLORS.GRAY.DARK,
        borderRadius: 10,
        elevation: 3,
        padding: 20,
        margin: 10,
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: THEME.COLORS.WHITE.SOLID,
      },
      infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
      },
      label: {
        fontWeight: 'bold',
        color: THEME.COLORS.WHITE.SOLID,
      },
      value: {
        flex: 1,
        marginLeft: 5,
        color: THEME.COLORS.CREAM
      },
  });