import { FlatList } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { THEME } from "../../../theme/colors";
import { TransactionCard } from "./TransactionCard";

const transacions = [
    {id: 0,type: 'Ethereum', statistics: '29.74% ($28,015)', transacionValue: '79.006 ETH' , transacionValueConvertion: '$100,000.00', backgroundColor: THEME.COLORS.RED, icon: <FontAwesome5 name="ethereum" size={24} color="white" />},
    {id: 1,type: 'Bitcoin', statistics: '15.96% ($28,015)', transacionValue: '107.70 BTC' , transacionValueConvertion: '$30,812.92', backgroundColor: THEME.COLORS.GREEN.DARK, icon: <FontAwesome name="bitcoin" size={24} color="white" />},
    {id: 2,type: 'Binance', statistics: '29.74% ($28,015)', transacionValue: '79.006 ETH' , transacionValueConvertion: '$100,000.00', backgroundColor: THEME.COLORS.CANARY, icon: <FontAwesome5 name="ethereum" size={24} color="white" />},
    {id: 3,type: 'Tether usd', statistics: '29.74% ($28,015)', transacionValue: '79.006 ETH' , transacionValueConvertion: '$100,000.00', backgroundColor: THEME.COLORS.BLUE, icon: <FontAwesome5 name="bity" size={24} color="white" />},
    {id: 4,type: 'Ethereum', statistics: '29.74% ($28,015)', transacionValue: '79.006 ETH' , transacionValueConvertion: '$100,000.00', backgroundColor: THEME.COLORS.CREAM, icon: <FontAwesome5 name="ethereum" size={24} color="white" />},
]

const TransactionList = () =>(
    <FlatList 
        data={transacions}
        renderItem={({item: {type, statistics, transacionValue, 
            transacionValueConvertion, backgroundColor, icon}, index}) => 
        <TransactionCard type={type} statisctics={statistics} transactionValue={transacionValue}
        transactionValueConvertion={transacionValueConvertion} backgroundColor={backgroundColor}
        icon={icon}
        />
        }
        keyExtractor={(item)=> item.id}
    />
) 

export default TransactionList