import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { THEME } from '../theme/colors';

export default function WelcomeScreen({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Play and Win!</Text>
                <Text style={styles.subtitleText}>Game for anyone whi likes to try luck at guessing numbers.</Text>
            </View>
            <Image style={{width: 300, height: 350}} source={{uri: 'https://th.bing.com/th/id/OIP.zjEnUlwgnWFdtIyqdnPRsAHaHa?pid=ImgDet&rs=1'}}/>
            <TouchableOpacity 
                style={[styles.button, styles.getStarted]}
                onPress={() => navigation.navigate('Ticket')}
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
        backgroundColor: THEME.COLORS.GREEN.LIGHT,
        flex: 1,
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
        fontWeight: '600',
        color: THEME.COLORS.WHITE.SOLID,
    },
    subtitleText:{
        fontSize: 15,
        color: THEME.COLORS.WHITE.SOLID,
        fontWeight: '200',
        textAlign: 'center',
    },
    button:{
        height: 70,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 35,
        marginTop: 80,
    },
    getStarted:{
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