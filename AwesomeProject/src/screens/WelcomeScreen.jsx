import { View, Text, StyleSheet, ScrollView } from "react-native"
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const WelcomeScreen = () => {
    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Ionicons name="notifications-outline" size={35} color="blue" />
                <Ionicons name="person-circle-outline" size={40} color="blue" />
            </View>
            <Text style={styles.titleText}>
                <Text style={{color: 'gray'}}>HELLO,</Text>
                <Text> Chris</Text>
            </Text>
            

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.cardContainer}>
                <FontAwesome5 name="weight-hanging" size={30} color="white" />
                <Text style={styles.cardText}>Start Training</Text>
            </View>
            <View style={styles.cardContainer}>
                <FontAwesome5 name="weight-hanging" size={30} color="white" />
                <Text style={styles.cardText}>Start Training</Text>
            </View>
            <View style={styles.cardContainer}>
                <FontAwesome5 name="weight-hanging" size={30} color="white" />
                <Text style={styles.cardText}>Start Training</Text>
            </View>
            <View style={styles.cardContainer}>
                <FontAwesome5 name="weight-hanging" size={30} color="white" />
                <Text style={styles.cardText}>Start Training</Text>
            </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 15,
        marginTop: 10,
    },
    headerContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    titleText:{
        fontSize: 30,
        fontWeight: 'bold',
    },
    cardContainer:{
        backgroundColor: 'blue',
        height: 200,
        width: 200,
        borderRadius: 40,
        paddingHorizontal: 30,
        justifyContent: 'center',
        gap: 70,
    },
    cardText:{
        fontSize: 20,
        color: 'white',
    }
})


export default WelcomeScreen