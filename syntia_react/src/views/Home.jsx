import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, Button, Platform } from 'react-native';

export default function Splash({ navigation }) {

  return (
    <>
      <View style={styles.container}>
        <ImageBackground source={null} resizeMode='cover' style={styles.image}>
          <Image style={styles.tinylogo} source={{ uri: 'https://matematicas.uno/wp-content/uploads/2020/11/Geometria-analitica-1.png' }} />
          <Text style={styles.mensaje}></Text>
         <Text style={styles.mensaje}>Centro de Estudios Tecnol&oacute;gicos</Text>
          <Text style={styles.mensaje}>Industriales y de Servicio</Text>
          <Text style={styles.mensaje}>No. 1</Text>
          <Text style={styles.mensaje}>Realizado por: Syntia Hernandez Estrada</Text>

          <View style={styles.buttons_area}>
            <Button title='Area de Trabajo' onPress={() => navigation.navigate('Area de Trabajo')} />
            <Text>&nbsp;&nbsp;&nbsp;&nbsp;</Text>
            <Button title='Acerca de...' onPress={() => navigation.navigate('About')} />
          </View>
          
          <View style={styles.footer}>
            <Text style={styles.version}>Cetis no. 1</Text>
          </View>
        </ImageBackground>
        <StatusBar style="auto" hidden={true} />
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
    width: 350,
    height: 380,
  },
  text : {
    color: '#E704B7'
  },
  spinner: {
    marginTop: 25
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 35
  },
  version : {
    color: '#006',
    fontSize: 12,
    marginTop: 15
  },
  button: {
    backgroundColor: '#009999',
  },
  footer: {
    flex: 1,
    flexDirection: 'row'
  },
  buttons_area: {
    flex: 1,
    flexDirection: 'row'
  }
})
