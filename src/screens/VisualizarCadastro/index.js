import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function VisualizarCadastro({ navigation }) {
  return (
    <ScrollView>
      <View>
        <Text>Meu Cadastro</Text>
        <View>
          <Text>Nome: </Text>
          <Text>Sobrenome: </Text>
          <Text>Data de Nascimento: </Text>
          <Text>Peso: </Text>
          <Text>Altura: </Text>
          <Text>Sexo: </Text>
          <Text>Logradouro: </Text>
          <Text>Número: </Text>
          <Text>Bairro: </Text>
          <Text>Cidade: </Text>
          <Text>Estado: </Text>
          <Text>Cep: </Text>
        </View>
      </View>
    </ScrollView>

  )
}

const styles = StyleSheet.create({})