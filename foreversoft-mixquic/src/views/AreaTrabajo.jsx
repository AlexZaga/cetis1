import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function About({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={require('../images/SPA.png')} style={styles.image} />
            <Text style={styles.text}>Somos una clinica de estetica y belleza donde encontraras el tratamiento que tu cuerpo necesita</Text>
            <Text style={styles.text}>Ven con nosotros para aliviar el estres y la tension a traves de nuestra cama de jade, tratamientos faciales y corporales.</Text>            
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
