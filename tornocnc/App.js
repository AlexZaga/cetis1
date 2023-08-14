import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Programación en Torno CNC </Text>
      <Text>Los Tornos CNC son máquinas herramienta que a través de un software de computadora
         producen piezas mecánicas en cantidades y con excelente precisión.
      </Text>
      <Text>Las figuras de las piezas que producen los tornos CNC son muy variables, 
          pueden ser planas, cilindricas, cónicas, esféricas, roscadas, perfiladas, entre otros.
      </Text>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
