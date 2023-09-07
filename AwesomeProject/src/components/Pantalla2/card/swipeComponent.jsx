import { View, Text, StyleSheet } from "react-native";
import { CircularButton } from "../../buttons/CircularButton";
import { AntDesign } from '@expo/vector-icons';
import { THEME } from "../../../theme/colors";

export const SwipeComponent = () => (
    <View style={styles.container}>
        <View style={styles.circularButtom}>
            <CircularButton backgroundColor={THEME.COLORS.WHITE} icon={<AntDesign name="arrowright" size={24} color="#d76741" />}/>
        </View>
        <Text style={styles.text}>Swipe to Withdraw</Text>
    </View>
)

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor: THEME.COLORS.ORANGE.SOLID,
        borderWidth: 1,
        marginHorizontal: 25,
        borderRadius: 40,
        marginVertical: 15,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingVertical: 4,
    },
    text:{
        color: THEME.COLORS.WHITE,
        paddingLeft: 30,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    circularButtom:{
        paddingLeft: 4,
    }
})