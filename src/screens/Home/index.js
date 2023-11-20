import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'

import { AuthContext } from '../../contexts/auth';

export default function HomeScreen({ navigation }) {

  const { user } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image style={styles.logo} source={require('../../assets/img/LogoPequena.png')} />
        <View style={styles.main}>
          <Text style={styles.t1}>Olá, Leonidas</Text>
          <View style={styles.perfil}>
            <View style={styles.containerPerfil}>
              <Image source={require('../../assets/img/Perfil.png')} />
              <View style={styles.links}>
                <TouchableOpacity style={styles.link}>
                  <Text style={styles.linkTxt}>Visulizar minhas informações</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.link}>
                  <Text style={styles.linkTxt}>Editar minhas informações</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Text style={styles.t2}>Últimas atualizações</Text>
          <View style={styles.atualizaçoes}>
            <Text style={styles.atualizaçoesTxt}>01/09/22 - AMA CAPÃO REDONDO - CAPÃO REDONDO</Text>
            <Text style={styles.atualizaçoesTxt}>25/04/23 - LEFORT - MORUMBI</Text>
            <Text style={styles.atualizaçoesTxt}>22/03/23 - LEFORT - MORUMBI</Text>
            <Text style={styles.atualizaçoesTxt}>05/03/23 - HOSPITAL DA LUZ - LUZ</Text>
            <Text style={styles.atualizaçoesTxt}>01/09/22 - AMA CAPÃO REDONDO - CAPÃO REDONDO</Text>
            <Text style={styles.atualizaçoesTxt}>14/05/21 - UPS PARQUE FERNANDA - JARDIM FERNANDA</Text>
          </View>
        </View>
        <View style={styles.divisor}></View>
        <View style={styles.botoes}>
          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Historico')}>
            <Text style={styles.btnTxt}>Histórico de Atendimentos</Text>
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
  },
  scrollView: {
    marginTop: 30,
    marginLeft: 34,
    marginRight: 34,
  },
  main: {
    marginTop: 50,
    alignItems: 'center',
  },
  t1: {
    color: '#4788c6',
    fontSize: 56,
  },
  perfil: {
    marginTop: 20,
    width: 330,
    height: 90,
    backgroundColor: '#4788c6',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 4,
  },
  containerPerfil: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  links: {
    justifyContent: 'center',
    marginLeft: 20,
  },
  link: {
    marginBottom: 5,
  },
  linkTxt: {
    fontSize: 14,
    color: 'white',
    textDecorationLine: 'underline',
  },
  t2: {
    marginTop: 30,
    color: '#4788c6',
    fontSize: 28,
  },
  atualizaçoes: {
    marginTop: 15,
    alignSelf: 'flex-start',
  },
  atualizaçoesTxt: {
    fontSize: 13,
  },
  divisor: {
    backgroundColor: '#4788c6',
    width: 345,
    height: 2,
    borderRadius: 1,
    marginTop: 30,
    marginBottom: 30
  },
  botoes: {
    alignItems: 'center',
  },
  btn: {
    width: 330,
    height: 50,
    backgroundColor: '#4788c6',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  btnTxt: {
    color: 'white',
    fontSize: 20,
  },

})