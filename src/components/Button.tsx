import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { Styles } from '../styles/GlobalStyles'

interface ButtonProps{
  onPress: () => void;
  title: string;
  isBlue?: boolean;
  isGray?: boolean;
}