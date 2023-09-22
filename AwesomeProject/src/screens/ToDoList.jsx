import React, { useState } from 'react';
import { Modal, Alert, StyleSheet, Text, View, Image, Dimensions, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Constats from 'expo-constants'
import { THEME } from './src/theme/colors';
import { ItemButton } from './src/components/ItemButton';
import { TaskButton } from './src/components/TaskButton';
import { useTodos } from './src/hooks/useTodos';
import { TaskDetailModal } from './src/components/TaskDetailModal';

export default function ToDoList() {
    const {
      inputValue,
      todos,
      editing,
      detailsModal,
      setdetailsModal,
      setDetailsModalVisible,
      handleAddTodo,
      handleCompletedTask,
      handleDeleteTask,
      handleEditPendingTodo,
      handleEditTodo,
      setInputValue,
      handleSeeDetails,
      detailsModalVisible,
    } = useTodos()
  
      
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
                  handleEdit={handleEditTodo} onPressFunction={handleSeeDetails}
                  createdAt={created} updatedAt={updated}
                />
              )
            })}
            keyExtractor={(item) => item.id}
          />
          <TaskDetailModal todo={detailsModal} isVisible={detailsModalVisible} modalVisible={setDetailsModalVisible}/> 
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
  