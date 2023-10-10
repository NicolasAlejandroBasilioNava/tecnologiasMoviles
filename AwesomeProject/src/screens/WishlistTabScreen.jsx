import { View, Text }  from 'react-native';
import Constats from 'expo-constants'

export default function WishlistTabScreen(){
    return(
        <View style={{paddingTop: Constats.statusBarHeight}}>
            <Text>Wishlist</Text>
        </View>
    )
}