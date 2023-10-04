import { View, Text } from "react-native";
import { CardLocation } from "./CardLocation";
import { CardSchool } from "./CardSchool";

export const CardFooter = ({person}) => (
    <View>
        <Text>CARD FOOTER</Text>
        <CardLocation person={person}/>
        
    </View>
)