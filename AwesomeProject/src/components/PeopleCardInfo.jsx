import { View, Text, StyleSheet } from "react-native"
import { Entypo } from '@expo/vector-icons';
import { THEME } from "../theme/colors";

export const PeopleCardInfo = ({name, cardNumber, icon}) => {
    const styles = darkTheme
    return(
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 10,}}>
            <View style={{flexDirection: 'row', gap: 10}}>
                {icon}
                <View>
                    <Text style={styles.text}>{name}</Text>
                    <Text style={styles.text}>****{cardNumber}</Text>
                </View>
            </View>
            <Entypo name="dots-three-vertical" size={24} color={styles.text.color} />
        </View>
    )
}

const darkTheme = StyleSheet.create({
    text:{
      color: THEME.COLORS.WHITE.SOLID, 
    },
})