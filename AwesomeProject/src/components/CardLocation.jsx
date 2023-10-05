import { View, Text, TouchableOpacity } from "react-native";
import { CardSchool } from "./CardSchool";
import { useAppContext } from "../hooks/useAppContext";
//import { TouchableOpacity } from "react-native-gesture-handler";

export const CardLocation = () => {
    const {person, handleIsActive} = useAppContext()
    return(
        <View>
        <Text>Country: {person.country}</Text>
        <Text>City: {person.city}</Text>
        <CardSchool />
        
    </View>
    )
}
