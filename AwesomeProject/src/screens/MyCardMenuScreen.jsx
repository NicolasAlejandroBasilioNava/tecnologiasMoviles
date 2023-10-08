import { View, StyleSheet, Text, ScrollView } from "react-native";
import { CircularButton } from "../components/CirtularButton";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Card } from "../components/Card";
import { FlatList } from "react-native-gesture-handler";
import { therapistsCardData as peopleInfo } from "../constants/therapistsCardsDATA";
import { PeopleCardInfo } from "../components/PeopleCardInfo";
import { THEME } from "../theme/colors";
import Constats from 'expo-constants'


export default function MyCardMenuScreen ({navigation}){
    const styles= darkTheme

    return(
        <View style={styles.mainContainer}>
            <Text style={styles.title}>My cards</Text>
            <View style= {styles.cardsContainer}>
                <CircularButton backgroundColor={THEME.COLORS.CREAM} icon={<AntDesign name="plus" size={24} color= {styles.iconColor.secondaryColor} />} height={140} width={85}/>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <Card onPress={()=> navigation.navigate('TotalBalance', balance= '13,398.23')}  cardNumber={4934} amount={'13,398.23'} bankType={'mastercard'}/>
                    <Card onPress={()=> navigation.navigate('TotalBalance', balance= '32,751.75')}  cardNumber={2352} amount={'32,751.75'} bankType={'visa'}/>
                </ScrollView>
            </View>
            <View style= {styles.transactionContainer}>
                <CircularButton backgroundColor={styles.iconColor.backgroundButtonsColor} color={styles.iconColor.thirdColor} onPress={()=> navigation.navigate('Send')} text={'Send'} width={100} icon={<MaterialCommunityIcons name="credit-card-minus" size={24} color= {styles.iconColor.mainColor} />}/>
                <CircularButton backgroundColor={styles.iconColor.backgroundButtonsColor} color={styles.iconColor.thirdColor} text={'Receive'} width={100} icon={<MaterialCommunityIcons name="credit-card-plus" size={24} color= {styles.iconColor.mainColor} />}/>
                <CircularButton backgroundColor={styles.iconColor.backgroundButtonsColor} color={styles.iconColor.thirdColor} text={'Swap'} width={100} icon={<MaterialCommunityIcons name="swap-horizontal" size={24} color= {styles.iconColor.mainColor} />}/>
            </View>
            <View style= {styles.transactionContainer}>
                <CircularButton backgroundColor={styles.iconColor.backgroundButtonsColor} color={styles.iconColor.thirdColor} text={'Activity'} width={75} height={35}/>
                <CircularButton backgroundColor={styles.iconColor.backgroundButtonsColor} color={styles.iconColor.thirdColor} text={'Contacts'} width={75} height={35}/>
                <CircularButton backgroundColor={styles.iconColor.backgroundButtonsColor} color={styles.iconColor.thirdColor} text={'Payments'} width={75} height={35}/>
                <CircularButton backgroundColor={styles.iconColor.backgroundButtonsColor} color={styles.iconColor.thirdColor} text={'Sale'} width={75} height={35}/>
            </View>
            <View style={styles.myContactContainer}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15}}>
                    <Text>My contacts</Text>
                    <Ionicons name="search-sharp" size={24} color= {styles.iconColor.mainColor} />
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

const darkTheme= StyleSheet.create({
    mainContainer:{
        flex: 1,
        backgroundColor: THEME.COLORS.BLACK,
    },
    title:{
        fontSize: 40,
        fontWeight: 'bold',
        paddingHorizontal: 15,
        color: THEME.COLORS.WHITE.SOLID
    },
    cardsContainer: {
        marginHorizontal: 15,
        marginVertical: 10,
        flexDirection: 'row',
        gap: 5,
    },
    transactionContainer:{
        marginHorizontal: 15,
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    myContactContainer: {
        backgroundColor: THEME.COLORS.GRAY.DEEP,
        marginHorizontal: 15,
        marginVertical: 10,
    },
    myContactList:{
        height: 250,
    },
    iconColor: {
        mainColor: THEME.COLORS.WHITE.SOLID,
        secondaryColor: THEME.COLORS.BLACK,
        thirdColor: THEME.COLORS.GREENYELLOW,
        backgroundButtonsColor: THEME.COLORS.GRAY.DEEP,
    }
})