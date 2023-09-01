import { FlatList, Text, View, Image, StyleSheet} from "react-native"
import { THEME } from "../../theme/colors"

export const Card = ({name, lastName, uri}) =>(
    <View style= {styles.card}>
        <Image style={styles.image}  source={{ uri: uri }} />

        <View>
            <Text style={styles.text}>Nombre: {name}</Text>
            <Text style={styles.text}>Apellido: {lastName}</Text>
        </View>
        
    </View>
)

const styles = StyleSheet.create({
    card:{
        flexDirection: 'row',
        minheight: 100,
        width: 270,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        //marginVertical: 15,
        backgroundColor: THEME.COLORS.BLUE
    },
    text:{
        fontSize: 22, 
        color: THEME.COLORS.GRAY,
        maxWidth: 200,
    },
    image:{
        width: 100,
        height: 100,
    }
})