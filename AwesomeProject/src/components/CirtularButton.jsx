import { View, Text, StyleSheet } from "react-native";
import { THEME } from "../theme/colors";
import { TouchableOpacity } from "react-native-gesture-handler";


export const CircularButton = ({icon, text, backgroundColor, height=75, width=75, color, onPress}) => (  
    <TouchableOpacity onPress={onPress || (() => {})}>
        <View style={[styles.container, {backgroundColor, width, height}]}>
            {icon}
            {text ? <Text style={[styles.text, {color}]}>{text}</Text> : null}
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container:{
        height: 75,
        width: 75,
        //borderColor: THEME.COLORS.CANARY,
        borderWidth: 0.1,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontSize: 15,
        fontWeight: 'bold',
    },
})