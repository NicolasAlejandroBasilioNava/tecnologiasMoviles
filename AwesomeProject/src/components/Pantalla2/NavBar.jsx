import { View, Text, StyleSheet } from "react-native";
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { THEME } from "../../theme/colors";

export function NavBar(){
    return(
        <View style={styles.container}>
            <MaterialCommunityIcons name="less-than" size={24} color="white" />
            <Text style={styles.text}> Withdraw Money</Text>
            <AntDesign name="staro" size={24} color="white" />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginVertical: 40,
        alignItems: 'center',
    },
    text:{
        color: THEME.COLORS.WHITE,
        fontSize: 20,
    }
})