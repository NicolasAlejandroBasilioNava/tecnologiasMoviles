import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableHighlight, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Input } from "../components/Inputs/Input";
import { THEME } from '../theme/colors';

export default function WelcomeBackScreen(){
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
        setIsEnabled((previousState) => !previousState);
    };

    return(
        <View style={styles.container}>
            <AntDesign style={styles.backIcon} name="arrowleft" size={24} color="black" />
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Welcome back!</Text>
            </View>
            <Input label='Email' placeholder='name@example.com'/>
            <Input label='Password' placeholder='Enter your password' password/>
            <View style={styles.remembermeContainer}>
                <Text>Remember me</Text>
                <Switch 
                    style={styles.switch}
                    trackColor={{ false: THEME.COLORS.GRAY.LIGHT, true: THEME.COLORS.ORANGE.LIGHT }}
                    thumbColor={isEnabled ? THEME.COLORS.ORANGE.SOLID : THEME.COLORS.WHITE.SOLID}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.submitButtonText}>Sign in!</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 40,
    },
    backIcon:{
        marginVertical: 30,
    },
    titleContainer:{
        marginBottom: 60,
    },
    titleText:{
        fontSize: 30,
        width: 150,
        fontWeight: '600',
    },
    remembermeContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 50,
        marginTop: 20,
    },
    remembermeText:{
        fontWeight: '500',
    },
    switch:{
        transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
    },
    submitButton:{
        backgroundColor: THEME.COLORS.ORANGE.MID,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
    submitButtonText:{
        color: THEME.COLORS.WHITE.SOLID,
        fontSize: 17,
    },
})