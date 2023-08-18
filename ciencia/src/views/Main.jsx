import React from "react"
import { NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "./Home"
import About from "./Acerca"
import AreaTrabajo from "./areatrabajo"
const Stack = createNativeStackNavigator()

export default function Main(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="home" componet={Home} />
                <Stack.Screen name="About" componet={About} />
                <Stack.Screen name="Area de trabajo" componet={AreaTrabajo} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
