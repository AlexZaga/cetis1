import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function About({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={require('../images/imagen1.png')} style={styles.image} />
            <Text style={styles.text}>Esta es una aplicaci&oacute;n Demo creada para el curso de React Native en el plantel del CETIS No. 1.</Text>
            <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ratione debitis optio ad mollitia enim deserunt nemo rem atque repudiandae, voluptatibus dicta deleniti, quia totam qui minima explicabo, aut rerum.</Text>            
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

