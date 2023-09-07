import { View, StyleSheet } from "react-native";
import { HomeMenuItems } from "./HomeMenuItems";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { THEME } from "../../theme/colors";

export const HomeMenu = () => (
    <View style={styles.menuContainer}>
        <HomeMenuItems text={'Home'} icon={<AntDesign name="home" size={28} color="black" />} />
        <HomeMenuItems text={'Wallet'} icon={<Ionicons name="wallet-outline" size={28} color="black" />} />
        <HomeMenuItems text={'Chart'} icon={<Feather name="pie-chart" size={28} color="black" />} />
        <HomeMenuItems text={'Settings'} icon={<Ionicons name="md-settings-outline" size={28} color="black" />} />
    </View>
)

const styles = StyleSheet.create({
    menuContainer: {
        flexDirection: 'row',
        backgroundColor: THEME.COLORS.WHITE,
        height: 75,
        marginHorizontal: 7,
        borderBottomStartRadius: 30,
        borderBottomEndRadius: 30,
        justifyContent: 'space-evenly',
        gap: 20,
        alignItems: 'center',
    },
})