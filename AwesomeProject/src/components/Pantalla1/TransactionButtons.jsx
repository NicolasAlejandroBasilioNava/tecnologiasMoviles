import { View, StyleSheet } from "react-native";
import { CircularButton } from "../buttons/CircularButton";
import { Feather } from '@expo/vector-icons';
import { THEME } from "../../theme/colors";
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

const TransactionButtons = () =>(
    <View style= {styles.container}>
        <CircularButton backgroundColor={THEME.COLORS.CANARY} icon={<Feather name="arrow-down-left" size={24} color="black" />}/>
        <CircularButton backgroundColor={THEME.COLORS.CANARY} icon={<Feather name="arrow-up-right" size={24} color="black" />}/>
        <CircularButton backgroundColor={THEME.COLORS.CANARY} icon={<Octicons name="arrow-switch" size={24} color="black" />}/>
        <CircularButton backgroundColor={THEME.COLORS.CANARY} icon={<MaterialIcons name="add" size={24} color="black" />}/>
    </View>
)

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        marginVertical: 30,
    }
})

export default TransactionButtons