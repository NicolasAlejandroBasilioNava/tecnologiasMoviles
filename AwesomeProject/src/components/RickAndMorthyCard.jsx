import { View, Image, Text, StyleSheet } from "react-native"
import { THEME } from "../theme/colors";
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";

export const RickAndMorthyCard = ({character, onPressFuncion}) => (
    <View style={styles.characterContainer} key={character.id}>
        <TouchableOpacity onPress={onPressFuncion}>
        <Image style={styles.characterImage} source={{ uri: character.image }} />
        <View style={styles.characterInfo}>
            <Text style={styles.title}>{character.name ? character.name : ''} </Text>
            <View style={styles.statusContainer}>
                <FontAwesome name="circle" size={12} 
                    color={character.status === 'Alive' ? 'green' : character.status === 'Dead'? 'red' : 'gray'} />
                <Text style={styles.characterStatus}>{character.status ? character.status : ''} - </Text>
                <Text style={styles.characterStatus}>{character.species}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.subtitle}>Last known location: </Text>
                <Text style={styles.info}>{character.location.name}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.subtitle}>First seen in: </Text>
                <Text style={styles.info}>{character.origin.name}</Text>
            </View>
        </View>
    </TouchableOpacity>
    </View>
)

const styles = StyleSheet.create({
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
      backgroundColor: THEME.COLORS.GRAY.DARK,
    },
    characterImage: {
      height: 100,
      width: '100%',
      resizeMode: 'cover', // Ajusta la imagen para que se ajuste bien
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    characterInfo: {
      padding: 5,
    },
    title:{
        fontSize: 18,
        color: THEME.COLORS.WHITE.SOLID,
        fontWeight: 'bold',
    },
    statusContainer:{
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center',
        gap: 5,
        flexWrap: "wrap"
    },
    characterStatus:{
        color: THEME.COLORS.WHITE.SOLID,
        fontSize: 10,
    },
    subtitle:{
        color: THEME.COLORS.WHITE.SOLID,
        fontWeight: '200',
        fontSize: 12,
    },
    infoContainer: {
        marginVertical: 5,
    },
    info:{
        color: THEME.COLORS.WHITE.SOLID,
        fontSize: 13,
    },
  });