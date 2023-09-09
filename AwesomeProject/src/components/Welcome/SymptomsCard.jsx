import { View, Text, StyleSheet } from "react-native";
import { THEME } from "../../theme/colors";

export const SymptomCard =({symptom}) =>(
    <View style={styles.container}>
        <Text style={styles.text}>
            {symptom === 'fever' ? "🤒 Fever" :
            symptom === 'sneeze' ? "🤧 Sneeze" :
            "😉 I'm fine" }
        </Text>
    </View>
)

const styles = StyleSheet.create({
    container:{
        width: 130,
        height: 50,
        backgroundColor: THEME.COLORS.GRAY.LIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15,
        borderRadius: 20,
        marginVertical: 20,
    },
    text:{
        fontSize: 15,
        fontWeight: '400',
    }
})