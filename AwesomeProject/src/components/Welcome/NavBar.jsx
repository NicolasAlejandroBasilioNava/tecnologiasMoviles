import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { THEME } from "../../theme/colors";
import { CircularButton } from "../buttons/CircularButton";

export function NavBar(){
    return(
        <View style={styles.container}>
            <View>
                <Text style={[styles.text, styles.boldText]}>Discover</Text>
                <Text style={styles.text}>your products</Text>
            </View>
            <CircularButton height={50} width={50} icon={<Ionicons name="person" size={24} color="black" />}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30,
        marginVertical: 40,
        alignItems: 'center',
    },
    text:{
        fontSize: 30,
    },
    boldText: {
        fontWeight: 'bold',
    }
})