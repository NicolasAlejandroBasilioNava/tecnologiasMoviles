import React, { useReducer } from 'react';
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

const initialState = {
  todos: [],
  inputValue: '',
  editing: null,
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: new Date().toISOString(),
            name: action.payload,
            isCompleted: false,
            created: new Date() + '',
            updated: null,
          },
        ],
        inputValue: '',
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case 'COMPLETE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? {
                ...todo,
                isCompleted: !todo.isCompleted,
                updated: new Date() + '',
              }
            : todo
        ),
      };
    case 'EDIT_TODO':
      return {
        ...state,
        editing: action.payload,
        inputValue: state.todos.find((todo) => todo.id === action.payload).name,
      };
    case 'EDIT_PENDING_TODO':
      const existingTaskName = state.todos.some(
        (todo) =>
          todo.name.toLowerCase() === state.inputValue.toLowerCase() &&
          todo.id !== state.editing
      );

      if (existingTaskName) {
        return state;
      }

      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === state.editing
            ? {
                ...todo,
                name: state.inputValue,
                updated: new Date() + '',
              }
            : todo
        ),
        editing: null,
        inputValue: '',
      };
    case 'UPDATE_INPUT_VALUE':
      return { ...state, inputValue: action.payload };
    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleDeleteTask = (todoId) => {
    dispatch({ type: 'DELETE_TODO', payload: todoId });
  };

  const handleCompletedTask = (todoId) => {
    dispatch({ type: 'COMPLETE_TODO', payload: todoId });
  };

  const handleEditTodo = (todoId) => {
    const todo = state.todos.find((todo) => todo.id === todoId);
    if (state.editing === todoId || todo.isCompleted) {
      dispatch({ type: 'EDIT_TODO', payload: null });
    } else {
      dispatch({ type: 'EDIT_TODO', payload: todoId });
    }
  };

  const handleEditPendingTodo = () => {
    dispatch({ type: 'EDIT_PENDING_TODO' });
  };

  const handleAddTodo = () => {
    dispatch({ type: 'ADD_TODO', payload: state.inputValue });
  }

  
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40, fontWeight: 'bold', textAlign: 'center', color: THEME.COLORS.MARRON }}>To-do List</Text>
      <View style={{ flexDirection: 'row', marginVertical: 20, gap: 20 }}>
      <TextInput
        style={styles.input}
        value={state.inputValue}
        onChangeText={(value) => dispatch({ type: 'UPDATE_INPUT_VALUE', payload: value })}
        placeholder='To-do Name'
      />

        <ItemButton
          onPressFunction={state.editing ? handleEditPendingTodo : handleAddTodo}
          text={state.editing ? 'Edit Task' : 'Add Task'}
        />
      </View>
      <FlatList
        data={state.todos} // Access todos from the state object
        renderItem={({ item }) => {
          const { name, id, created, updated, isCompleted } = item;
          return (
            <TaskButton
              id={id} name={name} isCompleted={isCompleted}
              handleDelete={() => handleDeleteTask(id)}
              handleComplete={() => handleCompletedTask(id)}
              handleEdit={() => handleEditTodo(id)}
              createdAt={created} updatedAt={updated}
            />
          )
        }}
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
