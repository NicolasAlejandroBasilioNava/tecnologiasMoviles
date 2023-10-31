import { View } from "react-native";
import { CalculatorButton } from "./CalculatorButton";

export const RowCalculatorButtons = ({
  btn1Text, btn1Role,
  btn2Text, btn2Role,
  btn3Text, btn3Role,
  btn4Text, btn4Role,
}) =>(
  <View style={{flexDirection: 'row', justifyContent: 'center'}}>
    <CalculatorButton text={btn1Text} role={btn1Role}/>
    <CalculatorButton text={btn2Text} role={btn2Role}/>
    <CalculatorButton text={btn3Text} role={btn3Role}/>
    <CalculatorButton text={btn4Text} role={btn4Role}/>
  </View>
)