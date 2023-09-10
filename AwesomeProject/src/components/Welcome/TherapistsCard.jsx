import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { THEME } from "../../theme/colors";

export const TherapistsCard = ({name, therapistType, rate, icon}) =>(
    <View style={styles.cardContainer}>
        <View style={styles.iconContainer}>
            {icon}
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.grayText}>{therapistType}</Text>
        </View>
        <View style={styles.starContainer}>
            <AntDesign name={rate>4 ? 'star' : 'staro'} size={24} color="black" />
            <Text style={styles.grayText}>{rate.toFixed(1)}</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    cardContainer:{
        flexDirection: 'row',
        backgroundColor: THEME.COLORS.WHITE.MID,
        justifyContent: 'space-evenly',
        marginVertical: 15,
    },
    iconContainer:{
        width: 60,
    },
    textContainer:{
        alignSelf: 'flex-start',
        width: 150,
    },
    nameText:{
        fontSize: 18,
        fontWeight: '600',
    },
    grayText:{
        color: THEME.COLORS.GRAY.MID,
        fontWeight: '400',
    },
    starContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    }
})