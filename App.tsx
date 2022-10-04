import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyKeyboard from './src/components/MyKeyboarrd';

export default function App() {
  return (
    <View>
      <MyKeyboard />
    </View>
  );
}

