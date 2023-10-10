import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { THEME } from '../theme/colors';
import useAuthContext from "../hooks/useAuthContext";

export default function WelcomeScreen({navigation}){
    const { handleLogout: onLogout } = useAuthContext()
    const handleLogout = () => {
        onLogout();
        navigation.navigate("Login");
      };
    return(
        <View style={styles.container}>
            <Image style={{width: 280, height: 350, marginTop: 50,}} source={{uri: 'https://cdn.goconqr.com/uploads/media/image/13718766/desktop_53bbf2b8-ef40-45e7-810d-4b48241946a9.png'}}/>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Shopping with best e-comerce store</Text>
                <Text style={styles.subtitleText}>Find best shopping experience with us by your favourite daily needs!</Text>
            </View>
            <TouchableOpacity 
                style={[styles.button, styles.getStarted]}
                onPress={handleLogout}
            >
                <Text style={styles.signInButtonText}>Get Started</Text>
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 40,
        justifyContent: 'center',
        paddingBottom: 40,
        alignItems: 'center',
        paddingTop: 80,
        backgroundColor: THEME.COLORS.WHITE.SOLID,
        flex: 1,
    },
    backIcon:{
        marginVertical: 30,
    },
    titleContainer:{
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText:{
        fontSize: 32,
        fontWeight: '600',
        color: THEME.COLORS.BLACK,
        textAlign: 'center',
    },
    subtitleText:{
        fontSize: 15,
        color: THEME.COLORS.BLACK,
        fontWeight: '200',
        textAlign: 'center',
    },
    button:{
        height: 70,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginTop: 40,
    },
    getStarted:{
        backgroundColor: THEME.COLORS.BLUE.TURKISH,
    },
    signUpButton:{
        backgroundColor: THEME.COLORS.WHITE.SOLID,
        borderWidth: 0.3,
    },
    signInButtonText:{
        color: THEME.COLORS.WHITE.SOLID,
        fontSize: 17,
    },
    signUpButtonText:{
        color: THEME.COLORS.BLACK,
        fontSize: 17,
    },
})