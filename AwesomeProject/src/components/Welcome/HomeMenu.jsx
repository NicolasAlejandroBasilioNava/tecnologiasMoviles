import { View, StyleSheet } from "react-native";
import { HomeMenuItems } from "./HomeMenuItems";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { THEME } from "../../theme/colors";

export const HomeMenu = () => (
    <View style={styles.menuContainer}>
        <HomeMenuItems icon={<AntDesign name="home" size={28} color="black" />} />
        <HomeMenuItems icon={<Ionicons name="chatbox-ellipses-outline" size={28} color="black" />} />
        <HomeMenuItems icon={<AntDesign name="calendar" size={28} color="black" />} />
        <HomeMenuItems icon={<MaterialIcons name="portrait" size={28} color="black" />} />
    </View>
)

const styles = StyleSheet.create({
    menuContainer: {
        flexDirection: 'row',
        backgroundColor: THEME.COLORS.WHITE.MID,
        height: 60,
        marginHorizontal: 7,
        borderRadius: 20,
        justifyContent: 'space-evenly',
        gap: 20,
        alignItems: 'center',
    },
})