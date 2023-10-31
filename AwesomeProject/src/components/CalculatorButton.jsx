import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { THEME } from '../theme/colors';

export const CalculatorButton = ({ text, role, onPress }) => {
  const buttonStyle = role === "number" ? styles.number : role === "operator" ? styles.operator : role === "extra" ? styles.extra : styles.none;

  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={() => onPress(text)}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 80,
    height: 80,
    borderRadius: 40, // Makes the button circular
    marginHorizontal: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  number: {
    backgroundColor: THEME.COLORS.BLUE.DARK, // Blue color for number buttons
  },
  operator: {
    backgroundColor: THEME.COLORS.CREAM, // Cream color for operator buttons
  },
  extra: {
    backgroundColor: THEME.COLORS.GRAY.LIGHT, // Gray color for extra buttons
  },
  none:{

  }
});
