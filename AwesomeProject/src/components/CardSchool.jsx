import { View, Text, TouchableOpacity } from "react-native";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useAppContext } from "../hooks/useAppContext";

export const CardSchool = () => {
    const {person, handleIsActive} = useAppContext()

    return(
        <View>

        <View style={{backgroundColor: !person.isActive ? 'brown' : 'white'}}>
        <Text>CARD SCHOOL {person.school}</Text>

        </View>
        <TouchableOpacity 
            onPress={() => handleIsActive}
            >
            <Text>Is active</Text>
        </TouchableOpacity>
    </View>
    )
}