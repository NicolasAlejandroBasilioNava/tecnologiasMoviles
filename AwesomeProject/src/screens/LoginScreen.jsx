import { View, Text } from "react-native"

export const LoginScreen = ({navigation, route}) => {
    const {name} = route.params

    return(
        <View>
        <Text>
            Welcome {name}
        </Text>
    </View>
    )

}