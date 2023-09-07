import { View, Text, StyleSheet } from "react-native";

export const TransactionInfoCard = ({boldText, text}) =>(
    <View>
        <Text style= {styles.boldText}>{boldText}</Text>
        <Text style= {styles.text}>{text}</Text>
    </View>
)

const styles = StyleSheet.create({
    boldText:{
        fontWeight: 'bold',
        fontSize: 17,    
    },
    text:{
        fontSize: 15,
    }
})