import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity } from "react-native";
import { NavBar } from "../components/Welcome/NavBar";
import { THEME } from "../theme/colors";
import { WelcomeCard } from "../components/Welcome/WelcomeCard";
import { welcomeCardsDATA as WCARDS } from "../constants/welcomeCardsDATA";
import { symptomsCardsDATA as SYMCARDS } from "../constants/symptomsCardsDATA";
import { SymptomCard } from "../components/Welcome/SymptomsCard";
import { therapistsCardData as THERAPISTCARDS } from "../constants/therapistsCardsDATA";
import { TherapistsCard } from "../components/Welcome/TherapistsCard";
import { HomeMenu } from "../components/Welcome/HomeMenu";
import { SearchInput } from "../components/Welcome/SearchInput";
import { MaterialIcons } from '@expo/vector-icons';
import { FilterCard } from "../components/Welcome/FilterCard";
import { productsCardsData as PRODUCTDATA } from "../constants/productsCardsData";
import { ProductCard } from "../components/Welcome/ProductsCard";

export default function WelcomePage(){

    return(
        <View>
            <NavBar />
           <View style={styles.textContainer}>
                <SearchInput />
                <TouchableOpacity style={styles.filterButon}>
                    <MaterialIcons name="settings-input-component" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <ScrollView style={{marginHorizontal: 15}} horizontal showsHorizontalScrollIndicator={false}>
                <FilterCard filterName='Miniso'/>
                <FilterCard filterName='Neurso'/>
            </ScrollView>
            <Text style={styles.subText}>Popular Product</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                { PRODUCTDATA.map(({ productType, productName, price, image },index ) =>
                    <ProductCard productType={productType} productName={productName} price={price} image={image}/>)
                }
            </ScrollView>
            
            <HomeMenu />
        </View>
    )
}

const styles= StyleSheet.create({
    textContainer:{
        flexDirection: 'row',
        gap: 5,
        marginHorizontal: 15,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    filterButon:{
        height: 60,
        width: 60,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: THEME.COLORS.CANARY,
    },
    titleText:{
        fontSize: 30,
        fontWeight: 'bold',
    },
    subText:{
        marginHorizontal: 15,
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    therapistList:{
        height: 190,
    }
})