import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, ScrollView, FlatList } from 'react-native';
import Login from './src/screens/Login'
import { Card } from './src/components/cards';


const personas = [
  {id: 0, name: 'Nicolás', lastName:'Basilio', image:'https://img.freepik.com/vector-premium/retrato-hombre-joven-imagen-icono-marco-color-redondeado_24911-7129.jpg'},
  {id: 1, name: 'Eder', lastName:'Rivera', image:'https://img.freepik.com/vector-premium/dibujos-animados-jovenes_24911-32733.jpg'},
  {id: 2, name: 'Rogelio', lastName:'Luna', image:'https://img.freepik.com/vector-premium/retrato-hombre-joven-imagen-icono-marco-color-redondeado_24911-7138.jpg?w=826'},
  {id: 3, name: 'Pedro', lastName:'Barrita', image:'https://img.freepik.com/vector-premium/retrato-hombre-joven-imagen-icono-marco-color-redondeado_24911-7129.jpg'},
  {id: 4, name: 'Francisco', lastName:'Villegas', image:'https://img.freepik.com/vector-premium/dibujos-animados-jovenes_24911-32733.jpg'},
  {id: 5, name: 'Gabriel', lastName:'Garcia', image:'https://img.freepik.com/vector-premium/retrato-hombre-joven-imagen-icono-marco-color-redondeado_24911-7138.jpg?w=826'},
]

export default function App() {
  const {height, width} = Dimensions.get('screen')

  return (
    <View style={styles.container}>
    {/*<Login />*/}
    <FlatList 
      data={personas}
      renderItem={({item: {name, lastName, image}, index}) =>
      <Card name={name} lastName={lastName} uri= {image}/>
      }
      ItemSeparatorComponent={()=><Text>  </Text>}
      keyExtractor={(item) => item.id}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
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
