import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UsuarioOuProfissional from '../screens/UsuarioOuProfissional'
import Home from '../screens/Home'
import Historico from '../screens/Historico'
import CadastroUsuario from '../screens/CadastroUsuario'
import CadastroProfissional from '../screens/CadastroProfissional'
import Atendimento from '../screens/Atendimento'

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UsuarioOuProfissional"
        component={UsuarioOuProfissional}
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Historico"
        component={Historico}
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CadastroUsuario"
        component={CadastroUsuario}
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CadastroProfissional"
        component={CadastroProfissional}
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Atendimento"
        component={Atendimento}
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}