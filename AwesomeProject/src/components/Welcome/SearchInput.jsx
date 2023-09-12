import { TextInput, View, StyleSheet } from "react-native";
import { THEME } from "../../theme/colors";
import { Feather } from '@expo/vector-icons';

export const SearchInput=() => (
    <View style={styles.container}>
        <Feather name="search" size={24} color="gray" />
        <TextInput style={styles.textInput} placeholder="Divoom"/>
    </View>
)

const styles = StyleSheet.create({
    container:{
        height: 60,
        width: '70%',
        borderWidth: 1,
        backgroundColor: THEME.COLORS.WHITE.SOLID,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems:'center',
        gap: 10,
        paddingHorizontal: 7,
    },
    textInput:{
        width: '80%',
        fontWeight: 'bold',
        fontSize: 23,
        color: THEME.COLORS.BLACK
    },
})