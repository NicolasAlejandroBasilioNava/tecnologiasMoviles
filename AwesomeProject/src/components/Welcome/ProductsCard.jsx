import { View, Text, StyleSheet, Image } from "react-native";
import { THEME } from "../../theme/colors";
import { FontAwesome5 } from '@expo/vector-icons';

export const ProductCard = ({ productType, productName, price, image }) => (
    <View style={styles.cardContainer}>
        <Image style={styles.imageContainer} source={{uri: image}}/>
        <View style={styles.infoContainer}>
            <Text style={styles.filterText}>{productType}</Text>
            <Text style={styles.boldText}>{productName}</Text>
        </View>
        <View style={styles.priceContainer}>
            <FontAwesome5 name="bitcoin" size={24} color="black" />
            <Text style={styles.boldText}>{price}</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    cardContainer:{
        backgroundColor: THEME.COLORS.GRAY.DEEP,
        height: 270,
        width: 150,
        borderRadius: 10,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    imageContainer:{
        width: 150,
        height: 150,
    },
    infoContainer:{
        marginVertical: 10,
        marginHorizontal: 10,
    },
    filterText:{

    },
    boldText: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginHorizontal: 10,
    }
})