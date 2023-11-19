import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "../screens/Login";
import CadastroLogin from "../screens/CadastroLogin";

const AuthStack = createNativeStackNavigator();

export default function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="CadastroLogin"
        component={CadastroLogin}
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
        }}
      />
    </AuthStack.Navigator>
  )
}