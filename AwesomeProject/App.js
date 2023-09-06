import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';
import Constats from 'expo-constants'
import { Ionicons } from '@expo/vector-icons';
import { androidText } from './src/components/androidText';
import { webText } from './src/components/webText';
import WelcomeScreen from './src/screens/WelcomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <WelcomeScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
    ...Platform.select({
      android:{
        backgroundColor: 'white',
        marginTop: Constats.statusBarHeight,
      },
      web:{
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
      },
      default:{

      }
    })
  },
  text:{
    color: Platform.OS === 'web' ? 'white' : 'black',
  },
});
