import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStacknavigator} from '@react-navigation/native-stack'
import Home from './Home'
import About from ' ./About'

const Stack = createNativeStackNavigator()

export default function Main(){
return(
<NavigationContainer>
<Stack.Navigator initialRouteName="Home">
<Stack.Screen Name='Home' component={Home} />  
<Stack.Screen Name='Home' component={About} />   
</Stack.Navigator>
</NavigationContainer> 
)
}

