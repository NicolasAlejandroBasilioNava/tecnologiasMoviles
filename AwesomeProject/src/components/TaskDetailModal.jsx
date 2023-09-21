import React from 'react';
import { View, Text, Button, Modal, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { useTodos } from '../hooks/useTodos';
import { THEME } from '../theme/colors';

export const TaskDetailModal = ( {todo, isVisible, modalVisible } ) => {
  const closeModal = () => {
    modalVisible(false);
    //setdetailsModal({})
    isVisible= false
  };
 
  return (
    <Modal
  animationType="slide"
  transparent={true}
  visible={isVisible}
  onRequestClose={() => {
    closeModal();
  }}
>
  <View style={styles.modalContainer}>
    <View style={styles.modalContent}>
      <Text style={styles.modalTitle}>Task Details</Text>
      <View style={styles.detailItem}>
        <Text style={styles.detailLabel}>ID:</Text>
        <Text style={styles.detailValue}>{todo ? todo.id : ''}</Text>
      </View>
      <View style={styles.detailItem}>
        <Text style={styles.detailLabel}>Name:</Text>
        <Text style={styles.detailValue}>{todo ? todo.name : ''}</Text>
      </View>
      <View style={styles.detailItem}>
        <Text style={styles.detailLabel}>Completed:</Text>
        <Text style={styles.detailValue}>
          {todo ? (todo.isCompleted ? 'Yes' : 'No') : ''}
        </Text>
      </View>
      <View style={styles.detailItem}>
        <Text style={styles.detailLabel}>Created:</Text>
        <Text style={styles.detailValue}>{todo ? todo.created : ''}</Text>
      </View>
      <View style={styles.detailItem}>
        <Text style={styles.detailLabel}>Updated:</Text>
        <Text style={styles.detailValue}>{todo && todo.updated ? todo.updated : 'No updated at this time'}</Text>
      </View>
      <TouchableOpacity onPress={() => closeModal()}
                        style={styles.touchableButton}>
            <Text style={styles.buttonText}>Close Modal</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>


  )
}

const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: THEME.COLORS.YELLOW,
      padding: 20,
      borderRadius: 10,
      width: '80%',
    },
    modalTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    detailItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    detailLabel: {
      fontSize: 16,
      fontWeight: 'bold',
      color: THEME.COLORS.GREEN.SOLID,
      
    },
    detailValue: {
      fontSize: 16,
      color: THEME.COLORS.GREEN.SOLID,
      width: 140,
    },
    touchableButton: {
        backgroundColor: THEME.COLORS.MARRON, // Color de fondo del botón
        borderRadius: 5, // Bordes redondeados
        padding: 10, // Relleno interno
        alignItems: 'center', // Alineación vertical en el centro
        marginVertical: 10, // Margen vertical
      },
    buttonText: {
        color: THEME.COLORS.GREEN.PISTACHO, // Color del texto
        fontSize: 16, // Tamaño de fuente
        fontWeight: 'bold', // Negrita
      },
  });
  
