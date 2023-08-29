import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";

export function LoginContent(){
    return(
        <View style= {styles.container}>
            <Text style={styles.label}> Email </Text>
            <TextInput style={styles.input} placeholder="ejemplo@gmail.com"></TextInput>

            <Text style={styles.label}> Password </Text>
            <TextInput style={styles.input} placeholder="....." secureTextEntry={true}></TextInput>

            <Text> Forgot Password?</Text>

            <TouchableOpacity style={styles.touchableButton}>
                <Text style= {styles.touchableText} > Login </Text>
            </TouchableOpacity>
        </View>
    )

}

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
      width: 650,
      height: 40,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 15,
      paddingHorizontal: 10,
      marginVertical: 10,
      marginTop: 5,
      marginBottom: 10,
    },

    touchableButton: {
        backgroundColor: '#c0e863',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        elevation: 3,
        alignSelf: 'center',
        width: 600,
        alignItems: 'center'
      },

      touchableText: {
        color: 'black',
        fontSize: 16,
      },
  })
