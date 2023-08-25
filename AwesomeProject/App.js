import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StyledText } from './src/components/StyledText';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <StyledText text= "Hola mundo" fontSize={40} fontWeight= 'bold'/>
      <StyledText text= "Hola mundo" fontSize={20} />

    <TouchableOpacity>
        <Text> Button</Text>
    </TouchableOpacity>
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
});
