import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, ScrollView, FlatList } from 'react-native';
import Login from './src/screens/Login'


const personas = [
  {id: 0, name: 'Nick', lastName:'Basilio'},
  {id: 1, name: 'Eder', lastName:'Rivera'},
  {id: 2, name: 'Alan', lastName:'Garcia'},
  {id: 3, name: 'Pedro', lastName:'Barrita'},
]

export default function App() {
  const {height, width} = Dimensions.get('screen')

  return (
    <View style={styles.container}>
    {/*<Login />*/}
    <FlatList 
      data={personas}
      renderItem={(item) => 
          <View>
            <Text style={{fontSize: 50, color: 'black'}}>{item.name}</Text>
            <Text style={{fontSize: 50, color: 'black'}}>{item.lastName}</Text>
          </View>
        
        
        
      }
      ItemSeparatorComponent={()=>{<Text>HOLA</Text>}}
      keyExtractor={(item) => item.id}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
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
