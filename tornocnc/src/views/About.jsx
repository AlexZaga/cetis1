import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function About({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={require('../images/fresadora.png')} style={styles.image} />
            <Text style={styles.text}>La fresadora CNC surge para elaborar piezas que tengan una exactitud milimétrica.</Text>
            <Text style={styles.text}>Gracias al Control Numérico por Computadora, a través de un ordenador se podrá programar la fresadora para distintas funciones como lijar, dibujar o cortar, entre otras.</Text>            
            <StatusBar style="auto" hidden={true} />
            <View>
                <Button title='Volver al inicio' onPress={() => navigation.navigate('Home')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 400
    },
    text: {
        padding: 15,
        textAlign: 'justify'
    }
})
