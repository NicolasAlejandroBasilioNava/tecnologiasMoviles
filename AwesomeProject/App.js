import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, TextInput } from 'react-native';
import { StyledText } from './src/components/StyledText';
import { StyledTouchable } from './src/components/StyledTouchable';


export default function App() {
  const {height, width} = Dimensions.get('screen')

  return (
    <View style={styles.container}>
      <Image source={{
        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png', 
        width: 50,
        height: 50
        }}/>

        <TextInput style={styles.input} placeholder='Escribe aquí' placeholderTextColor={'gray'} />
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
