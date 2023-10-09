import { View, Text, StyleSheet } from "react-native";
import Constats from 'expo-constants'
import { THEME } from "../theme/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ButtonMatrix } from "../components/ButtonMatrix";
import { CircularButton } from "../components/CirtularButton";
import { Ionicons } from '@expo/vector-icons';
import { useAppContext } from "../context/AppContext";

export default function SendAmountScreen(){
    const {isDarkMode} = useAppContext()

    const styles= isDarkMode ? darkTheme : lightTheme
    return(
        <View style={styles.container}>
            <View>
                <View style={styles.masterCard}>
                    <CircularButton icon={<Ionicons name="person-circle" size={75} color={styles.iconColor.primaryColor} />}/>
                    <CircularButton style={styles.mastercard2} backgroundColor={styles.iconColor.backgroundColor} icon={<Ionicons name="wallet-outline" size={40} color={styles.iconColor.secondaryColor}/>}/>
                </View>
                <View style={{marginTop: 10, marginBottom: 30,}}>
                    <Text style= {styles.ownerName}>Benjamin Parker</Text>
                    <Text style= {styles.cardInfo}>**** 3294</Text>
                </View>
            </View>
            <Text style={styles.amount}>$340.00</Text>

            <ButtonMatrix />

            <TouchableOpacity style={styles.sendButtonStyle}>
                <Text style={styles.sendButtonTextStyle}>Send</Text>
            </TouchableOpacity>
        </View>
    )
}

const darkTheme = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.COLORS.BLACK,
        paddingTop: Constats.statusBarHeight,
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    masterCard:{
        flexDirection: 'row',
        position: 'relative',
        alignItems: 'center',
    },
    masterCard2:{
        position: 'absolute',
        top: 25, // Ajusta la posición según tus necesidades
        left: 25, // Ajusta la posición según tus necesidades
        zIndex: 1, // Controla el orden de apilamiento (mayor valor encima de menor)
    },
    iconColor: {
        primaryColor: THEME.COLORS.WHITE.SOLID,
        secondaryColor: THEME.COLORS.BLACK,
        backgroundColor: THEME.COLORS.GREENYELLOW,
    },
    ownerName: {
        color: THEME.COLORS.WHITE.SOLID,
        fontSize: 20,
        fontWeight: '400',
        textAlign: 'center',
    },
    cardInfo:{
        color: THEME.COLORS.WHITE.SOLID,
        fontSize: 20,
        fontWeight: '200',
        textAlign: 'center',
    },
    amount:{
        color: THEME.COLORS.WHITE.SOLID,
        fontSize: 50,
        fontWeight: '400',
        textAlign: 'center',
        marginBottom: 30,
    },
    sendButtonStyle: {
        marginHorizontal: 10,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 30,
        width: 300,
        backgroundColor: THEME.COLORS.GREENYELLOW, 
    },
    sendButtonTextStyle:{
        color: THEME.COLORS.BLACK,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})

const lightTheme = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.COLORS.WHITE.OSTION, // Cambiado a fondo blanco
        paddingTop: Constats.statusBarHeight,
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    masterCard: {
        flexDirection: 'row',
        
    },

    iconColor: {
        primaryColor: THEME.COLORS.DARKBLUE, // Cambiado a color oscuro
        secondaryColor: THEME.COLORS.WHITE.SOLID, // Cambiado a blanco
        backgroundColor: THEME.COLORS.GREENYELLOW, 
    },
    ownerName: {
        color: THEME.COLORS.DARKBLUE, // Cambiado a color oscuro
        fontSize: 20,
        fontWeight: '400',
        textAlign: 'center',
    },
    cardInfo: {
        color: THEME.COLORS.DARKBLUE, // Cambiado a color oscuro
        fontSize: 20,
        fontWeight: '200',
        textAlign: 'center',
    },
    amount: {
        color: THEME.COLORS.DARKBLUE, // Cambiado a color oscuro
        fontSize: 50,
        fontWeight: '400',
        textAlign: 'center',
        marginBottom: 30,
    },
    sendButtonStyle: {
        marginHorizontal: 10,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 30,
        width: 300,
        backgroundColor: THEME.COLORS.GREENYELLOW, 
    },
    sendButtonTextStyle: {
        color: THEME.COLORS.BLACK, // Cambiado a negro
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})
