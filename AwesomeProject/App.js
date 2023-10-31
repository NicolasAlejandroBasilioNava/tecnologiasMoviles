import 'react-native-gesture-handler';
import { THEME } from './src/theme/colors';

import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';

import React, { useReducer } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { CalculatorButton } from './src/components/CalculatorButton';
import { RowCalculatorButtons } from './src/components/RowCalculatorButtons';

const initialState = {
  displayNumber: 0,
  operator: '', // Fixed the typo "aperator" to "operator"
  previousNumber: 0,
  currentNumber: 0,
};

function reducer(state, action) {
  if (action.type === 'SELECTED_NUMBER') {
    return {
      ...state,
      currentNumber: action.payload,
    };
  }
  // Always return the state if the action type is not recognized.
  return state;
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSelectNumber = (number) => {
    dispatch({ type: 'SELECTED_NUMBER', payload: number }); // Fixed the double curly braces here
  }

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30, marginHorizontal: 20, color: THEME.COLORS.WHITE.MID}}>
          7 x 
      </Text>
      <View style={{
        backgroundColor: THEME.COLORS.GRAY.LIGHT,
        margin: 20,
        height: 50,
        borderRadius: 20,
        alignItems: 'flex-end',
      }}>
        <Text style={{fontSize: 30, marginHorizontal: 20,}}>5</Text>
      </View>
      <RowCalculatorButtons 
        btn1Text='C' btn1Role='extra'
        btn2Text='%' btn2Role='extra'
        btn3Text='DEL' btn3Role='extra'
        btn4Text='/' btn4Role='operator'
      />
      <RowCalculatorButtons 
        btn1Text='7' btn1Role='number'
        btn2Text='8' btn2Role='number'
        btn3Text='9' btn3Role='number'
        btn4Text='X' btn4Role='operator'
      />
      <RowCalculatorButtons 
        btn1Text='4' btn1Role='number'
        btn2Text='5' btn2Role='number'
        btn3Text='6' btn3Role='number'
        btn4Text='-' btn4Role='operator'
      />
      <RowCalculatorButtons 
        btn1Text='1' btn1Role='number'
        btn2Text='2' btn2Role='number'
        btn3Text='3' btn3Role='number'
        btn4Text='+' btn4Role='operator'
      />
      <RowCalculatorButtons 
        // btn1Text='0' btn1Role='number'
        btn2Text='0' btn2Role='number'
        btn3Text='.' btn3Role='number'
        btn4Text='=' btn4Role='operator'
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BLUE.MID,
    paddingTop: Constants.statusBarHeight,
  },
});
