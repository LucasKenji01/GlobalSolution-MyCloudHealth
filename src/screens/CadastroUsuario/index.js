import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

export default function CadastroUsuarioScreen({ navigation }) {
  return (
    <ScrollView style={styles.background}>
      <View style={styles.container}>
        <Image source={require('../../assets/img/LogoPequena.png')} />
        <TouchableOpacity style={styles.voltar} onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/img/Voltar.png')} />
        </TouchableOpacity>
        <View style={styles.containerTitulo}>
          <Text style={styles.titulo}>Cadastro - Usuário</Text>
        </View>
        <View style={styles.form}>
          <Text style={styles.label}>Nome</Text>
          <TextInput style={styles.input} />
          <Text style={styles.label}>Sobrenome</Text>
          <TextInput style={styles.input} />
          <Text style={styles.label}>Data de Nascimento</Text>
          <TextInput style={styles.input} />
          <View style={styles.pesoEAltura}>
            <View style={styles.gap}>
              <Text style={styles.label}>Peso</Text>
              <TextInput style={styles.inputPesoEAltura} />
            </View>
            <View>
              <Text style={styles.label}>Altura</Text>
              <TextInput style={styles.inputPesoEAltura} />
            </View>
          </View>
          <Text style={styles.label}>Sexo</Text>
          <TextInput style={styles.input} />
          <Text style={styles.label}>Logradouro</Text>
          <TextInput style={styles.input} />
          <Text style={styles.label}>Número</Text>
          <TextInput style={styles.input} />
          <Text style={styles.label}>Bairro</Text>
          <TextInput style={styles.input} />
          <Text style={styles.label}>Cidade</Text>
          <TextInput style={styles.input} />
          <Text style={styles.label}>Estado</Text>
          <TextInput style={styles.input} />
          <Text style={styles.label}>Cep</Text>
          <TextInput style={styles.input} />

          <View style={styles.containerBtn}>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Home')}>
              <Text style={styles.btnTxt}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    marginTop: 30,
    marginLeft: 34,
    marginRight: 34,
  },
  voltar: {
    marginTop: 30,
  },
  containerTitulo: {
    alignItems: 'center',
    marginTop: 10,
  },
  titulo: {
    fontSize: 30,
    color: '#4788c6',
  },
  form: {
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    color: '#4788c6',
    marginBottom: 2,
  },
  input: {
    width: 330,
    height: 35,
    backgroundColor: '#d9d9d9',
    borderRadius: 4,
    padding: 2,
    marginBottom: 10,
  },
  pesoEAltura: {
    flexDirection: 'row',
  },
  inputPesoEAltura: {
    width: 160,
    height: 35,
    backgroundColor: '#d9d9d9',
    borderRadius: 4,
    padding: 2,
    marginBottom: 10,
  },
  gap: {
    marginRight: 10,
  },
  containerBtn: {
    alignItems: 'center',
    marginBottom: 30,
  },
  btn: {
    marginTop: 30,
    width: 150,
    height: 40,
    backgroundColor: '#4788c6',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  btnTxt: {
    fontSize: 18,
    color: 'white',
  },


})