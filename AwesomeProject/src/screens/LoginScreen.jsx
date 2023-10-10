import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableHighlight, TouchableOpacity, Image, Alert } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Input } from "../components/Inputs/Input";
import { THEME } from '../theme/colors';
import Constats from 'expo-constants'
import useAuthContext from '../hooks/useAuthContext';
import { AuthContext } from '../context/AuthContext';

export default function LoginScreen({navigation}){
    // const authContext = useContext(AuthContext);
    const { handleLogin } = useAuthContext(); // Obtén la función handleLogin del contexto
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleLoginButtonPress = () => {
        const isLoggedIn = handleLogin(username, password);
        console.log(username)
        console.log(password)
        if (isLoggedIn) {
            navigation.navigate('DrawerNavigation')
          // Redirige a la pantalla principal o realiza alguna acción después de iniciar sesión
          // Puedes usar navigation.navigate() para navegar a otra pantalla
        } else {
            Alert.alert('Inicio de sesión fallido', 'Por favor, verifica tus credenciales e intenta de nuevo.', [
                { text: 'OK', onPress: () => console.log('Alerta cerrada') }, // Puedes personalizar la acción del botón OK
              ]);
          // Muestra un mensaje de error o realiza alguna acción en caso de inicio de sesión fallido
        }
      };

    return(
        <View>
            <Image style={{height: 180, width: '100%', borderBottomLeftRadius: 70, borderBottomRightRadius: 70,}} source={{uri: 'https://blog.digitalegia.com/hubfs/diseno-web-en-el-ecommerce.png'}}/>
            <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Welcome!</Text>
            </View>
            <Input label='Email' placeholder='name@example.com' value={username} onChangeText={setUsername} />
            <Input label='Password' placeholder='Enter your password' password value={password} onChangeText={setPassword} />

            <TouchableOpacity>
                <Text 
                    style={{
                        textAlign: 'right', 
                        color: THEME.COLORS.BLUE.TURKISH, 
                        fontWeight: '600', 
                        marginBottom: 40
                    }}
                >Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.submitButton} onPress={handleLoginButtonPress}>
                <Text style={styles.submitButtonText}>Login</Text>
            </TouchableOpacity>
            
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10, gap: 5}}>
                <Text 
                    style={{ 
                        color: THEME.COLORS.BLACK, 
                        fontWeight: '400', 
                    }}
                >Don't have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={{textDecorationLine: 'underline', color: THEME.COLORS.BLUE.TURKISH, alignSelf: 'center'}}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 40,
        paddingTop: 35,
    },
    backIcon:{
        // marginVertical: 30,
    },
    titleContainer:{
        // marginBottom: 60,
    },
    titleText:{
        fontSize: 35,
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