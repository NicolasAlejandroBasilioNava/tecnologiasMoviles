import 'react-native-gesture-handler';
import { THEME } from './src/theme/colors';

import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';

import React, { useReducer } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { CalculatorButton } from './src/components/CalculatorButton';
import { RowCalculatorButtons } from './src/components/RowCalculatorButtons';

const initialState = {
  displayNumber: '0',
  operator: '',
  previousNumber: 0,
  currentNumber: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'SELECTED_NUMBER':
      if (state.operator) {
        return {
          ...state,
          currentNumber: state.currentNumber
            ? state.currentNumber + action.payload
            : action.payload,
          displayNumber: state.displayNumber + action.payload,
        };
      } else {
        return {
          ...state,
          currentNumber: state.currentNumber
            ? state.currentNumber + action.payload
            : action.payload,
          displayNumber:
            state.displayNumber === '0'
              ? action.payload
              : state.displayNumber + action.payload,
        };
      }
    case 'SELECTED_OPERATOR':
      if (state.operator) {
        // Handle consecutive operators
        return {
          ...state,
          operator: action.payload,
          displayNumber: state.displayNumber.replace(
            new RegExp(`\\${state.operator}$`),
            action.payload
          ),
        };
      } else {
        return {
          ...state,
          operator: action.payload,
          previousNumber: state.currentNumber,
          currentNumber: null,
          displayNumber: state.displayNumber + action.payload,
        };
      }
    case 'CALCULATE':
      if (state.operator && state.currentNumber !== null) {
        // Parse the strings as floating-point numbers
        const previousNumber = parseFloat(state.previousNumber);
        const currentNumber = parseFloat(state.currentNumber);
    
        // Perform calculations based on the selected operator
        let result;
        switch (state.operator) {
          case '+':
            result = previousNumber + currentNumber;
            break;
          case '-':
            result = previousNumber - currentNumber;
            break;
          case 'X':
            result = previousNumber * currentNumber;
            break;
          case '/':
            result = previousNumber / currentNumber;
            break;
          default:
            result = currentNumber;
        }
    
        // Devuelve el nuevo estado con los cálculos realizados
        return {
          displayNumber: result.toString(),
          operator: '',
          previousNumber: 0,
          currentNumber: result,
        };
      }
      return state;
      
    case 'CLEAR':
      return {
        displayNumber: '0',
        operator: '',
        previousNumber: 0,
        currentNumber: 0,
      }
    
    case 'DELETE':
      if (state.currentNumber) {
        const newCurrentNumber = state.currentNumber.slice(0, -1);
        const updatedCurrentNumber = newCurrentNumber === '' ? '0' : newCurrentNumber;
        return {
          ...state,
          currentNumber: updatedCurrentNumber,
          displayNumber: state.previousNumber && state.operator
          ? state.previousNumber + state.operator + updatedCurrentNumber
          : updatedCurrentNumber,
        };
      }
      return state;

    case 'PERCENT':
      if (state.currentNumber) {
        const percentValue = parseFloat(state.currentNumber) / 100;
        const displayNumber =
          state.previousNumber && state.operator
            ? state.previousNumber + state.operator + percentValue.toString()
            : percentValue.toString();
    
        return {
          ...state,
          currentNumber: percentValue.toString(),
          displayNumber: displayNumber,
        };
      }
      return state;
      
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSelectNumber = (number) => {
    dispatch({ type: 'SELECTED_NUMBER', payload: number });
  };

  const handleSelectOperator = (operator) => {
    dispatch({ type: 'SELECTED_OPERATOR', payload: operator });
  };

  const handleCalculate = () => {
    dispatch({ type: 'CALCULATE' });
  };

  const handleClear = () => {
    dispatch({ type: 'CLEAR' });
  };

  const handleDelete = () =>{
    dispatch({ type: 'DELETE' })
  }

  const handlePercent = () => {
    dispatch({ type: 'PERCENT' })
  }

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30, marginHorizontal: 20, color: THEME.COLORS.WHITE.MID}}>
        Calculadora
      </Text>
      <View style={{
        backgroundColor: THEME.COLORS.GRAY.LIGHT,
        margin: 20,
        height: 50,
        borderRadius: 20,
        alignItems: 'flex-end',
      }}>
        <Text style={{fontSize: 30, marginHorizontal: 20,}}>
          {state.displayNumber}
        </Text>
      </View>
      <RowCalculatorButtons
        btn1Text="C"
        btn1Role="extra"
        btn2Text="%"
        btn2Role="extra"
        btn3Text="DEL"
        btn3Role="extra"
        btn4Text="/"
        btn4Role="operator"
        onButtonPress={(text) => {
          if (text === 'C') {
            handleClear();
          } else if (text === 'DEL') {
            handleDelete()
          } else if (text === '=') {
            handleCalculate();
            console.log(state.currentNumber)
          } else if(text === '%'){
            handlePercent()
          }else{
            handleSelectOperator(text);
          }
        }}
      />
      <RowCalculatorButtons
        btn1Text="7"
        btn1Role="number"
        btn2Text="8"
        btn2Role="number"
        btn3Text="9"
        btn3Role="number"
        btn4Text="X"
        btn4Role="operator"
        onButtonPress={(text) => {
          if (text === 'X'){
            handleSelectOperator(text);
          }else{
            handleSelectNumber(text)
          }
        }}
      />
      <RowCalculatorButtons
        btn1Text="4"
        btn1Role="number"
        btn2Text="5"
        btn2Role="number"
        btn3Text="6"
        btn3Role="number"
        btn4Text="-"
        btn4Role="operator"
        onButtonPress={(text) => {
          if (text === '-'){
            handleSelectOperator(text);
          }else{
            handleSelectNumber(text)
          }
        }}
      />
      <RowCalculatorButtons
        btn1Text="1"
        btn1Role="number"
        btn2Text="2"
        btn2Role="number"
        btn3Text="3"
        btn3Role="number"
        btn4Text="+"
        btn4Role="operator"
        onButtonPress={(text) => {
          if (text === '+'){
            handleSelectOperator(text);
          }else{
            handleSelectNumber(text)
          }
        }}
      />
      <RowCalculatorButtons
        btn1Text="00"
        btn1Role="number"
        btn2Text="0"
        btn2Role="number"
        btn3Text="."
        btn3Role="number"
        btn4Text="="
        btn4Role="operator"
        onButtonPress={(text) => {
          if (text === '=') {
            console.log(state.currentNumber)
            console.log(state.previousNumber)
            handleCalculate();
          }else if( text === '.'){
            //Handle .
            handleSelectNumber(text)
          }else{
            handleSelectNumber(text)
          }
        }}
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
