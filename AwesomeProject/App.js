import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View, Image, Dimensions, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Constats from 'expo-constants'
import { THEME } from './src/theme/colors';
import WelcomeBackScreen from './src/screens/WelcomeBackScreen';
import CreateAccountScreen from './src/screens/CreateAccountScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';

const TODOS = [
  {id: 1, name: 'Task 1', completed: false},
  {id: 2, name: 'Task 2', completed: false},
]

export default function App() {
  const [state, setState] = useState(1)
  //const [inputValue, setIputValue] = useState()
  function sumValue(){
    setState(state+1)
  }
  const [todos, setTodos]= useState([])
  const [inputValue, setInputValue] = useState()

  const handleAddTodo = () => {
    if( inputValue === ''){
      return
    }
    setTodos([
      ...todos,
      {
      id: new Date().toISOString(),
      name: inputValue,
      isCompleted: false,
    }])
    setInputValue('')
  }
  //JSON.stringify(false)

  console.log(state, '**STATE 0**')
  console.log(setState, '**STATE 1**')
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 40, fontWeight:'bold', textAlign: 'center'}}>To-do List</Text>
      <View style={{flexDirection: 'row', marginTop: 20, gap: 20}}>
        <TextInput 
          style={{borderWidth: 1, paddingHorizontal: 10, fontSize: 20, flex: 1}}
          value={inputValue}
          onChangeText={(value) => setInputValue(value)}
        />
        <TouchableOpacity onPress={handleAddTodo} style={{borderWidth: 1, width: 80}}>
          <Text>Add task</Text>
        </TouchableOpacity>

        </View>
        <FlatList 
          data={todos}
          renderItem={(({ item: {name}}) => {
            return(
              <View style= {{textAlign: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <Text>{name}</Text>
                <View style={{flexDirection: 'row', marginTop: 30, justifyContent: 'space-between', gap: 10}}>
                <TouchableOpacity style={{borderWidth: 1, width: 80}}>
                    <Text>Delete</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{borderWidth: 1, width: 80}}>
                    <Text>Edit</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )
          })}
        />

      {/* <TextInput value= {inputValue}
        onChangeText={(value) => setIputValue(value)}
        style={{borderWidth: 1}}
      />
      <Text>{JSON.stringify(inputValue)}</Text>
      
      <Text>{JSON.stringify(state)}</Text>
      <TouchableOpacity onPress={sumValue} style={{borderWidth: 1,}}>
        <Text>Change Value</Text>
      </TouchableOpacity> */}
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
