import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, ScrollView, FlatList } from 'react-native';
import Pantalla1 from './src/screens/Pantalla1'
import { Card } from './src/components/cards';
import Pantalla2 from './src/screens/Pantalla2';
import Constats from 'expo-constants'
import { THEME } from './src/theme/colors';


const personas = [
  {id: 0, name: 'Nicolás', lastName:'Basilio', image:'https://img.freepik.com/vector-premium/retrato-hombre-joven-imagen-icono-marco-color-redondeado_24911-7129.jpg'},
  {id: 1, name: 'Eder', lastName:'Rivera', image:'https://img.freepik.com/vector-premium/dibujos-animados-jovenes_24911-32733.jpg'},
  {id: 2, name: 'Rogelio', lastName:'Luna', image:'https://img.freepik.com/vector-premium/retrato-hombre-joven-imagen-icono-marco-color-redondeado_24911-7138.jpg?w=826'},
  {id: 3, name: 'Pedro', lastName:'Barrita', image:'https://img.freepik.com/vector-premium/retrato-hombre-joven-imagen-icono-marco-color-redondeado_24911-7129.jpg'},
  {id: 4, name: 'Francisco', lastName:'Villegas', image:'https://img.freepik.com/vector-premium/dibujos-animados-jovenes_24911-32733.jpg'},
  {id: 5, name: 'Gabriel', lastName:'Garcia', image:'https://img.freepik.com/vector-premium/retrato-hombre-joven-imagen-icono-marco-color-redondeado_24911-7138.jpg?w=826'},
]

export default function App() {
  return (
    <View style={styles.container}>
      <Pantalla2 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.ORANGE.SOLID,
    marginTop: Constats.statusBarHeight,
  },

});
