import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Componentes
import Home from "./components/home/home";
import Detail from "./components/detail/detail";
import Information from "./components/information/information";
import Commics from "./components/comics/Commics";
import Comic from "./components/Comic/Cominc";
import Perfil from "./components/perfil/perfil";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Information" component={Information} />
        <Stack.Screen name="Commics" component={Commics} />
        <Stack.Screen name="Comic" component={Comic} />
        <Stack.Screen name="About" component={Perfil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
