import { View, Text, StyleSheet } from "react-native";
import { CircularButton } from "../../buttons/CircularButton";
import { AntDesign } from '@expo/vector-icons';

export default function Buttons (){
    return(
        <View style={styles.column}>
           <View style={styles.rows}>
                <CircularButton text={'1'}/>
                <CircularButton text={'2'}/>
                <CircularButton text={'3'}/>
                <CircularButton text={'4'}/>
           </View>
           <View style={styles.rows}>
                <CircularButton text={'5'}/>
                <CircularButton text={'6'}/>
                <CircularButton text={'7'}/>
                <CircularButton text={'8'}/>
           </View>
           <View style={styles.rows}>
                <CircularButton icon={<AntDesign name="reload1" size={24} color="black" />}/>
                <CircularButton text={'9'}/>
                <CircularButton text={'0'}/>
                <CircularButton text={'X'}/>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    rows:{
        flexDirection: 'row',
        gap: 7,
        
    },
    column:{
        gap: 7,
        
        alignItems: 'center',
    }
})