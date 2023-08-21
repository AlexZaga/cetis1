import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function About({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={require('../images/imagen2.png')} style={styles.image} />
            <Text style={styles.text}>La cultura se adquiere leyendo libros; pero el conocimiento del mundo, que es mucho más necesario, sólo se alcanza leyendo a los hombres y estudiando las diversas ediciones que de ellos existen”. Lord Chesterfield.</Text>
            <Text style={styles.text}>La amistad duplica las alegrías y divide las angustias por la mitad</Text>            
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
        backgroundColor: '#8FF7E6',
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
