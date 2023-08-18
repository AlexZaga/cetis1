import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStacknavigator} from '@react-navigation/native-stack'
import Home from './Home'
import About from ' ./About'
import AreadeTrabajo from './AreadeTrabajo'

const Stack = createNativeStacknavigator()

export default function Main(){
return(
<NavigationContainer>
<Stack.Navigator initialRouteName="Home">
<Stack.Screen Name='Home' component={Home} />  
<Stack.Screen Name='About' component={About} />  
<Stack.Screen Name='AreadeTrabajo' component={AreadeTrabajo} />  
</Stack.Navigator>
</NavigationContainer> 
)
}

