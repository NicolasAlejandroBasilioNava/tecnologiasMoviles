import { View, Text, StyleSheet } from "react-native";
import { CircularButton } from "../buttons/CircularButton";
import { THEME } from "../../theme/colors";

export const WelcomeCard = ({isDarkBlue, icon, text}) =>(
    <View style={[styles.cardContainer, 
                isDarkBlue ? styles.cardContainerDark : styles.cardContainerLight
                ]}>
        <CircularButton 
            icon={icon} 
            backgroundColor={isDarkBlue ? THEME.COLORS.WHITE.SOLID : THEME.COLORS.BLUE.DARK}
            height={50} width={50}
        />
        <Text style={[!isDarkBlue ? styles.cardTextLight: styles.cardText]}>{text}</Text>
    </View>
)

const styles = StyleSheet.create({
    cardContainer:{
        height: 160,
        width: 160,
        borderRadius: 40,
        paddingHorizontal: 30,
        justifyContent: 'center',
        gap: 30,
        paddingVertical: 40,
        marginHorizontal: 10,
        marginVertical: 20,
    },
    cardContainerLight:{
        backgroundColor: THEME.COLORS.GRAY.LIGHT,
    },
    cardContainerDark:{
        backgroundColor: THEME.COLORS.BLUE.DARK,
    },
    cardText:{
        fontSize: 15,
        color: THEME.COLORS.WHITE,
        fontWeight: '800',
    },
    cardTextLight:{
        fontSize: 15,
        color: THEME.COLORS.BLACK,
        fontWeight: '800',
    },


})