import React from "react";
import { View } from "react-native";
import { CalculatorButton } from "./CalculatorButton";

export const RowCalculatorButtons = ({
  btn1Text,
  btn1Role,
  btn2Text,
  btn2Role,
  btn3Text,
  btn3Role,
  btn4Text,
  btn4Role,
  onButtonPress, // New prop to handle button presses
}) => (
  <View style={{ flexDirection: "row", justifyContent: "center" }}>
    <CalculatorButton text={btn1Text} role={btn1Role} onPress={() => onButtonPress(btn1Text)} />
    <CalculatorButton text={btn2Text} role={btn2Role} onPress={() => onButtonPress(btn2Text)} />
    <CalculatorButton text={btn3Text} role={btn3Role} onPress={() => onButtonPress(btn3Text)} />
    <CalculatorButton text={btn4Text} role={btn4Role} onPress={() => onButtonPress(btn4Text)} />
  </View>
);
