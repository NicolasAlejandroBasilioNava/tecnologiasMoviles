import { View } from "react-native";
import CurrentBalance from "./card/CurrentBalance";
import ExchangeCard from "./card/ExchangeCard";

export default function MainCard(){
    return(
        <View>
            
            <ExchangeCard />
            <CurrentBalance />
        </View>
    )
}