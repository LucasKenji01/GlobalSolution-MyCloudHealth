import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Alert } from 'react-native';
import React, { useState, useContext } from 'react';

import { AuthContext } from '../../contexts/auth';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../configs/firebase';

export default function LoginScreen({ navigation }) {

  const { setUser } = useContext(AuthContext)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const account = {
    email: email,
    password: password
  }

  async function handleLogin() {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setUser(true);
      })
      .catch((error) => {
        console.log('erro', JSON.stringify(error));
        if (error.code == 'auth/invalid-email')
          alert('Email inválido');
        else if (error.code == 'auth/wrong-password')
          alert('Senha inválida');
        else
          alert(error.message);
      })
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image style={styles.logo} source={require('../../assets/img/LogoGrande.png')} />

        <View style={styles.login}>
          <Text style={styles.titulo}>Login</Text>

          <View style={styles.email}>
            <Text style={styles.labelEmail}>Email</Text>
            <TextInput
              style={styles.inputEmail}
              placeholder='Digite seu email'
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>

          <View style={styles.password}>
            <Text style={styles.labelPassword}>Password</Text>
            <TextInput
              style={styles.inputPassword}
              placeholder='Digite sua senha'
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>

          <View style={styles.naoPossuiConta}>
            <Text style={styles.text}>Ainda não tem conta?</Text>
            <TouchableOpacity style={styles.link} onPress={() => { navigation.navigate('CadastroLogin') }}>
              <Text style={styles.linkTxt}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.btn} activeOpacity={0.8} onPress={handleLogin}>
            <Text style={styles.btnTxt}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  logo: {
    marginTop: 100,
  },
  login: {
    marginTop: 60,
    alignItems: 'center',
  },
  titulo: {
    color: '#4788c6',
    fontSize: 64,
  },
  email: {
    marginTop: 20,
    alignItems: 'center',
  },
  labelEmail: {
    color: '#4788c6',
    fontSize: 16,
    fontFamily: '',
    textTransform: 'uppercase',
  },
  inputEmail: {
    marginTop: 5,
    width: 250,
    height: 50,
    padding: 10,
    borderRadius: 4,
    backgroundColor: '#d9d9d9',
  },
  password: {
    marginTop: 20,
    alignItems: 'center',
  },
  labelPassword: {
    color: '#4788c6',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  inputPassword: {
    marginTop: 5,
    width: 250,
    height: 50,
    padding: 10,
    borderRadius: 4,
    backgroundColor: '#d9d9d9',
  },
  naoPossuiConta: {
    marginTop: 10,
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 12,
    color: '#000000',
  },
  link: {
    marginLeft: 5
  },
  linkTxt: {
    fontSize: 12,
    color: '#4788c6'
  },
  btn: {
    marginTop: 30,
    width: 150,
    height: 40,
    borderRadius: 4,
    backgroundColor: '#4788c6',
    justifyContent: 'center',
  },
  btnTxt: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 20,
  }



})