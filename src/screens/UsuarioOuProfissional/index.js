import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function UsuarioOuProfissionalScreen({ navigation }) {
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Image source={require('../../assets/img/LogoGrande.png')} />
        <Text style={styles.txt}>Percebemos que você ainda não possui registro como usuário ou profissional</Text>
        <Text style={styles.escolha}>Selecione o tipo abaixo:</Text>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('CadastroUsuario')}>
          <Text style={styles.btnTxt}>Sou usuário</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTxt}>Sou profissional</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    marginTop: 120,
    marginLeft: 34,
    marginRight: 34,
    alignItems: 'center',
  },
  txt: {
    marginTop: 50,
    fontSize: 18,
    color: '#4788c6',
  },
  escolha: {
    marginTop: 30,
    fontSize: 16,
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

  }

})