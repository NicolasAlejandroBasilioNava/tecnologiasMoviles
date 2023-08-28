import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, TextInput } from 'react-native';
import Login from './src/screens/Login'


export default function App() {
  const {height, width} = Dimensions.get('screen')

  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input:{
    borderWidth: 1,
    width: 200,
    height: 50,
    borderRadius: 10,
    paddingHorizontal:10,
    marginVertical: 10,
    
  }
});
