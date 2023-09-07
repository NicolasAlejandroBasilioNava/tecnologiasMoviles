import { View, Text, StyleSheet } from "react-native";
import { THEME } from "../../../theme/colors";

export default function ExchangeCard(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Exchange</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: THEME.COLORS.ORANGE.LIGHT,
        paddingHorizontal: 20,
        marginHorizontal: 25,
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        height: 50,
        justifyContent: 'center',
    },
    text:{
        color: 'black',
        fontWeight: '400',
    },
})
