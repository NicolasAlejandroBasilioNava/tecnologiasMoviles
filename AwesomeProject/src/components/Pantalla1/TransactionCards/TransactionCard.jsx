import { View, StyleSheet } from "react-native";
import { CircularButton } from "../../buttons/CircularButton";
import { TransactionInfoCard } from "./TransactionInfoCard";

export const TransactionCard = ({
    type, 
    statisctics, 
    transactionValue,
    transactionValueConvertion,
    backgroundColor,
    icon
}) =>(
    <View style={styles.container}>
        <View style={styles.row}>
            <CircularButton icon={icon} backgroundColor={backgroundColor} height={50} width={50}/>
            <TransactionInfoCard boldText={type} text={statisctics}/>
        </View>
        <View>
            <TransactionInfoCard boldText={transactionValue} text={transactionValueConvertion}/>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 10,
    },
    row:{
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    }
})