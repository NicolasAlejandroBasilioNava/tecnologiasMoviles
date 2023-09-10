import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Input } from "../components/Inputs/Input";
import { THEME } from '../theme/colors';

export default function CreateAccountScreen(){
    return(
        <View style={styles.container}>
            <AntDesign style={styles.backIcon} name="arrowleft" size={24} color="black" />
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Create new account</Text>
            </View>
            <Input label='Full name' placeholder='Enter your name'/>
            <Input label='Email address' placeholder='name@example.com'/>
            <Input label='Create password' placeholder='Enter your password' password/>
            <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.submitButtonText}>Sign Un!</Text>
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
        width: 250,
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
        marginTop: 40,
    },
    submitButtonText:{
        color: THEME.COLORS.WHITE.SOLID,
        fontSize: 17,
    },
})