import { Text, View } from "react-native";
import { WalletBar } from "../components/Pantalla1/WalletBar";
import WalletAmount from "../components/Pantalla1/WalletAmount";
import TransactionButtons from "../components/Pantalla1/TransactionButtons";
import { AssetsTransactions } from "../components/Pantalla1/AssetsTransactions";
import { HomeMenu } from "../components/Pantalla1/HomeMenu";

export default function Pantalla1(){
    return(
        <View>
            <WalletBar />
            <WalletAmount />
            <TransactionButtons />
            <AssetsTransactions />
            <HomeMenu />
        </View>
    )
}