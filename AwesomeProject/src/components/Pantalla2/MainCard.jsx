import { View, StyleSheet } from "react-native";
import CurrentBalance from "./card/CurrentBalance";
import ExchangeCard from "./card/ExchangeCard";
import Amount from "./card/Amount";
import { THEME } from "../../theme/colors";
import Buttons from "./card/Buttons";
import { SwipeComponent } from "./card/swipeComponent";

export default function MainCard(){
    return(
        <View>     
            <ExchangeCard />
            <View style={styles.container}>
                <CurrentBalance />
                <Amount />
                <Buttons />
                <SwipeComponent />
            </View> 
        </View>
    )
}

const styles = StyleSheet.create({
    container:{

        backgroundColor: THEME.COLORS.WHITE,
        borderRadius: 20,
        height: 585,
        marginHorizontal: 5,
    },
    
})