import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableHighlight, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Input } from "../components/Inputs/Input";
import { THEME } from '../theme/colors';
import Constats from 'expo-constants'
import useAuthContext from '../hooks/useAuthContext';

export default function SingUpScreen({navigation}){
    const {canGoBack, goBack} = navigation
    const {handleRegister} = useAuthContext()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleRegisterButtonPress = () => {
        const newUser = {
          username: email, // Puedes usar el correo electrónico como nombre de usuario si lo deseas
          password,
        };
      
        // Llama a la función handleRegister del contexto para registrar al nuevo usuario
        handleRegister(newUser);
      
        // Puedes realizar alguna acción después del registro exitoso, como redirigir al usuario a la pantalla de inicio de sesión
        navigation.navigate('Login');
      };
      

    return(        
            <View style={styles.container}>
            <AntDesign 
                    style={styles.backIcon} name="arrowleft" size={24} color="black" 
                    onPress={ canGoBack? () => goBack() : nuil}
            />
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Sign Up</Text>
                <View style={{flexDirection: 'row', justifyContent: 'left', alignItems: 'center', marginTop: 10, gap: 5}}>
                <Text 
                    style={{ 
                        color: THEME.COLORS.BLACK, 
                        fontWeight: '400', 
                    }}
                >Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={{textDecorationLine: 'underline', color: THEME.COLORS.BLUE.TURKISH, alignSelf: 'center'}}>Login</Text>
                </TouchableOpacity>
            </View>
            </View>
            <Input label='Name' placeholder='Enter your name' value={name} onChangeText={setName} />
            <Input label='Email' placeholder='name@example.com' value={email} onChangeText={setEmail} />
            <Input label='Password' placeholder='Enter your password' password value={password} onChangeText={setPassword} />

            <TouchableOpacity style={styles.submitButton} onPress={handleRegisterButtonPress}>
                <Text style={styles.submitButtonText}>Sign Up</Text>
            </TouchableOpacity>
            
            <View style={{flexDirection: 'row', justifyContent: 'left', alignItems: 'center', marginTop: 10, gap: 5, width: '90%', }}>
                <Text 
                    style={{ 
                        color: THEME.COLORS.BLACK, 
                        fontWeight: '400', 
                    }}
                >By signing up, you are agreeing to our</Text>
                
            </View>
            <TouchableOpacity>
                    <Text style={{textDecorationLine: 'underline', color: THEME.COLORS.BLUE.TURKISH, }}>Terms of Service and Privacy Policy</Text>
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 30,
        paddingTop: Constats.statusBarHeight,
    },
    backIcon:{
        marginVertical: 30,
    },
    titleContainer:{
        marginBottom: 20,
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
    submitButton:{
        backgroundColor: THEME.COLORS.BLUE.TURKISH,
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