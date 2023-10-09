import { View, StyleSheet } from "react-native"
import { CircularButton } from "../CirtularButton"
import { THEME } from "../../theme/colors"
import { useAppContext } from "../../context/AppContext"

export const ButtonRow = ({value1, value2, value3}) => {
  const {isDarkMode} = useAppContext()

  const styles= isDarkMode ? darkTheme : lightTheme

    return(
        <View style={{flexDirection: 'row',}}>
          <CircularButton width= {100} height={70} text={value1} backgroundColor={styles.text.backgroundColor} color={styles.text.color}/>
          <CircularButton width= {100} height={70} text={value2} backgroundColor={styles.text.backgroundColor} color={styles.text.color}/>
          <CircularButton width= {100} height={70} text={value3} backgroundColor={styles.text.backgroundColor} color={styles.text.color}/>
        </View>
    )
}

const darkTheme = StyleSheet.create({
  text:{
    color: THEME.COLORS.WHITE.SOLID,
    backgroundColor: THEME.COLORS.GRAY.DEEP,
  }
})

const lightTheme = StyleSheet.create({
  text:{
    color: THEME.COLORS.BLACK,
    backgroundColor: THEME.COLORS.CREAM,
  }
})