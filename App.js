/*

Integrantes: 
  Flavio Esrenko Zorzetto RM93175
  Lucas Kenji Nishida RM94233
  Wesley Novais Kleim RM94412
  Jorge Rodrigo dos Santos RM93418
  Lucas Gonçalves Leu De Lima RM88349

*/

import React from 'react'
import { StatusBar } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";

import Routes from './src/routes';

import AuthProvider from './src/contexts/auth';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  )
}

