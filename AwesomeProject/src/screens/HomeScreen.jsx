import { View, Text, Button } from "react-native"

const HomeScreen = ({navigation}) => (
    <View>
        <Text>
            Home Screen
        </Text>
        <Button title="Go to the Login Page" onPress={() => navigation.navigate('Login', {name: 'Nico'})}/>
    </View>
)

export default HomeScreen