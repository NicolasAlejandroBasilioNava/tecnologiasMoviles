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

const createErrorButtonAlert = ({errorType, errorText}) =>{
  Alert.alert(
    errorType,
    errorText,
    [{text: 'Accept'}]
  );
}

export default function App() {
  const [todos, setTodos]= useState([])
  const [inputValue, setInputValue] = useState()
  const [editing, setEditing] = useState()

  const handleDeleteTask= (todoId) =>{
    const filteredArray = todos.filter(
      todo => todo.id !== todoId
    )
    setTodos(filteredArray)
  }

  const handleCompletedTask = (todoId) =>{
    const todosUpdate = todos.map((todo) =>{
      if (todo.id === todoId){
        return{
          ...todo,
          isCompleted: !todo.isCompleted,
          updated: new Date() + '',
        };
      }
      return todo;
    })

    setTodos(todosUpdate)
  }

  const handleEditTodo = (todoId) => {
    const todo = todos.find( (todo) => todo.id === todoId )
    if(editing === todoId || todo.isCompleted){
      setEditing(null)
      setInputValue('')
      if(todo.isCompleted) return createErrorButtonAlert({
                              errorType: 'Error',
                              errorText: 'This task has already been marked as completed.',
                            });
    }else{
      setEditing(todoId)
      setInputValue(todo.name)
    }
  }

  const handleEditPendingTodo = () => {
    if( inputValue === ''){
      return createErrorButtonAlert({
        errorType: 'Error',
        errorText: 'No puedes crear un pendiente sin nombre',
      });
      
    }
    const existingTaskName = todos.some(
      todo => todo.name.toLowerCase() === inputValue.toLowerCase() && todo.id !== editing
    )
    if(existingTaskName) return createErrorButtonAlert({
                          errorType: 'Error',
                          errorText: 'This task has already been marked as completed.',
                        });

    const todosUpdate = todos.map((todo) =>{
      if (todo.id === editing){
        return{
          ...todo,
          name: inputValue,
          updated: new Date() + '',
        };
      }
      return todo;
    })

    setTodos(todosUpdate)
    setEditing(null)
    setInputValue('')
  }

  const handleAddTodo = () => {
    if( inputValue === ''){
      return createErrorButtonAlert({
        errorType: 'Error',
        errorText: "You can't create a task without a name.",
      });
    }
    const existingTaskName = todos.some(
      todo => todo.name.toLowerCase() === inputValue.toLowerCase()
    )
    if(existingTaskName) return createErrorButtonAlert({
                          errorType: 'Error',
                          errorText: 'Task name already assigned, please try another one',
                        });
    setTodos([
      ...todos,
      {
      id: new Date().toISOString(),
      name: inputValue,
      isCompleted: false,
      created: new Date() + '',   
      updated: null,
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
          placeholder='To-do Name'
        />
        <ItemButton 
           onPressFunction={editing ? handleEditPendingTodo : handleAddTodo}
           text={editing ? 'Edit Task' : 'Add Task'}
          />
      </View>
        <FlatList 
          data={todos}
          renderItem={(({ item: {name, id, created, updated, isCompleted}}) => {
            return(
              <TaskButton 
                id={id} name={name} isCompleted={isCompleted}
                handleDelete={handleDeleteTask} handleComplete={handleCompletedTask}
                handleEdit={handleEditTodo} 
                createdAt={created} updatedAt={updated}
              />
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
