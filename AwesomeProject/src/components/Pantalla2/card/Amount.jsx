import { View, Text, StyleSheet } from "react-native";
import { THEME } from "../../../theme/colors";

export default function Amount(){
    return(
        <View style={styles.container}>
            <Text style={styles.label}>Withdraw Amount</Text>
            <Text style={styles.amount}>$19,29.00</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        marginVertical: 30,
        paddingTop: 20,
        borderTopWidth: 1,
        borderColor: THEME.COLORS.ORANGE.LIGHT
    },
    label:{
        fontWeight: '300',
    },
    amount:{
        fontSize: 35,
        color: THEME.COLORS.ORANGE.SOLID,
        fontWeight: 'bold',
    }
})