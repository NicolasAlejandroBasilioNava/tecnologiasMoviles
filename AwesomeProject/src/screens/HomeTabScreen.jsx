import { View, Text, StyleSheet, TextInput, Image }  from 'react-native';
import Constats from 'expo-constants'
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { THEME } from '../theme/colors';
import { ProductCard } from '../components/ProductCard';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function HomeTabScreen({navigation}){
    const openDrawer = () => {
        navigation.openDrawer(); // Abre el Drawer Menu
      };
    return(
        <View style={styles.container}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20}}>
                <MaterialCommunityIcons onPress={openDrawer} name="dots-square" size={34} color="#55afb1" />
                <Ionicons name="notifications-sharp" size={30} color="black" />
            </View>
            <Text style={{fontSize: 20, fontWeight: '400'}}>Store for fast food & etc</Text>
            <View style={styles.searchContainer}>
                <Feather name="search" size={24} color="#55afb1" />
                <TextInput placeholder='burgers' style={{ width: '80%'}}/>
                <FontAwesome5 name="grip-lines" size={24} color="black" />
            </View>
            <View style={{marginBottom: 40,}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{
                    backgroundColor: THEME.COLORS.BLUE.TURKISH, marginHorizontal: 10, justifyContent: 'center',
                    height: 40, alignItems: 'center', width: 80, borderRadius: 15,
                }}><Text style={{color: THEME.COLORS.WHITE.SOLID}}>Burgers</Text></View>
                <View style={{
                    backgroundColor: THEME.COLORS.WHITE.OSTION, marginHorizontal: 10, justifyContent: 'center',
                    height: 40, alignItems: 'center', width: 80, borderRadius: 15,
                }}><Text style={{color: THEME.COLORS.BLACK}}>Snacks</Text></View>
                <View style={{
                    backgroundColor: THEME.COLORS.WHITE.OSTION, marginHorizontal: 10, justifyContent: 'center',
                    height: 40, alignItems: 'center', width: 80, borderRadius: 15,
                }}><Text style={{color: THEME.COLORS.BLACK}}>Drinks</Text></View>
                <View style={{
                    backgroundColor: THEME.COLORS.WHITE.OSTION, marginHorizontal: 10, justifyContent: 'center',
                    height: 40, alignItems: 'center', width: 80, borderRadius: 15,
                }}><Text style={{color: THEME.COLORS.BLACK}}>Pizza</Text></View>
            </ScrollView>
            </View>
            <View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <ProductCard productName={'Chicken burger'} cost={'24.99'} image={'https://static.vecteezy.com/system/resources/previews/021/665/613/original/beef-burger-isolated-png.png'}/>
                    <ProductCard productName={'Chicken burger'} cost={'24.99'} image={'https://static.vecteezy.com/system/resources/previews/021/665/613/original/beef-burger-isolated-png.png'}/>
                    <ProductCard productName={'Chicken burger'} cost={'24.99'} image={'https://static.vecteezy.com/system/resources/previews/021/665/613/original/beef-burger-isolated-png.png'}/>
                    <ProductCard productName={'Chicken burger'} cost={'24.99'} image={'https://static.vecteezy.com/system/resources/previews/021/665/613/original/beef-burger-isolated-png.png'}/>
                    <ProductCard productName={'Chicken burger'} cost={'24.99'} image={'https://static.vecteezy.com/system/resources/previews/021/665/613/original/beef-burger-isolated-png.png'}/>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: Constats.statusBarHeight + 50,
        paddingHorizontal: 15,
    },
    searchContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 40,
        backgroundColor: THEME.COLORS.WHITE.OSTION,
        paddingHorizontal: 10,
        borderRadius: 15,
        marginVertical: 25,
    },
})

