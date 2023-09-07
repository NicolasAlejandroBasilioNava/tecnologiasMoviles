import { View, Text, StyleSheet } from "react-native";
import { THEME } from "../../theme/colors";
import { Feather } from '@expo/vector-icons';

const WalletAmount = () =>(
    <View style={styles.container}>
        <Text style={styles.amountBigText}>$23,867</Text>
        <Text style={styles.idText}>Wallet id: 2678900085  <Feather name="copy" size={15} color="#feebd0" /></Text>
    </View>
)

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
    },
    amountBigText:{
        color: THEME.COLORS.CREAM,
        fontSize: 60,
    },
    idText:{
        color: THEME.COLORS.CREAM,
        fontSize: 13,
        fontWeight: '300'
    },
})

export default WalletAmount