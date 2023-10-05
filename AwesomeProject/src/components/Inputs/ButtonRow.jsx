import { View } from "react-native"
import { CircularButton } from "../CirtularButton"
import { THEME } from "../../theme/colors"

export const ButtonRow = ({value1, value2, value3}) => {

    return(
        <View style={{flexDirection: 'row'}}>
          <CircularButton width= {100} height={70} text={value1} backgroundColor={THEME.COLORS.GRAY.DEEP} color={THEME.COLORS.WHITE.SOLID}/>
          <CircularButton width= {100} height={70} text={value2} backgroundColor={THEME.COLORS.GRAY.DEEP} color={THEME.COLORS.WHITE.SOLID}/>
          <CircularButton width= {100} height={70} text={value3} backgroundColor={THEME.COLORS.GRAY.DEEP} color={THEME.COLORS.WHITE.SOLID}/>
        </View>
    )
}