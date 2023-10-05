import { View, Text } from "react-native";
import { CardLocation } from "./CardLocation";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useAppContext } from "../hooks/useAppContext";

export const CardSchool = () => {
    const {person} = useAppContext()

    return(
        <View style={{backgroundColor: !person.isActive ? 'brown' : 'white'}}>
        <Text>CARD SCHOOL {person.school}</Text>
        
    </View>
    )
}