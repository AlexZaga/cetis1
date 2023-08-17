import React from 'react'
import {NavigationConainer} from '@react-navitation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Home'
import About from './About'

const Stack = createNativeStackNavigator()

export default function Main(){
    return (
        <NavigationConainer>
        <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='About' component={About} />
     </Stack.Navigator>
    </NavigationConainer>
    )
}

