import { StyleSheet, Text, View, Image, Dimensions, TextInput, ScrollView, FlatList } from 'react-native';
import Constats from 'expo-constants'
import { THEME } from './src/theme/colors';
import WelcomeBackScreen from './src/screens/WelcomeBackScreen';
import CreateAccountScreen from './src/screens/CreateAccountScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <WelcomeScreen /> */}
      {/* <WelcomeBackScreen /> */}
      {/* <CreateAccountScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.WHITE,
    marginTop: Constats.statusBarHeight,
  },

});
