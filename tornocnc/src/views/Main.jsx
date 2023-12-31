import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Home'
import About from './About'
import AreaTrabajo from './AreaTrabajo'

const Stack = createNativeStackNavigator()

export default function App() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name= 'Home'component={Home} />
                <Stack.Screen name= 'About'component={About} />
                <Stack.Screen name= 'Area de Trabajo'component={AreaTrabajo} />
                </Stack.Navigator>
                </NavigationContainer>
 ) 
}



    
