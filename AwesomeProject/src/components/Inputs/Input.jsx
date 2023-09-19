import { TextInput, View, Text, StyleSheet } from "react-native";
import { THEME } from "../../theme/colors";

export const Input = ({placeholder, password}) => (
    <TextInput style={styles.input}
        placeholder={placeholder}
        secureTextEntry= {password ? true : false}
    />
)

const styles = StyleSheet.create({
    input:{
        borderWidth: 0.5, 
        paddingHorizontal: 10, 
        fontSize: 17, 
        flex: 1,
        borderRadius: 10,
    },
})