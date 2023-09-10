import { View, Text, StyleSheet } from "react-native";

export const HomeMenuItems = ({icon, text}) =>(
    <View style={styles.icon}>
        {icon}
        {/* <Text style={styles.text}>{text}</Text> */}
    </View>
)

const styles = StyleSheet.create({
    icon:{
        alignItems: 'center',
    },
    text:{
        fontWeight: '400'
    }
})