import { TouchableOpacity, StyleSheet } from "react-native";

export const IconButton = ({ icon, onPressFunction}) => (
    <TouchableOpacity onPress={() => onPressFunction()}>
        {icon}
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    button: {
        
    }
})