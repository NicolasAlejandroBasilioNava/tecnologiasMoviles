import { View, Text, StyleSheet } from "react-native"
import { THEME } from "../../../theme/colors";
import { MaterialIcons } from '@expo/vector-icons';
import Amount from "./Amount";

export default function CurrentBalance(){
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.secondaryText}>Current Wallet Balance </Text>
                <Text style={styles.primaryText}>$23,867</Text>
            </View>
            <MaterialIcons name="add-circle" size={55} color="#c96459" />
        </View>
    )
}

const styles = StyleSheet.create({
    backContainer:{
        backgroundColor: THEME.COLORS.WHITE,
        borderRadius: 20,
        height: 585,
        marginHorizontal: 5,
    },
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingTop: 30,
    },
    primaryText:{
        fontSize: 32,
        fontWeight: 'bold',
    },
    secondaryText:{
        fontSize: 17,
        fontWeight: '300',
    },
})