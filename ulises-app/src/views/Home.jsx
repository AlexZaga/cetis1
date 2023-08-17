import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Bienvenidos al CETIS 1</Text>
      <Image source={require('./src/images/cetis1.png')}  style={{width: 150, height: 150}} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9D2449',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
