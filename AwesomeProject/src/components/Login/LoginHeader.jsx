import { View, Text, StyleSheet} from "react-native";
import { THEME } from "../../theme/colors";

export function LoginHeader(){

    const pricipalText = {

    }

    return(
        <View style={styles.headerContainer}>
            <Text style= {styles.tittleText} >Sign in to your Account </Text>
            <Text style= {styles.secondaryText}> Sign in to your Account </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer:{
        backgroundColor: THEME.COLORS.DARKBLUE,
        justifyContent:'flex-end',
        height: 240,
        paddingBottom: 30,
    },

    tittleText:{
        fontSize: 35,
        color: THEME.COLORS.WHITE,
        paddingTop: 100,
        paddingHorizontal: 20,
        
    },

    secondaryText: {
        fontSize: 15,
        color: THEME.COLORS.WHITE,
        paddingTop: 5,
        paddingHorizontal: 20
    }

})
