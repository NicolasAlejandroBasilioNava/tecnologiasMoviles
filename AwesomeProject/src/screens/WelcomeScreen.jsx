import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { THEME } from '../theme/colors';

export default function WelcomeScreen(){
    return(
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Welcome!</Text>
                <Text style={styles.subtitleText}>Sign in or create a new account</Text>
            </View>
            <Image style={{width: 300, height: 350}} source={{uri: 'https://th.bing.com/th/id/OIP.38IJXXXsWGd6GIlXI4tlcwHaKe?pid=ImgDet&rs=1'}}/>
            <TouchableOpacity style={[styles.button, styles.signInButton]}>
                <Text style={styles.signInButtonText}>Go to Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.signUpButton]}>
                <Text style={styles.signUpButtonText}>No account yet? 
                    <Text style={{color: THEME.COLORS.ORANGE.MID}}> Sign UP</Text>
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 40,
        justifyContent: 'center',
        marginBottom: 40,
        alignItems: 'center',
        marginTop: 80,
    },
    backIcon:{
        marginVertical: 30,
    },
    titleContainer:{
        marginBottom: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText:{
        fontSize: 35,
        width: 160,
        fontWeight: '600',
    },
    subtitleText:{
        fontSize: 15,
        color: THEME.COLORS.GRAY.MID,
        fontWeight: '400',
    },
    button:{
        height: 45,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginVertical: 10,
    },
    signInButton:{
        backgroundColor: THEME.COLORS.ORANGE.MID,
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