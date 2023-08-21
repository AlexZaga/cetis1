import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function About({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={require('../images/HOLA.png')} style={styles.image} />
            <Text style={styles.text}>En foreversoft cuidamos todos los detalles para ofrecerte una experiencia excepcional.</Text>
            <Text style={styles.text}>Agenda hoy una cita de valoración sin costo y pongamos a prueba el tratamiento personalizado para ti.</Text>            
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
