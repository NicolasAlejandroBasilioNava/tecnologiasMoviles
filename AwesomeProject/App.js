import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View, Image, Dimensions, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Constats from 'expo-constants'
import { THEME } from './src/theme/colors';
import WelcomeBackScreen from './src/screens/WelcomeBackScreen';
import CreateAccountScreen from './src/screens/CreateAccountScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import { ItemButton } from './src/components/ItemButton';
import { Input } from './src/components/Inputs/Input';
import { TaskButton } from './src/components/TaskButton';

const TODOS = [
  {id: 1, name: 'Task 1', completed: false},
  {id: 2, name: 'Task 2', completed: false},
]

export default function App() {
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

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 40, fontWeight:'bold', textAlign: 'center', color: THEME.COLORS.MARRON}}>To-do List</Text>
      <View style={{flexDirection: 'row', marginVertical: 20, gap: 20}}>
        <TextInput style={styles.input}
          value={inputValue}
          onChangeText={(value) => setInputValue(value)}
        />
        <ItemButton onPressFunction={handleAddTodo} text='Add Task'/>
      </View>
        <FlatList 
          data={todos}
          renderItem={(({ item: {name}}) => {
            return(
              <TaskButton name={name}/>
            )
          })}
          keyExtractor={(item) => item.id}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.CREAM,
    marginTop: Constats.statusBarHeight,
    paddingHorizontal: 20,
  },
  input:{
    borderWidth: 0.5, 
    paddingHorizontal: 10, 
    fontSize: 17, 
    flex: 1,
    borderRadius: 10,
  },
});
