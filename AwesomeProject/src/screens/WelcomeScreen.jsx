import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native"
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { WelcomeCard } from "../components/card/WelcomeCard";
import { AntDesign } from '@expo/vector-icons';
import Therapist from "../components/Therapist";

const CARDS =[
    {id:1, isDarkBlue: true, text: '', iconName: ''}
]

const WelcomeScreen = () => {
    const THERAPISTS = [
        {id: 1, name: 'Dr. ALice Johnson', job: 'physiotherapist', rate: 5},
        {id: 2, name: 'Dr. ALice Johnson', job: 'physiotherapist', rate: 5},
        {id: 3, name: 'Dr. ALice Johnson', job: 'physiotherapist', rate: 5},
        {id: 4, name: 'Dr. ALice Johnson', job: 'physiotherapist', rate: 5},
    ]

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
            {CARDS.map(({ }) =>
            <WelcomeCard />)
            }
            <WelcomeCard isDarkBlue text={'Start Training'} icon={<FontAwesome5 name="weight-hanging" size={30} color="white" />}/>
            <WelcomeCard text={'Keep Training'} icon={<AntDesign name="trademark" size={24} color="gray" />}/>
            </ScrollView>

            <Text style={{fontSize: 20, fontWeight: '500'}}>What are your Symptoms?</Text>
            <ScrollView style={styles.symptomsContainer} horizontal showsHorizontalScrollIndicator={false}>
                <Text style={{fontSize: 10}}>I'm Fine</Text>
                <Text style={{fontSize: 10}}>I'm Fine</Text>
            </ScrollView>
            <View style={styles.therapistTitle}>
                <Text style={styles.titleText}>Popular therapist</Text>
                <Text style={{color: '#d4'}}>See all</Text>
            </View>
            <FlatList 
            data={THERAPISTS}
            renderItem={({ item: {name, image, job, rate}}) =>
            <Therapist />
            }
            keyExtractor={(item)=> item.id}
            />
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
    },
    symptomsContainer:{
        backgroundColor: '',
        width: 150,
        paddingHorizontal: 10,
        borderRadius: 10,
        //alignItems: 'center',
        marginTop: 20,
        marginRight: 15,
    },
    symptomsText:{

    },
    therapistTitle:{
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})


export default WelcomeScreen