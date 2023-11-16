import React from 'react'

import LoginScreen from "./src/screens/LoginScreen";
import CadastroScreen from "./src/screens/CadastroScreen";
import HomeScreen from "./src/screens/HomeScreen";
import HistoricoScreen from "./src/screens/HistoricoScreen";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }} />
        <Stack.Screen
          name="Cadastro"
          component={CadastroScreen}
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }} />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }} />
        <Stack.Screen
          name="Historico"
          component={HistoricoScreen}
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

