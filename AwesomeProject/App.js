import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, ScrollView, FlatList } from 'react-native';
import Constats from 'expo-constants'
import { THEME } from './src/theme/colors';
import WelcomePage from './src/screens/WelcomePage';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Pantalla1 /> */}
      {/* <Pantalla2 /> */}
      <WelcomePage />
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
