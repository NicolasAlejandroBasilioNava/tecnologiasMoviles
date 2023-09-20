import { TouchableHighlight, TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { Input } from "./Inputs/Input";
import { ItemButton } from "./ItemButton";
import { IconButton } from "./IconButton";
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { THEME } from "../theme/colors";
import { Ionicons } from '@expo/vector-icons';

export const TaskButton = ({id, name, onPressFunction, handleDelete, handleComplete, createdAt, updatedAt, isCompleted}) => (
    <TouchableOpacity onPress={()=> onPressFunction}>
        <View style={styles.button}>
            <View style={{width: 200}}>
                <Text style={[{fontSize: 20, fontWeight: '500', color: THEME.COLORS.GREEN.SOLID}, isCompleted? {textDecorationLine: 'line-through', color: THEME.COLORS.MARRON} : null]}>{name}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', gap: 20}}>
                <IconButton icon={<Feather name="edit-3" size={24} color="#1f5514" />}/>
                <IconButton onPressFunction={()=>handleDelete(id)} icon={<MaterialCommunityIcons name="delete-outline" size={24} color="#5b2f13" />}/>
                <IconButton onPressFunction={()=> handleComplete(id)} 
                            icon= {!isCompleted?  <Ionicons name="checkmark-done-sharp" size={24} color="#1f5514" /> :
                                                <Ionicons name="arrow-undo-sharp" size={24} color="#5b2f13" />
                        }
                                
                />
            </View>
        </View>
        <View>
            {createdAt ? <Text style={styles.stampsText}>Created: {createdAt}</Text> : null}
            {updatedAt ? <Text style={styles.stampsText}> {isCompleted? 'Completed: ' : 'Updated: '} {updatedAt}</Text> : null}
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
    stampsText:{
        fontSize: 12,
        fontWeight: '300',
        color: THEME.COLORS.MARRON
    }
})