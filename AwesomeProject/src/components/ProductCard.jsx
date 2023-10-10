import { View, Text, Image, StyleSheet } from 'react-native'
import { THEME } from '../theme/colors'

export const ProductCard = ({productName, cost, image}) => {
    return(
        <View style={styles.container}>
            <Image style={{height: 200, width: 200}} source={{uri: image}}/>
            <Text style={styles.nameText}>{productName}</Text>
            <Text style={styles.costText}>${cost}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderWidth: 1.5,
        borderColor: THEME.COLORS.BLUE.TURKISH,
        borderRadius: 20,
        backgroundColor: THEME.COLORS.WHITE.OSTION,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        
    },
    nameText:{
        fontSize: 21,
        fontWeight: 'bold',
    },
    costText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: THEME.COLORS.BLUE.TURKISH,
        marginBottom: 15,
    }
})