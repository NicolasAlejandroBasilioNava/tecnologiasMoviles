import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Input } from "../components/Inputs/Input";
import { THEME } from '../theme/colors';
import Constats from 'expo-constants'
import { CircularButton } from '../components/CirtularButton';

export default function WelcomeBackScreen({navigation, route}){
    const {menuTitle} = route.params
    const {canGoBack, goBack} = navigation

    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
        setIsEnabled((previousState) => !previousState);
    };

    return(
        <View style={styles.container}>
            <View style={styles.navigationBar}>
                <AntDesign 
                    style={styles.backIcon} name="arrowleft" size={24} color="black" 
                    onPress={ canGoBack? () => goBack() : nuil}
                />
                <View>
                    <Text style={styles.navigationTitle}>{menuTitle}</Text>
                    <Text style={{textAlign: 'center'}}>UroMillions</Text>
                </View>    
            </View>
            <View style={styles.titleContainer}>
                <AntDesign name="calendar" size={24} color="black" />
                <Text style={styles.titleText}>Today</Text>
                <AntDesign name="clockcircleo" size={24} color="black" />
                <Text style={styles.titleText}>10:11:00</Text>
            </View>
            <View style={styles.ticketContainer}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}> 
                    <Text style={{fontSize: 18, color: THEME.COLORS.WHITE.SOLID, fontWeight: 'bold'}}>Ticket 1</Text>
                    <Feather name="refresh-ccw" size={24} color="#93b6aa" />
                </View>
                <View style={{flexDirection: 'row', gap: 5, alignSelf: 'center'}}>
                    <CircularButton backgroundColor={THEME.COLORS.CANARY} text={1} height={60} width={60}/>
                    <CircularButton backgroundColor={THEME.COLORS.CANARY} text={7} height={60} width={60}/>
                    <CircularButton backgroundColor={THEME.COLORS.CANARY} text={14} height={60} width={60}/>
                    <CircularButton backgroundColor={THEME.COLORS.CANARY} text={16} height={60} width={60}/>
                    <CircularButton backgroundColor={THEME.COLORS.CANARY} text={19} height={60} width={60}/>
                </View>
            </View>
            <View style={{flexDirection: 'row', gap: 5,}}>
                <View style={styles.rateTypeContainer}>
                    <View>
                        <Text style={{fontSize: 18, fontWeight: '300'}}>Rate type</Text>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>One time bet</Text>
                    </View>
                    <AntDesign 
                        name="checkcircle" size={30} color="#f96f3d" 
                        style={{alignSelf: 'flex-end'}}
                    />
                </View>
                <View style={styles.rateTypeContainer}>
                    <View>
                        <Text style={{fontSize: 18, fontWeight: '300'}}>Rate type</Text>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Subscription</Text>
                    </View>
                    <AntDesign 
                        name="checkcircleo" size={30} color="black" 
                        style={{alignSelf: 'flex-end'}}
                    />
                </View>
            </View>
            <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.submitButtonText}>Watch Results</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 10,
        paddingTop: Constats.statusBarHeight,
        backgroundColor: THEME.COLORS.CREAM,
        flex: 1,
    },
    navigationBar:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 60,

    },
    navigationTitle:{
        fontSize: 25,
        fontWeight: 'bold',
    },
    backIcon:{
        marginVertical: 30,
    },
    titleContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        backgroundColor: THEME.COLORS.DARKCREAM, 
        height: 60,
        width: 270,
        borderRadius: 20,
        alignSelf: 'center',
        marginBottom: 5,
    },
    titleText:{
        fontSize: 20,
        fontWeight: '600',
        marginRight: 10,
    },
    ticketContainer:{
        backgroundColor: THEME.COLORS.GREEN.LIGHT,
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginBottom: 5,
        marginTop: 5,
        height: 160,
        justifyContent: 'space-between',
        borderRadius: 15,
    },
    remembermeText:{
        fontWeight: '500',
    },
    rateTypeContainer:{
        width: '47%',
        backgroundColor: THEME.COLORS.WHITE.SOLID,
        height: 170,
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 20,
        justifyContent: 'space-between'
    }, 
    submitButton:{
        backgroundColor: THEME.COLORS.GREEN.LIGHT,
        height: 70,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 35,
        marginTop: 80,
        alignSelf: 'center',
    },
    submitButtonText:{
        color: THEME.COLORS.WHITE.SOLID,
        fontSize: 17,
        
    },
})