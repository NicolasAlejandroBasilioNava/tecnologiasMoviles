import { View, Text, StyleSheet } from "react-native";
import { THEME } from "../../theme/colors";
import TransactionList from "./TransactionCards/TransactionList";

export const AssetsTransactions = () => (
    <View style={styles.container}>
       <View style={styles.textContainer}>
            <Text style={styles.text}>My Assets</Text> 
            <Text style={styles.text}>My Transaction</Text>
       </View>
        <TransactionList />
    </View>
)

const styles = StyleSheet.create({
    container:{
        backgroundColor: THEME.COLORS.WHITE,
        marginHorizontal: 7,
        height: 300,
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
    },
    textContainer:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    text:{
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 15,
    },
})
