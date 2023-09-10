import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { THEME } from "../../theme/colors";
import { CircularButton } from "../buttons/CircularButton";

export function NavBar(){
    return(
        <View style={styles.container}>
            <Ionicons name="notifications-outline" size={24} color= 'blue'/>
            <CircularButton height={50} width={50} icon={<Ionicons name="person" size={24} color="black" />}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 20,
        alignItems: 'center',
    },
})