import { Alert } from "react-native";

export const createErrorButtonAlert = ({errorType, errorText}) =>{
    Alert.alert(
      errorType,
      errorText,
      [{text: 'Accept'}]
    );
  }