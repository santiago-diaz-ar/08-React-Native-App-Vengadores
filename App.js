/* import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native"; */

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./components/home/home";
import Detail from "./components/detail/detail";
import Information from "./components/information/information";
import Commics from "./components/commics/Commics";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Information" component={Information} />
        <Stack.Screen name="Commics" component={Commics} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
}); */
