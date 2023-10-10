import { View, Text } from 'react-native';
import Constats from 'expo-constants'

export default function ShopTabScreen(){
    return(
        <View style={{paddingTop: Constats.statusBarHeight}}>
            <Text>Shop</Text>
        </View>
    )
}