import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StyledText } from './src/components/StyledText';
import { StyledTouchable } from './src/components/StyledTouchable';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

      <StyledText text= "Hola Mundo" fontSize={40} bold={true} color={'blue'}/>
      <StyledText text= "Holaaaaa" fontSize={33} highlight={true} uppercase={true} />
      <StyledText text= "Hola" fontSize={40} color={'green'} letterSpacing={7}/>

      <StyledTouchable text= "Button" fontSize={40} padding={4} color={'white'} borderRadius={15} backgroundColor={'navy'}/>
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
