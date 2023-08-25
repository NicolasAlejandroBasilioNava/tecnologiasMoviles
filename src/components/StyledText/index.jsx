import { Text, StyleSheet } from "react-native"

export const StyledText = ({text, fontSize, fontWeight, bold}) =>{

   /* const customStyles= {
        bold: bold && styles.bold
    }
    */
    return(
        <Text style={{fontSize, fontWeight}}> { text } </Text>
       // <Text customStyles> { text } </Text>
    )
}

const styles = StyleSheet.create({
    bold:{
        fontWeight: 'bold'
    }
})