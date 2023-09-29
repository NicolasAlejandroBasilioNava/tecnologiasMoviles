import { View, Text, StyleSheet } from "react-native";
import { THEME } from "../theme/colors";


export const CircularButton = ({icon, text, backgroundColor, height=75, width=75}) => (  
    <View style={[styles.container, {backgroundColor, width, height}]}>
        {text ? <Text style={styles.text}>{text}</Text> : null}
        {icon}
    </View>
)

const styles = StyleSheet.create({
    container:{
        height: 75,
        width: 75,
        borderColor: THEME.COLORS.CANARY,
        borderWidth: 0.2,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontSize: 25,
        fontWeight: '400',
    },
})