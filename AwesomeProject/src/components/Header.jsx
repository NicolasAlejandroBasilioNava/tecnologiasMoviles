import { View, Text } from "react-native";

export const Header = () => {
    return(
        <View style={{backgroundColor: 'red', height: 30}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>This is my header</Text>
        </View>
    )
}