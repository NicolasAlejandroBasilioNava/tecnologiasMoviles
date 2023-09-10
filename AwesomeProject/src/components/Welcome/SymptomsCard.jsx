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
        height: 40,
        backgroundColor: THEME.COLORS.GRAY.LIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 4,
        borderRadius: 15,
        marginVertical: 20,
    },
    text:{
        fontSize: 15,
        fontWeight: '400',
    }
})