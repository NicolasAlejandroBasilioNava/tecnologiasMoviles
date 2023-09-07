import { View, Text, StyleSheet } from "react-native";
import { THEME } from "../../theme/colors";
import { CircularButton } from "../buttons/CircularButton";
import { Ionicons } from '@expo/vector-icons';

export function WalletBar(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}> Wallet</Text>
            <View style={styles.iconContainer}>
                <CircularButton height={50} width={50} backgroundColor={THEME.COLORS.CREAM} icon={<Ionicons name="notifications-outline" size={24} color="black" />}/>
                <CircularButton height={50} width={50} backgroundColor={THEME.COLORS.CREAM} icon={<Ionicons name="person-outline" size={24} color="black" />}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginVertical: 40,
        alignItems: 'center',
    },
    text:{
        color: THEME.COLORS.WHITE,
        fontSize: 25,
        fontWeight: 'bold'
    },
    iconContainer:{
        flexDirection: 'row',
        gap: 7,
    }
})