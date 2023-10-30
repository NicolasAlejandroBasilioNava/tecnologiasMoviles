import { TouchableOpacity } from 'react-native';

export const CalculatorButton = ({text, role}) => {

  const buttonStyle = role == 'button' ? number : operator;
  return(
    <TouchableOpacity style={buttonStyle}>
        <Text>{text}</Text>
    </TouchableOpacity>
  )
}

const number = StyleSheet.create({

})

const operator = StyleSheet.create({

})