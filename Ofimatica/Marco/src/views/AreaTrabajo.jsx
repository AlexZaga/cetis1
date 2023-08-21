import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, Platform } from 'react-native';

export default function Splash({ navigation }) {

  return (
    <>
      <View style={styles.container}>
        <ImageBackground source={null} resizeMode='cover' style={styles.image}>
          <Image style={styles.tinylogo} source={require('../images/yop1.jpg') } />
          <Text style={styles.mensaje}>¡Tu opinión es importante,</Text>
          <Text style={styles.mensaje}>no olvides dejar tus comentarios!</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.button}>Página Principal</Text>
          </TouchableOpacity>
          <View style={styles.footer}>
            <Text style={styles.version}>Marco Antonio Ponce Padilla</Text>
          </View>
          <StatusBar style="auto" hidden={true} />
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  mensaje: {
    textAlign: 'center',
    color: '#000',
    fontSize: 25
  },
  tinylogo: {
    width: 250,
    height: 380,
  },
  button : {
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'blue'
  },
  text : {
    color: '#fff'
  },
  spinner: {
    marginTop: 25
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35
  },
  version : {
    color: '#006',
    fontSize: 12,
    marginTop: 15
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#009999',
    padding: 10,
    marginTop: 25,
    color: '#ffffff'
  },
  footer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems:'flex-end',
    marginTop: 10
  }
})