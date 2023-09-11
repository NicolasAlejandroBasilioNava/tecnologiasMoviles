import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Constats from 'expo-constants'
import { THEME } from './src/theme/colors';
import WelcomeBackScreen from './src/screens/WelcomeBackScreen';
import CreateAccountScreen from './src/screens/CreateAccountScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';

export default function App() {
  const [state, setState] = useState(1)
  const [inputValue, setIputValue] = useState()
  function sumValue(){
    setState(state+1)
  }
  //JSON.stringify(false)

  console.log(state, '**STATE 0**')
  console.log(setState, '**STATE 1**')
  return (
    <View style={styles.container}>
      <TextInput value= {inputValue}
        onChangeText={(value) => setIputValue(value)}
        style={{borderWidth: 1}}
      />
      <Text>{JSON.stringify(inputValue)}</Text>
      
      <Text>{JSON.stringify(state)}</Text>
      <TouchableOpacity onPress={sumValue} style={{borderWidth: 1,}}>
        <Text>Change Value</Text>
      </TouchableOpacity>
      {/* <WelcomeScreen /> */}
      {/* <WelcomeBackScreen /> */}
      {/* <CreateAccountScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.WHITE,
    marginTop: Constats.statusBarHeight,
  },

});
