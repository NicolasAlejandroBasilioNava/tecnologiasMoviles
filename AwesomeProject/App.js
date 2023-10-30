import 'react-native-gesture-handler';
import { THEME } from './src/theme/colors';

import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { useReducer } from 'react';

const initialState = {
  displayNumber: 0,
  aperator: '',
  previousNumber: 0,
  currentNumber: 0,
}

function reducer(state, action){
  if(action.type === 'SELECTED_NUMBER'){
    return(
      ...state,
      currentNumber: action.payload,
    )
  }
}

export default function App() {
 
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSeclectNumber = (number) =>{
    dispatch{{type: 'SELECTED_NUMBER', payload: number}}
  }

  return (
    <View style={styles.container}>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});