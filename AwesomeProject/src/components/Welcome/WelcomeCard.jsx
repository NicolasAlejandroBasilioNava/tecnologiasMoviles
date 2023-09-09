import { View, Text, StyleSheet } from "react-native";
import { CircularButton } from "../buttons/CircularButton";
import { THEME } from "../../theme/colors";

export const WelcomeCard = ({isDarkBlue ,icon, text}) =>(
    <View style={[styles.cardContainer, 
                isDarkBlue ? styles.cardContainerDark : styles.cardContainerLight
                ]}>
        <CircularButton 
            icon={icon} 
            backgroundColor={isDarkBlue ? THEME.COLORS.WHITE : THEME.COLORS.BLUE.DARK}
            height={60} width={60}
        />
        <Text style={[!isDarkBlue ? styles.cardTextLight: styles.cardText]}>{text}</Text>
    </View>
)

const styles = StyleSheet.create({
    cardContainer:{
        height: 200,
        width: 200,
        borderRadius: 40,
        paddingHorizontal: 30,
        justifyContent: 'center',
        gap: 70,
        marginHorizontal: 10,
        marginVertical: 30,
    },
    cardContainerLight:{
        backgroundColor: THEME.COLORS.GRAY.LIGHT,
    },
    cardContainerDark:{
        backgroundColor: THEME.COLORS.BLUE.DARK,
    },
    cardText:{
        fontSize: 20,
        color: THEME.COLORS.WHITE,
        fontWeight: '500',
    },
    cardTextLight:{
        fontSize: 20,
        color: THEME.COLORS.BLACK,
        fontWeight: '500',
    },


})