import { View, Text } from "react-native";
import { CardId } from "./CardId";
import { CardFooter } from "./CardFooter";
import { FontAwesome } from '@expo/vector-icons';
import { THEME } from "../theme/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

export const Card = ({bankType, cardNumber, amount, onPress}) =>{

    return(
        <TouchableOpacity onPress={onPress || (() => {})}
            style={{height: 140, padding: 15, borderRadius: 25, width: 230, marginHorizontal: 10, justifyContent: 'space-between',
            backgroundColor: bankType === 'visa' ? THEME.COLORS.BLUE.DARK : 'white'}}
        >
           
                <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
                    <FontAwesome name={bankType === 'visa' ? "cc-visa" : "cc-mastercard"} size={40} color="black" />
                    <Text style={{fontSize: 20}}>**** {cardNumber}</Text>
                </View>
                <Text style={{fontSize: 30, fontWeight: 'bold'}}>${amount}</Text>
                {/* <FontAwesome name="cc-visa" size={24} color="black" /> */}
                {/* <FontAwesome name="cc-mastercard" size={24} color="black" /> */}
           
        </TouchableOpacity>
    )
}
