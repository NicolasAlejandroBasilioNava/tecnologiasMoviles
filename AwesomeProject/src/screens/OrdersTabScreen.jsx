import { View, Text }  from 'react-native';
import Constats from 'expo-constants'

export default function OrdersTabScreen(){
    return(
        <View style={{paddingTop: Constats.statusBarHeight}}>
            <Text>Orders</Text>
        </View>
    )
}