import { TextInput, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { THEME } from "../theme/colors";

export const ItemButton = ({onPressFunction, text, icon}) => (
    <TouchableOpacity onPress={onPressFunction} style={styles.button}>
          {text ? <Text style={{color: THEME.COLORS.GREEN.SOLID}}>{text}</Text> : null}
          {icon}
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    button:{
        //borderWidth: 0.5,
        width: 80,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: THEME.COLORS.GREEN.PISTACHO
    }

})