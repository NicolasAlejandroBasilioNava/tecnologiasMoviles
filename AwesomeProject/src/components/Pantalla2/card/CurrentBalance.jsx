import { View, Text, StyleSheet } from "react-native"
import { THEME } from "../../../theme/colors";
import { MaterialIcons } from '@expo/vector-icons';

export default function CurrentBalance(){
    return(
        <View style={styles.container}>
           <View>
                <Text style={styles.secondaryText}> Current Wallet Balance </Text>
                <Text style={styles.primaryText}> $23,867</Text>
           </View>
            <MaterialIcons name="add-circle" size={55} color="black" />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: THEME.COLORS.WHITE,
        borderRadius: 20,
        height: 585,
        marginHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingTop: 30,
    },
    primaryText:{
        fontSize: 32,
        fontWeight: 'bold',
    },
    secondaryText:{
        fontSize: 17,
        fontWeight: '300',
    },
})