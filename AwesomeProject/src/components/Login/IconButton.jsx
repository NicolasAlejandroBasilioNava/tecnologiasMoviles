import {Text, Image, TouchableOpacity, View, StyleSheet } from "react-native"
import { FacebookImage, googleImage } from "../../../assets";
import { THEME } from "../../theme/colors";

export const IconButton = ({text, source}) => {
    
    return(
        
        <TouchableOpacity style= {styles.iconButton}>
            <Image style={styles.image} source={source}/>
            <Text >{text}</Text>
        </TouchableOpacity>    
        
    )
}

const styles = StyleSheet.create({
    iconButton:{
        width:130,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        borderWidth: 2,
        borderColor: THEME.COLORS.GRAY,
        
    },

    image: {
        height: 20,
        width: 20,
        marginRight: 10
    },
})
