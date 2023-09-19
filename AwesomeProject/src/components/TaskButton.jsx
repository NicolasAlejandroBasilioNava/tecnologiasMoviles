import { TouchableHighlight, TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { Input } from "./Inputs/Input";
import { ItemButton } from "./ItemButton";
import { IconButton } from "./IconButton";
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { THEME } from "../theme/colors";

export const TaskButton = ({name, onPressFunction}) => (
    <TouchableOpacity onPress={onPressFunction}>
        <View style={styles.button}>
            <View style={{width: 200}}>
                <Text style={{fontSize: 20, fontWeight: '500', color: THEME.COLORS.MARRON}}>{name}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', gap: 20}}>
                <IconButton icon={<Feather name="edit-3" size={24} color="#1f5514" />}/>
                <IconButton icon={<MaterialCommunityIcons name="delete-empty-outline" size={24} color="#5b2f13" />}/>
            </View>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    button:{
        paddingVertical: 10,
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        textAlign: 'center',
        borderBottomWidth: 1,
        borderColor: THEME.COLORS.GREEN.SOLID,
    },
})