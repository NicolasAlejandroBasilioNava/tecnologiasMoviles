import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { THEME } from "../../theme/colors";
import { googleImage } from "../../../assets";

export function LoginContent(){
    return(
        <View style= {styles.container}>
            <Text style={styles.label}> Email </Text>
            <TextInput style={styles.input} placeholder="ejemplo@gmail.com"></TextInput>

            <Text style={styles.label}> Password </Text>
            <TextInput style={styles.input} placeholder="*********" secureTextEntry={true}></TextInput>

            <Text style={styles.text}> Forgot Password?</Text>

            <TouchableOpacity style={styles.touchableButton}>
                <Text style= {styles.touchableText} > Login </Text>
            </TouchableOpacity>

            <View style= {{flexDirection: 'row', gap: 20}}>
              <View style= {styles.line}></View>
              <Text> Or login with</Text>
              <View style= {styles.line}></View>
            </View>

            <View>
              <TouchableOpacity>
                <Image />
                <Text>Google</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Image source={googleImage}/>
                <Text>Facebook</Text>
              </TouchableOpacity>
            </View>
        </View>
        
        
    )

}

const {DARKBLUE, GREEN:{LIGHT: GREENLIGHT} , WHITE} = THEME.COLORS

const styles = StyleSheet.create({
    container: {
      justifyContent: "flex-start",
      alignItems: "flex-start",
      paddingHorizontal: 20,
      paddingVertical: 10,
    },

    

    label: {
      marginBottom: 5,
      color: 'gray',
    },

    input: {
      width: 300,
      height: 50,
      borderWidth: 1,
      borderColor: THEME.COLORS.DARKBLUE,
      borderRadius: 15,
      paddingHorizontal: 10,
      marginVertical: 10,
      marginTop: 5,
      marginBottom: 10,
    },

    text: {
      color: THEME.COLORS.GREEN.LIGHT,
      fontSize: 13,
      textAlign: 'right',
      fontWeight: 'bold',
      alignSelf: 'flex-end',
      paddingVertical: 10,
    },

    touchableButton: {
        backgroundColor: THEME.COLORS.GREEN.LIGHT,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        elevation: 3,
        alignSelf: 'center',
        width: 300,
        alignItems: 'center'
      },

      touchableText: {
        color: 'black',
        fontSize: 16,
      },

      line: {
        borderWidth: 1,
      },
  })
