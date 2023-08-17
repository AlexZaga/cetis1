import Rect from 'react'
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "./Home"
import About from "./About"

const Stack = createNativeStackVavigator()

export default function Main() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="About" component={About}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
