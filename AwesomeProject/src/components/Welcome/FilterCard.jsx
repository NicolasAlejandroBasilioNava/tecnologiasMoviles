import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { THEME } from "../../theme/colors";

export const FilterCard= ({filterName}) => (
    <View style={styles.container}>
        <Text>{filterName}</Text>
        <MaterialIcons name="delete-outline" size={24} color="black" />
    </View>
)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: THEME.COLORS.WHITE.SOLID,
        marginVertical: 30,
        marginHorizontal: 10,
        height: 45,
        width: 80,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 10,
    }
})