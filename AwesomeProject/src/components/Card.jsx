import { View, Text } from "react-native";
import { CardId } from "./CardId";
import { CardFooter } from "./CardFooter";

export const Card = ({person}) =>(
    <View style={{borderWidth: 1, padding: 15, borderRadius: 15, }}>
        <Text>Card Component</Text>
        <CardId person={person}/>
        <Text>NAME: {person.name}</Text>
        <CardFooter person={person}/>
    </View>
)