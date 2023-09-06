import { Text, View } from "react-native";
import {LoginHeader} from "../components/Login/LoginHeader"
import { LoginContent } from "../components/Login/LoginContent";

export default function Pantalla1(){
    return(
        <View>
            <LoginHeader />
            <LoginContent />
        </View>
    )
}