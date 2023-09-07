import { View, Text, StyleSheet } from "react-native";

export const WelcomeCard = ({isDarkBlue ,icon, text}) =>(
    <View style={[styles.cardContainer, 
                isDarkBlue ? styles.cardContainerDark : styles.cardContainerLight
                ]}>
        {icon}
        <Text style={[!isDarkBlue ? styles.cardTextLight: styles.cardText]}>{text}</Text>
    </View>
)

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 15,
        marginTop: 10,
    },
    headerContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    titleText:{
        fontSize: 30,
        fontWeight: 'bold',
    },
    cardContainer:{
        height: 200,
        width: 200,
        borderRadius: 40,
        paddingHorizontal: 30,
        justifyContent: 'center',
        gap: 70,
    },
    cardContainerLight:{
        backgroundColor: '#8ee5ec',
    },
    cardContainerDark:{
        backgroundColor: '#282828',
    },
    cardText:{
        fontSize: 20,
        color: 'white',
    },
    cardTextLight:{
        fontSize: 20,
        color: 'gray',
    }

})