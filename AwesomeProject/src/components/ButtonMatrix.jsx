import { View } from "react-native"
import { ButtonRow } from "./Inputs/ButtonRow"

export const ButtonMatrix = () => {

    return(
        <View style={{width: 300, alignItems: 'center', marginBottom: 20,}}>
            <ButtonRow value1={'1'} value2={'2'} value3={'3'}/>
            <ButtonRow value1={'4'} value2={'5'} value3={'6'}/>
            <ButtonRow value1={'7'} value2={'8'} value3={'9'}/>
            <ButtonRow value1={'<'} value2={'0'} value3={'.'}/>
        </View>
    )
}