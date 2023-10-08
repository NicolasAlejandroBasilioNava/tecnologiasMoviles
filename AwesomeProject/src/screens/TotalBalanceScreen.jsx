import { View, Text, StyleSheet, Image, ScrollView, FlatList } from "react-native";
import { THEME } from "../theme/colors";
import { therapistsCardData as peopleInfo } from "../constants/therapistsCardsDATA";
import { PeopleCardInfo } from "../components/PeopleCardInfo";

export default function TotalBalanceScreen({route}){
    const styles = darkTheme
    const balance = route.params

    return(
        <View style={styles.container}>
            
            <Text>Total Balance</Text>
            <Text style={{color: 'white'}}>${balance}</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly',}}>
                <Text>Day</Text>
                <Text>Week</Text>
                <Text>Month</Text>
                <Text>Year</Text>
            </View>
            <Image source={{uri: 'https://www.masscience.com/wp-content/uploads/2019/10/estadisticas123.png', height: 200}}/>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Text>JAN</Text>
                <Text>JAN</Text>
                <Text>JAN</Text>
                <Text>JAN</Text>
                <Text>JAN</Text>
                <Text>JAN</Text>
                <Text>JAN</Text>
                <Text>JAN</Text>
                <Text>JAN</Text>
                <Text>JAN</Text>
                <Text>JAN</Text>
                <Text>JAN</Text>
                <Text>JAN</Text>

            </ScrollView>
            <View>
                <View style={{flexDirection: 'row'}}>
                    <Text>Transactions</Text>
                    <Text>See All</Text>
                </View>
                <FlatList 
                        data={peopleInfo}
                        keyExtractor={(item) => item.id}
                        renderItem={({item: {name, cardNumber, icon}}) =>
                        <PeopleCardInfo name= {name} cardNumber={cardNumber} icon={icon}/>
                        }
                        style= {styles.myContactList}   
                />
            </View>
            
        </View>
    )
}

const darkTheme = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.COLORS.BLACK,
        // paddingTop: Constats.statusBarHeight,
        paddingHorizontal: 20,
        // alignItems: 'center'
    },
    myContactContainer: {
        backgroundColor: THEME.COLORS.GRAY.DEEP,
        marginHorizontal: 15,
        marginVertical: 10,
    },
    myContactList:{
        height: 250,
    },
})