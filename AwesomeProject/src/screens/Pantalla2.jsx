import { View, Text } from "react-native";
import { NavBar } from "../components/Pantalla2/NavBar";
import MainCard from "../components/Pantalla2/MainCard";

export default function Pantalla2(){
    return(
        <View>
            <NavBar />
            <MainCard />
        </View>
    )
}