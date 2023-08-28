import { Text, TouchableOpacity, Alert } from "react-native"

export const StyledTouchable = ({ text, backgroundColor, padding, borderRadius, color, fontSize, bold}) => {
    
    const handlePress = () => {
        Alert.alert('Presionaste el botón');
    }

    const customStyles = {
        fontWeight: bold ? 'bold' : 'normal',
        fontSize: fontSize || 15,
        color: color || 'black',
        backgroundColor: backgroundColor || 'transparent', 
        padding: padding || 0,
        borderRadius: borderRadius || 0,
    }
    
    return(
    <TouchableOpacity style={customStyles} onPress={handlePress}>
        <Text style={customStyles}> { text } </Text>
    </TouchableOpacity>
    )
}