import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useAppContext } from '../context/AppContext';
import { Ionicons } from '@expo/vector-icons';


const ThemeToggle = () => {
  const { toggleTheme, themeImage, isDarkMode } = useAppContext();

  return (
    <TouchableOpacity onPress={toggleTheme} style={styles.button}>
        <View>
            {isDarkMode
    ? <Ionicons name="sunny" size={24} color="white" />
    : <Ionicons name="md-moon" size={24} color="white" />}
        </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },

});

export default ThemeToggle;
