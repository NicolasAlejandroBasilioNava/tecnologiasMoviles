import { View, Text, StyleSheet, Image, ScrollView, FlatList } from "react-native";
import { THEME } from "../theme/colors";
import { therapistsCardData as peopleInfo } from "../constants/therapistsCardsDATA";
import { PeopleCardInfo } from "../components/PeopleCardInfo";
import { useAppContext } from "../context/AppContext";

export default function TotalBalanceScreen({route}){
    const {isDarkMode} = useAppContext()

    const styles= isDarkMode ? darkTheme : lightTheme
    const balance = route.params

    return(
        <View style={styles.container}>
            
            <Text style={styles.scrolledText}>Total Balance</Text>
            <Text style={styles.balanceText}>${balance}</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly',}}>
                <Text style={styles.scrolledText}>Day</Text>
                <Text style={styles.scrolledText}>Week</Text>
                <Text style={styles.scrolledText}>Month</Text>
                <Text style={styles.scrolledText}>Year</Text>
            </View>
            <Image source={{uri: 'https://www.masscience.com/wp-content/uploads/2019/10/estadisticas123.png', height: 250}}/>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Text style={styles.scrolledText}>JAN</Text>
                <Text style={styles.scrolledText}>FEB</Text>
                <Text style={styles.scrolledText}>MAR</Text>
                <Text style={styles.scrolledText}>APR</Text>
                <Text style={styles.scrolledText}>MAY</Text>
                <Text style={styles.scrolledText}>JUN</Text>
                <Text style={styles.scrolledText}>JUL</Text>
                <Text style={styles.scrolledText}>AUG</Text>
                <Text style={styles.scrolledText}>SEP</Text>
                <Text style={styles.scrolledText}>OCT</Text>
                <Text style={styles.scrolledText}>NOV</Text>
                <Text style={styles.scrolledText}>DEC</Text>
            </ScrollView>
            <View style={styles.transactionContainer}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.transactionContainerTitle}>Transactions</Text>
                    <Text style={styles.transactionContainerTitle}>See All</Text>
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
    balanceText:{
        color: THEME.COLORS.WHITE.SOLID,
        fontSize: 39,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    myContactContainer: {
        backgroundColor: THEME.COLORS.GRAY.DEEP,
        marginHorizontal: 15,
        marginVertical: 10,
    },
    myContactList:{
        height: 250,
    },
    transactionContainer:{
        backgroundColor: THEME.COLORS.GRAY.DEEP,
        borderRadius: 25,
        padding: 10,
    },
    transactionContainerTitle:{
        color: THEME.COLORS.WHITE.SOLID,
        fontSize: 18,
        fontWeight: '500',
    },
    scrolledText:{
        color: THEME.COLORS.WHITE.SOLID,
        fontSize: 17,
        fontWeight: '300',
        textAlign: 'center',
        marginHorizontal: 15,
    },
})

const lightTheme = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.COLORS.WHITE.OSTION, // Cambiado a fondo blanco
        paddingHorizontal: 20,
        // alignItems: 'center' (comentado para mantener el mismo estilo)
    },
    balanceText: {
        color: THEME.COLORS.BLACK, // Cambiado a color oscuro
        fontSize: 39,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    myContactContainer: {
        backgroundColor: THEME.COLORS.GRAY.DEEP, // Mantenido el color oscuro
        marginHorizontal: 15,
        marginVertical: 10,
    },
    myContactList: {
        height: 250,
    },
    transactionContainer: {
        backgroundColor: THEME.COLORS.WHITE.SOLID, // Cambiado a un tono de blanco más suave
        borderRadius: 25,
        padding: 10,
    },
    transactionContainerTitle: {
        color: THEME.COLORS.BLACK, // Cambiado a color oscuro
        fontSize: 18,
        fontWeight: '500',
    },
    scrolledText: {
        color: THEME.COLORS.BLACK, // Cambiado a color oscuro
        fontSize: 17,
        fontWeight: '300',
        textAlign: 'center',
        marginHorizontal: 15,
    },
})
