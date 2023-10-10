import { View, Text }  from 'react-native';
import Constats from 'expo-constants'


export default function ProfileTabScreen(){
    return(
        <View style={{paddingTop: Constats.statusBarHeight}}>
            <Text>Profile</Text>
        </View>
    )
}