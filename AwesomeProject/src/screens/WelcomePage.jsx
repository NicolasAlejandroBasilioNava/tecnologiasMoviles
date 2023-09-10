import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import { NavBar } from "../components/Welcome/NavBar";
import { THEME } from "../theme/colors";
import { WelcomeCard } from "../components/Welcome/WelcomeCard";
import { welcomeCardsDATA as WCARDS } from "../constants/welcomeCardsDATA";
import { symptomsCardsDATA as SYMCARDS } from "../constants/symptomsCardsDATA";
import { SymptomCard } from "../components/Welcome/SymptomsCard";
import { therapistsCardData as THERAPISTCARDS } from "../constants/therapistsCardsDATA";
import { TherapistsCard } from "../components/Welcome/TherapistsCard";
import { HomeMenu } from "../components/Welcome/HomeMenu";

export default function WelcomePage(){

    return(
        <View>
             <NavBar />
           <View style={styles.textContainer}>
                <Text style={[{color: THEME.COLORS.GRAY.MID}, styles.titleText]}>Hello,</Text>
                <Text style={styles.titleText}>Chris👋</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                { WCARDS.map(({ text, isDarkBlue, icon },index ) =>
                    <WelcomeCard key={index} text={text} isDarkBlue={isDarkBlue} icon={icon}/>)
                }
            </ScrollView>
            <Text style={styles.subText}>What are your symptoms?</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                { SYMCARDS.map(({symptom}, index) =>
                    <SymptomCard key={index} symptom={symptom}/>)
                }
            </ScrollView>
            <View style={{
                flexDirection: 'row', alignItems: 'center', 
                justifyContent: 'space-between', marginRight: 10}}>
                <Text style={styles.subText}>Popular therapists</Text>
                <Text style={{color: THEME.COLORS.GRAY.MID}}>See all</Text>
            </View>
            <FlatList style={styles.therapistList}
                data={THERAPISTCARDS}
                renderItem={({item: {name, therapistType, rate, icon}}) =>
                <TherapistsCard name={name} therapistType={therapistType} rate={rate} icon={icon}/>
                }
                keyExtractor={(item) => item.id.toString()}
            /> 
            <HomeMenu />
        </View>
    )
}

const styles= StyleSheet.create({
    textContainer:{
        flexDirection: 'row',
        gap: 5,
        marginHorizontal: 15,
        marginTop: 10,
    },
    titleText:{
        fontSize: 30,
        fontWeight: 'bold',
    },
    subText:{
        marginHorizontal: 15,
        fontSize: 25,
        fontWeight: 'bold',
    },
    therapistList:{
        height: 190,
    }
})