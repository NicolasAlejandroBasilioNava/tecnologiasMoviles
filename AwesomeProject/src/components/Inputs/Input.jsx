import React from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";
import { THEME } from "../../theme/colors";

export const Input = ({ label, placeholder, password, value, onChangeText }) => (
  <View style={styles.inputContainer}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      secureTextEntry={password ? true : false}
      value={value} // Pasa el valor
      onChangeText={onChangeText} // Pasa la función de cambio de texto
    />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 20,
  },
  label: {
    fontWeight: "500",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: THEME.COLORS.GRAY.MID,
    height: 40,
    fontWeight: "200",
    color: THEME.COLORS.GRAY.MID,
  },
});
