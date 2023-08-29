import { View, Text, StyleSheet} from "react-native";

export function LoginHeader(){

    const pricipalText = {

    }

    return(
        <View style={styles.headerContainer}>
            <Text style= {styles.tittleText} > Sign in to your Account </Text>
            <Text style= {styles.secondaryText}> Sign in to your Account </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer:{
        backgroundColor: '#152534',
        //alignSelf: 'start',
        justifyContent:'left',
        height: 250,
    },

    tittleText:{
        fontSize: 35,
        color: 'white',
        paddingTop: 150,
        paddingHorizontal: 50
        
    },

    secondaryText: {
        fontSize: 15,
        color: 'white',
        paddingTop: 5,
        paddingHorizontal: 60
    }

})
