import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function About({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={require('../images/tornocnc1.jpg')} style={styles.image} />
            <Text style={styles.text}>Cuando hablamos de torno CNC, nos referimos a un tipo de torno de control numérico, diseñado para la fabricación de piezas mecanizadas de manera automática</Text>
            <Text style={styles.text}>Es una máquina controlada a partir de un software que permite la automatización del proceso de torneado desde una computadora.</Text>            
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
