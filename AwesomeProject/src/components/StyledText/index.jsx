import { Text } from "react-native"

export const StyledText = ({text, fontSize, color, bold, highlight, letterSpacing, uppercase}) =>{

    const customStyles= {
        fontWeight: bold ? 'bold' : 'normal',
        fontSize: fontSize || 15,
        color: color || 'black',
        backgroundColor: highlight ? 'yellow' : 'transparent', 
        letterSpacing: letterSpacing || 0, 
        textTransform: uppercase ? 'uppercase' : 'none',
    }
    
    return(
        <Text style={customStyles}> { text } </Text>
    )
}
